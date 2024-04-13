import { enable, disable } from "../utils.js";

export async function executeDay(
  year: number,
  day: number,
  part: number,
  test: boolean
) {
  const zeroLeadingDay = String(day).padStart(2, "0");
  const modulePath = `/dist/days/${year}/day${zeroLeadingDay}/part${part}.js`;
  const inputPath = `/dist/days/${year}/day${zeroLeadingDay}/input.txt`;
  let solution: string = "Not implemented yet";
  async function getInput(): Promise<string | undefined> {
    return await readFile(inputPath)
      .catch((e) => {
        return undefined;
      })
      .then((input) => {
        return input;
      });
  }
  console.log(
    "[ Day: " +
      zeroLeadingDay +
      " | Part " +
      part +
      " | " +
      (test ? "Test" : "Real") +
      " Input ]"
  );
  disable("submit-button");
  try {
    const module = await import(modulePath);
    if (module.default !== undefined) {
      solution = await module.default(getInput, test);
    } else {
      throw new Error("No default module");
    }
  } catch (e: any) {
    console.error(
      `Day ${year}_${zeroLeadingDay}_${part}${test ? "_test" : ""} not found (${
        e.message
      })`
    );
  }

  console.log("Solution: " + solution);
  console.log("----------- ran code ------------");
  enable("submit-button");
}

async function readFile(filePath: string): Promise<string> {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch file: ${filePath}`);
    }
    const fileContent = await response.text();
    return fileContent;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

// old code
//   try {
//     let solution;
//     eval(`solution = day_${day}_${part}(${test});`);
//     return solution;
//   } catch (e) {
//     if (e != '') {
//       const regex = /ReferenceError: day_[0-9]+_[0-9]+ is not defined/gm;
//       if (regex.test(String(e))) {
//         return 'Invalid Day';
//       } else {
//         console.log(String(e));
//         return 'Error as above';
//       }
//     }
//   }
//
// function day_01_1(test: boolean) {
//   let input = getInput(1, test);
//   if (input==undefined) return;
//   let inputArrary = input.split('\n');
//   let solution = 0;
//   for (let value of inputArrary) {
//     let firstnumber = value.search(/^+\d/);
//     let secondnumber = value.search(/\d+$/);;
//     solution += parseInt(String(firstnumber) + String(secondnumber));
//   }
//   console.log('Some Day 01_1 info...', input);
//   return solution;
// }

// function day_01_2(test: boolean) {
//   let input = getInput(1, test);
//   console.log('Some Day 01_2 info...', input);
//   return 'wow';
// }

// export function getInput(day: number, test: boolean) {
//   try {
//     let input;
//     //getDay01Input(), getDay01TestInput()
//     eval(`input = getDay${day}${test ? 'Test' : ''}Input();`);
//     return input;
//   } catch (e) {
//     if (e != '') {
//       const regex =
//         /^ReferenceError: getDay\d+TestInput is not defined$|^ReferenceError: getDay\d+Input is not defined$/gm;
//       if (regex.test(String(e))) {
//         return 'Invalid Input';
//       } else {
//         console.log(String(e));
//         return 'Input-Error as above';
//       }
//     }
//   }
// }
//
