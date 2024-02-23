export default async function run(
  test: boolean,
  getInput: Function
): Promise<string> {
  let input: string;
  let solution: string = "";
  if (test) {
    input = `
    someTESTinput
    `;
  } else {
    input = await getInput();
    if (
      input == undefined ||
      input == "" ||
      input == "\n" ||
      input == "\r\n" ||
      input == "\r" ||
      input == "\t" ||
      input == " " ||
      input == "{}"
    ) {
      console.error("Invalid input");
      throw new Error("Invalid input");
    }
  }

  // Add your code here

  console.log(
    "Running day_2023/day01/part1 with input: " + input.length + " characters:",
    input
  );
  solution = "helloworld";

  return solution;
}
