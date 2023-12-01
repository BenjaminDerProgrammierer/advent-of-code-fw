//TODO: Make local version work: file problem
import { executeDay } from './days';
let day: number;
let part: number;
let test: boolean;
setupElements();

function setupElements() {
  const consoleOutput: HTMLDivElement = document.getElementById('console') as HTMLDivElement;
  consoleOutput.innerHTML = '';
  var oldConsoleLog = console.log;
  console.log = function () {
    var joinedArguments = '';
    for (let arg of arguments) {
      if (arg !== null) {
        switch (typeof arg) {
          case 'string':
            joinedArguments += arg;
            break;
          case 'number':
            joinedArguments += "<span class='number'>" + arg + '</span>';
            break;
          case 'boolean':
            joinedArguments += "<span class='boolean'>" + arg + '</span>';
            break;
          case 'undefined':
            joinedArguments += "<span class='undefined'>undefined</span>";
            break;
          case 'object':
            joinedArguments += JSON.stringify(arg);
            break;
          case 'function':
            joinedArguments += String(arg);
            break;
          default:
            joinedArguments += typeof arg + ': ' + arg;
        }
      } else joinedArguments += "<span class='undefined'>null</span>";

      // Add a space between arguments
      joinedArguments += '<br>';
    }

    // Append the joined arguments to the consoleOutput element
    consoleOutput.innerHTML += joinedArguments + '\n';

    // Call the original console.log function
    oldConsoleLog.apply(console, arguments as any);
  };

  const dayInput: HTMLInputElement = document.getElementById('day') as HTMLInputElement;
  day = parseInt(dayInput.value);
  dayInput.onchange = () => {
    day = parseInt(dayInput.value);
    if (day > 31) {
      day = 31;
    }
    if (day < 1) {
      day = 1;
    }
    dayInput.value = String(day);
  };

  const partInputs: HTMLInputElement[] = document.querySelectorAll(
    "input[type='radio'][name=part]"
  ) as unknown as HTMLInputElement[];
  part = 1;
  partInputs.forEach((e) =>
    e.addEventListener('change', () => {
      part = parseInt((document.querySelector(
        "input[type='radio'][name=part]:checked"
      ) as HTMLInputElement).value);
    })
  );

  const testInput: HTMLInputElement = document.querySelector(
    "input[type='checkbox'][name=test]"
  ) as HTMLInputElement;
  test = true;
  testInput.onchange = () => {
    test = testInput.checked;
  };
  const submitButton = document.getElementById('submit') as HTMLInputElement;
  submitButton.addEventListener('click', () => {
    console.log('[Day: ' + day + ' | Part: ' + part + ' | Test: ' + test + ']');
    console.log('Solution: ' + executeDay(day, part, test));
    console.log('---------------- ran code ----------------');
  });
  console.log('Output will appear here...');
}
