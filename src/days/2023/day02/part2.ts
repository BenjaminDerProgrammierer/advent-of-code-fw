//AoC 23; Day 2, Part 2
// FROM:
// Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// TO:
// [
//     [ //Game 1
//         [red: number, green: number, blue: number], //handful random cubes 1
//         [red: number, green: number, blue: number], //handful random cubes 2
//         [red: number, green: number, blue: number], //handful random cubes 3
//     ],
//     [ //Game 2
//         [red: number, green: number, blue: number],  //...
//         [red: number, green: number, blue: number],
//         [red: number, green: number, blue: number],
//     ],
//     [ // Game 3
//         [red: number, green: number, blue: number],
//         [red: number, green: number, blue: number],
//         [red: number, green: number, blue: number],
//     ],
//     //...
// ]

export default async function day(
  getInput: () => string,
  test: boolean
): Promise<string> {
  let input: string = "";
  if (test) {
    input = `
    someTESTinput
    `;
  } else {
    input = await getInput();
    if (input == undefined || input == "") {
      console.error("No input");
      throw new Error("No input");
    }
  }
  console.log(`Running 2023/day01/part1. Input has ${input.length} characters`);
  let solution: string = "";
  let number = 0;
  let inputArray = getInput()
    .split("\n")
    .map((g) => {
      g.split(": ")[1] //Trims Game X:
        .split("; ") // Seperates by ';': ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
        .map((p) => {
          let returnable: number[] = [0, 0, 0];
          p.split(", ").map((p) => {
            if (p.endsWith("red")) {
              returnable[0] = parseInt(p.split(" red")[0]);
            }
            if (p.endsWith("green")) {
              returnable[1] = parseInt(p.split(" green")[0]);
            }
            if (p.endsWith("blue")) {
              returnable[2] = parseInt(p.split(" blue")[0]);
            }
          });
          return returnable;
        });
    }); //splits games
  // [
  //     [[4, 0, 3], [1, 2, 6], [0, 2, 0]],
  //     [[0, 2, 1], [1, 3, 4], [0, 1, 1]],
  //     [[20, 8, 6], [4, 13, 5], [1, 5, 0]],
  //     [[3, 1, 6], [6, 3, 0], [14, 3, 15]],
  //     [[6, 3, 1], [1, 2, 2]]
  // ]
  for (let i = 0; i < inputArray.length; i++) {
    let fewestPossibe = [0, 0, 0];
    for (let j = 0; j < inputArray[i].length; j++) {
      for (let k = 0; k < 3; k++) {
        if (inputArray[i][j][k] > fewestPossibe[k]) {
          fewestPossibe[k] = inputArray[i][j][k];
        }
      }
    }
    number += fewestPossibe[0] * fewestPossibe[1] * fewestPossibe[2];
  }
  solution = String(number);
  return solution;
}
