export function __error__text_(text: string) {
  if (typeof text != "string") {
    throw new Error("text must be a string");
  }
  if (text === "") {
    throw new Error("text cannot be empty");
  }
}
