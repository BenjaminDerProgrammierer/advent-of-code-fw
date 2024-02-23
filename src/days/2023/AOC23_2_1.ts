// //AoC 23; Day 2, Part 1
// // FROM:
// // Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
// // Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
// // Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
// // Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
// // Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green
// // TO:
// // [
// //     [ //Game 1
// //         [red: number, green: number, blue: number], //handful random cubes 1
// //         [red: number, green: number, blue: number], //handful random cubes 2
// //         [red: number, green: number, blue: number], //handful random cubes 3
// //     ],
// //     [ //Game 2
// //         [red: number, green: number, blue: number],  //...
// //         [red: number, green: number, blue: number],
// //         [red: number, green: number, blue: number],
// //     ],
// //     [ // Game 3
// //         [red: number, green: number, blue: number],
// //         [red: number, green: number, blue: number],
// //         [red: number, green: number, blue: number],
// //     ],
// //     //...
// // ]

// let solution = 0;
// let input = getInput()
//     .split('\n')
//     .map((g) =>
//         g
//             .split(': ')[1] //Trims Game X:
//             .split('; ') // Seperates by ';': ["3 blue, 4 red", "1 red, 2 green, 6 blue", "2 green"]
//             .map((p) => {
//                 let returnable = [0, 0, 0]
//                 p.split(', ').map((p) => {
//                     if (p.endsWith('red')) {
//                         returnable[0] = parseInt(p.split(' red')[0])
//                     }
//                     if (p.endsWith('green')) {
//                         returnable[1] = parseInt(p.split(' green')[0])
//                     }
//                     if (p.endsWith('blue')) {
//                         returnable[2] = parseInt(p.split(' blue')[0])
//                     }
//                 })
//                 return returnable;
//             }
//             )
//     ) //splits games

// const max = [12, 13, 14]; // r, g, b
// for (let i = 0; i < input.length; i++) {
//     let possible = true
//     for (let j = 0; j < input[i].length; j++) {
//         for (let k = 0; k < 3; k++) {
//             if (input[i][j][k] > max[k]) possible = false;
//         }
//     }
//     if (possible == true) solution += i + 1
// }

// console.log(solution)