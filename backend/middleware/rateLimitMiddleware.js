const createRateLimiter = ({
  windowMs,
  maxRequests,
  message,
}) => {
  const requestsByKey = new Map();
  const normalizedWindowMs = Number.isFinite(windowMs) && windowMs > 0 ? windowMs : 10 * 60 * 1000;
  const normalizedMaxRequests = Number.isFinite(maxRequests) && maxRequests > 0 ? maxRequests : 10;

  const resolveClientKey = (req) => {
    const rawIp = req.ip || req.socket.remoteAddress || "unknown";

    // Normalize localhost IPv6/IPv4 mapped formats to a stable key.
    return String(rawIp).replace("::ffff:", "");
  };

  return (req, res, next) => {
    const key = resolveClientKey(req);
    const now = Date.now();
    const windowStart = now - normalizedWindowMs;

    const history = requestsByKey.get(key) || [];
    const recentHistory = history.filter((timestamp) => timestamp > windowStart);
    if (recentHistory.length === 0) {
      requestsByKey.delete(key);
    }

    const resetAtMs =
      recentHistory.length > 0 ? recentHistory[0] + normalizedWindowMs : now + normalizedWindowMs;
    const resetAfterSeconds = Math.max(1, Math.ceil((resetAtMs - now) / 1000));

    res.setHeader("X-RateLimit-Limit", normalizedMaxRequests);
    const remainingRequests = Math.max(0, normalizedMaxRequests - recentHistory.length - 1);
    res.setHeader("X-RateLimit-Remaining", remainingRequests);
    res.setHeader("X-RateLimit-Reset", resetAfterSeconds);

    if (recentHistory.length >= normalizedMaxRequests) {
      const retryAfterSeconds = resetAfterSeconds;
      res.setHeader("Retry-After", retryAfterSeconds);
      return res.status(429).json({
        message,
        retryAfterSeconds,
      });
    }

    recentHistory.push(now);
    requestsByKey.set(key, recentHistory);
    return next();
  };
};

const authRateLimiter = createRateLimiter({
  windowMs: Number(process.env.AUTH_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000),
  maxRequests: Number(process.env.AUTH_RATE_LIMIT_MAX || 10),
  message: "Too many authentication attempts. Please try again later.",
});

const apiRateLimiter = createRateLimiter({
  windowMs: Number(process.env.API_RATE_LIMIT_WINDOW_MS || 60 * 1000),
  maxRequests: Number(process.env.API_RATE_LIMIT_MAX || 240),
  message: "Too many requests. Please slow down and try again.",
});

module.exports = {
  createRateLimiter,
  authRateLimiter,
  apiRateLimiter,
};
