const test = require("node:test");
const assert = require("node:assert/strict");
const Module = require("module");

function loadModuleWithMocks(modulePath, mocks) {
  const originalLoad = Module._load;

  Module._load = function patchedLoad(request, parent, isMain) {
    if (Object.prototype.hasOwnProperty.call(mocks, request)) {
      return mocks[request];
    }

    return originalLoad(request, parent, isMain);
  };

  delete require.cache[require.resolve(modulePath)];

  try {
    return require(modulePath);
  } finally {
    Module._load = originalLoad;
  }
}

function createResponseRecorder() {
  return {
    statusCode: 200,
    body: undefined,
    cookies: {},
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.body = payload;
      return this;
    },
    cookie(name, value) {
      this.cookies[name] = value;
      return this;
    },
    clearCookie(name) {
      delete this.cookies[name];
      return this;
    },
  };
}

test("getProfile only returns the public user fields", async () => {
  const { getProfile } = require("../controllers/profileController");

  const req = {
    user: {
      _id: "user123",
      name: "Asha",
      email: "asha@example.com",
      role: "user",
      emailVerified: true,
      emailVerificationToken: "secret-token",
      emailVerificationExpires: new Date(),
      passwordResetToken: "another-secret",
      passwordResetExpires: new Date(),
    },
  };
  const res = createResponseRecorder();

  await getProfile(req, res);

  assert.equal(res.statusCode, 200);
  assert.deepEqual(res.body.user, {
    id: "user123",
    name: "Asha",
    email: "asha@example.com",
    role: "user",
    emailVerified: true,
  });
  assert.equal(Object.hasOwn(res.body.user, "emailVerificationToken"), false);
  assert.equal(Object.hasOwn(res.body.user, "passwordResetToken"), false);
});

test("registerUser does not expose a verification devUrl in production", async () => {
  const originalNodeEnv = process.env.NODE_ENV;
  const originalJwtSecret = process.env.JWT_SECRET;

  try {
    process.env.NODE_ENV = "production";
    process.env.JWT_SECRET = "test-secret";

    const savedUsers = [];
    const fakeUser = {
      _id: "user123",
      name: "Asha",
      email: "asha@example.com",
      role: "user",
      emailVerified: false,
      createEmailVerificationToken: () => "verification-token",
      save: async () => {
        savedUsers.push(true);
      },
    };

    const userModel = {
      findOne: async () => null,
      create: async () => fakeUser,
    };

    const { registerUser } = loadModuleWithMocks("../controllers/authController", {
      "../models/User": userModel,
    });

    const req = {
      body: {
        name: "Asha",
        email: "asha@example.com",
        password: "securepass",
      },
      protocol: "https",
      get: () => "example.com",
    };
    const res = createResponseRecorder();

    await registerUser(req, res);

    assert.equal(res.statusCode, 201);
    assert.equal(res.body.emailVerification.required, true);
    assert.equal(Object.hasOwn(res.body.emailVerification, "devUrl"), false);
    assert.equal(savedUsers.length, 1);
  } finally {
    process.env.NODE_ENV = originalNodeEnv;
    process.env.JWT_SECRET = originalJwtSecret;
  }
});
