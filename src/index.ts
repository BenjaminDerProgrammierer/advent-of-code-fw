let day: number = 1;
let part: number = 1;
let test: boolean = true;
let year: number = 2023;

const inputs = {
  day: document.getElementById("day") as HTMLInputElement,
  radioButtons: document.querySelectorAll(
    'input[type="radio"]'
  ) as unknown as HTMLInputElement[],
  submit: document.getElementById("submit") as HTMLButtonElement,
  reset: document.getElementById("reset") as HTMLButtonElement,
};
const outputs = {
  console: document.getElementById("console") as HTMLDivElement,
  year: document.getElementById("year") as HTMLSpanElement,
};
outputs.year.innerText = String(year).substring(2);
outputs.console.innerHTML = "";

const oldconsole = console;
console = {
  ...oldconsole,
  log: function () {
    var joinedArguments: string = "";
    for (let arg of arguments) {
      if (arg !== null) {
        switch (typeof arg) {
          case "string":
            joinedArguments += arg;
            break;
          case "number":
            joinedArguments += "<span class='number'>" + arg + "</span>";
            break;
          case "boolean":
            joinedArguments += "<span class='boolean'>" + arg + "</span>";
            break;
          case "undefined":
            joinedArguments += "<span class='undefined'>undefined</span>";
            break;
          case "object":
            joinedArguments += JSON.stringify(arg);
            break;
          case "function":
            joinedArguments += String(arg);
            break;
          default:
            joinedArguments += typeof arg + ": " + arg;
        }
      } else joinedArguments += "<span class='undefined'>null</span>";

      // Add a space between arguments
      joinedArguments += "<br />";
    }

    // Append the joined arguments to the consoleOutput element
    outputs.console.innerHTML += joinedArguments + "\n";

    // Call the original console.log function
    oldconsole.log.apply(console, arguments as any);
  },
  error: function () {
    outputs.console.innerHTML +=
      "<span class='error'>" + arguments[0] + "</span><br />\n";
    oldconsole.error.apply(console, arguments as any);
  },
  warn: function () {
    outputs.console.innerHTML +=
      "<span class='warn'>" + arguments[0] + "</span><br />\n";
    oldconsole.warn.apply(console, arguments as any);
  },
};

inputs.day.addEventListener("change", () => {
  day = parseInt(inputs.day.value);
  if (day > 25) {
    day = 25;
  }
  if (day < 1) {
    day = 1;
  }
  inputs.day.value = String(day);
});

inputs.radioButtons.forEach((button: Element) => {
  button.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "part":
        part = parseInt(target.value);
        break;
      case "test":
        test = target.value == "1";
        break;
    }
  });
});

inputs.submit.addEventListener("click", () => executeDay(day, part, test));

async function executeDay(day: number, part: number, test: boolean) {
  let zeroLeadingDay = String(day).padStart(2, "0");
  console.log(
    "[ Day: " +
      zeroLeadingDay +
      " | Part " +
      part +
      " | " +
      (test ? "Test Input" : "Real Input") +
      " ]"
  );
  let solution: String = "Not implemented yet";
  const modulePath = `./days/${year}/day${zeroLeadingDay}/part${part}.js`;
  try {
    await import(modulePath).then((module) => {
      if (module.default !== undefined) {
        solution = module.default(year, part, day, test);
      } else {
        throw new Error("No default module");
      }
    });
  } catch (e: any) {
    console.error(
      `Day ${year}_${zeroLeadingDay}_${part}_${test ? "test" : ""} not found`
    );
  }

  console.log("Solution: " + solution);
  console.log("--------------- ran code --------------");
}

//OLD CODE
// export function runDay(day: number, part: number, test: boolean) {
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
// }
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
// function getDay01Input(): string {
//   return `1abc2`;
// }

// function getDay01TestInput(): string {
//   return `1abc2`;
// }
