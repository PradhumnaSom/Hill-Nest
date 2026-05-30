const mongoose = require("mongoose");

const buildMongoUri = () => {
  const uri = process.env.MONGO_URI;
  const dbName = process.env.MONGO_DB;

  if (!uri) {
    throw new Error("MONGO_URI is required");
  }

  if (!dbName) {
    return uri;
  }

  try {
    const url = new URL(uri);
    if (url.pathname && url.pathname !== "/") {
      return uri;
    }
    url.pathname = `/${dbName}`;
    return url.toString();
  } catch (err) {
    console.warn("Could not parse MONGO_URI as a URL; using the raw URI instead.");
    return uri;
  }
};

const connectDB = async () => {
  try {
    const uri = buildMongoUri();
    const conn = await mongoose.connect(uri);
    console.log("MongoDB Connected ✅", {
      host: conn.connection.host,
      name: conn.connection.name,
    });
  } catch (err) {
    console.error("MongoDB connection failed:", err.message);
    throw err;
  }
};

module.exports = connectDB;