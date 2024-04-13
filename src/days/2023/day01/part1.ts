export default async function day(getInput: Function, test: boolean): Promise<string> {
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
  console.log(
    `Running 2023/day01/part1. Input has ${input.length} characters`
  );
  let solution: string = "";
  let number = 0;

  let inputArrary = input.split('\n');
  for (let value of inputArrary) {
    let firstnumber = value.search(/^+\d/);
    let secondnumber = value.search(/\d+$/);;
    number += parseInt(String(firstnumber) + String(secondnumber));
  }
  
  solution = String(number);
  return solution;
};
