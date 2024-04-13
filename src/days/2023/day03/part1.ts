//AoC 23; Day 3, Part 1
let solution = 0;
let input = getInput().split("\n");
for (let row = 0; row < input.length; row++) {
  const numbers = input[row].match(/\d+/g);

  let startIndex = 0;
  if (numbers) {
    for (let n = 0; n < numbers.length; n++) {
      const index =
        input[row].substring(startIndex).indexOf(numbers[n]) + startIndex;
      startIndex = index + numbers[n].length + 1;
      if (hasSymbol(index, numbers, row, n)) {
        solution += parseInt(numbers[n]);
      }
    }
  }
  /*
    for (let col = 0; col < input[row].length; col++) {
        if (/\d/.test(input[row][col])) {
            //Digit (if no entry open, add new entry with startEntry)
        } else if (input[row][col] == '.') {
            //. (if open entry set end index)
        } else {
            //Symbol (if open entry set end index)
        }
        //if (entry not fulfilled, fulfill entry (check for Symbols))
    }
    */
}
console.log(solution);

function hasSymbol(
  index: number,
  numbers: string[],
  r: number,
  n: number
): boolean {
  let hasSymbol = false;
  let positions = [];

  for (let x = index - 1; x <= index + numbers[n].length; x++) {
    positions.push({ x: x, y: r - 1 });
    positions.push({ x: x, y: r + 1 });
  }

  positions.push({ x: index - 1, y: r });
  positions.push({ x: index + numbers[n].length, y: r });

  for (const position of positions) {
    if (
      position.y >= 0 &&
      position.y <= input.length - 1 &&
      position.x >= 0 &&
      position.x <= input[0].length - 1
    ) {
      if (
        input[position.y][position.x] !== "." &&
        !input[position.y][position.x].match(/\d/)
      ) {
        hasSymbol = true;
        break;
      }
    }
  }

  return hasSymbol;
}
