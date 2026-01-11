export function capitalizeFirstLetter(str) {
  if (typeof str !== "string") {
    throw Error("function expects a string argument");
  }
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
