// 2.	Write a function that is given a string, replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc.As an example:
// AlphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" as a string.

function alphabetPosition(text) {
  const letters = text.toLowerCase().replace(/[^a-z]/g, "");

  const result = letters
    .split("")
    .map((char) => char.charCodeAt(0) - 96)
    .join(" ");

  return result;
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
