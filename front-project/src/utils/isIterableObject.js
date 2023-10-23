export function isIterableObject(obj) {
  if (typeof obj !== "object" || obj == null) {
    return false;
  }

  return typeof obj[Symbol.iterator] === "function";
}
