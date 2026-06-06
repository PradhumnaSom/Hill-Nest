const jwt = require("jsonwebtoken");
const User = require("../models/User");

const ACCESS_COOKIE_NAME = "project_f_access_token";

const getAccessToken = (req) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    return authHeader.split(" ")[1];
  }

  return req.cookies?.[ACCESS_COOKIE_NAME] || null;
};

const protect = async (req, res, next) => {
  try {
    const token = getAccessToken(req);

    if (!token) {
      return res.status(401).json({ message: "Not authorized, token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach the current user to the request for protected controllers.
    const user = await User.findById(decoded.id).select("name email role emailVerified");

    if (!user) {
      return res.status(401).json({ message: "Not authorized, user no longer exists" });
    }

    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized, token invalid" });
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Forbidden: insufficient permissions" });
    }

    return next();
  };
};

module.exports = {
  protect,
  authorizeRoles,
};
