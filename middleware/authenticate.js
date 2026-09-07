import jwt from "jsonwebtoken";
import { getJwtSecret } from "../utils/jwt.js";

export function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  if (typeof authHeader !== "string" || !/^Bearer\s+/i.test(authHeader)) {
    return res.status(401).json({ error: "No token provided." });
  }

  const token = authHeader.replace(/^Bearer\s+/i, "").trim();

  if (!token) {
    return res.status(401).json({ error: "No token provided." });
  }

  try {
    const decoded = jwt.verify(token, getJwtSecret());
    req.user = decoded;
    return next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
}