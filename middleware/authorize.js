export function authorizeModification(req, res, next) {
  const { role, id } = req.user;
  const userId = String(req.params.userId);

  if (role === "parent") {
    return next();
  }

  if (role === "child" && userId === String(id)) {
    return next();
  }

  return res.status(403).json({ error: "Access denied" });
}