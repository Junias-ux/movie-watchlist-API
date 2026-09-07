const FALLBACK_SECRET =
  "jgh5s4JR6s4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h4g5h";

// IMPORTANT: read process.env.JWT_SECRET lazily, at call time, rather than
// caching it in a module-level constant. If we captured it once at import
// time, any code (including tests) that sets/changes process.env.JWT_SECRET
// after this module has been imported would be silently ignored, causing
// tokens to be signed with one secret and verified against another.
export function getJwtSecret() {
  return process.env.JWT_SECRET || FALLBACK_SECRET;
}