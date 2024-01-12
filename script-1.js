// 1.	Make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// 2.	Examples:
//  Input: 21445 Output: 54421
//  Input: 145263 Output: 654321
//  Input: 1254859723 Output: 9875543221
function descendingOrder(number) {
  return parseInt(
    String(number)
      .split("")
      .sort((a, b) => b - a)
      .join("")
  );
}

// Examples
console.log(descendingOrder(21445));
console.log(descendingOrder(145263));
console.log(descendingOrder(76345912350));
