import Typo from "typo-js";

// Initialize dictionary
const dictionary = new Typo("en_US");

export const preprocessInput = (text) => {
  return text
    .toLowerCase()
    .split(" ")
    .map((word) =>
      !dictionary.check(word)
        ? dictionary.suggest(word)[0] || word
        : word
    )
    .join(" ")
    .replace(/[^a-z\s]/g, "")
    .trim();
};
