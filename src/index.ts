//import { executeDay } from "./days/dynamicDays";
let day: number = 1;
let part: number = 1;
let test: boolean = true;
let year: number = 2015;
let mode: boolean = true; //true: dark | light: false

const inputs = {
  day: document.getElementById("day-input") as HTMLInputElement,
  radioButtons: document.querySelectorAll(
    "input[type='radio']"
  ) as unknown as HTMLInputElement[],
  submitButton: document.getElementById("submit-button") as HTMLButtonElement,
  resetButton: document.getElementById("reset-button") as HTMLButtonElement,
  settingsButton: document.getElementById("settings-button") as HTMLButtonElement,
  
  year: document.getElementById("year-input") as HTMLInputElement,
};

const outputs = {
  console: document.getElementById("console-output") as HTMLDivElement,
  year: document.getElementById("year-placeholder") as HTMLSpanElement,
  lightmode: document.getElementById("lightmode") as HTMLDivElement,
};

const modals = {
  settingsModal: {
    modal: document.getElementById("settings-modal") as HTMLDivElement,
    activateButton: document.getElementById("settings-button") as HTMLButtonElement,
    closeButton: document.querySelector("#settings-modal .close") as HTMLSpanElement
  }
}

modals.settingsModal.modal.style.display = "block";

outputs.year.innerText = String(year).substring(2);
outputs.console.innerHTML = "Output will appear here\n<br>";
outputs.lightmode.innerHTML = "";
outputs.lightmode.innerHTML = "<link rel='stylesheet' href='style-light.css'>";
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

inputs.year.addEventListener("change", () => {
  year = parseInt(inputs.year.value);
  if (day > 2099) {
    day = 2099;
  }
  if (day < 2015) {
    day = 2015;
  }
  inputs.year.value = String(year);
  outputs.year.innerText = String(year).substring(2);
});

inputs.radioButtons.forEach((button: HTMLInputElement) => {
  button.addEventListener("change", (e: Event) => {
    const target = e.target as HTMLInputElement;
    switch (target.name) {
      case "part":
        part = parseInt(target.value);
        break;
      case "test":
        test = target.value == "1";
        break;
      case "mode":
        mode = target.value == "1";
        outputs.lightmode.innerHTML = mode?"":"<link rel='stylesheet' href='style-light.css'>";
        break;
    }
  });
});

inputs.submitButton.addEventListener("click", () =>
  executeDay(year, day, part, test)
);

inputs.resetButton.addEventListener("click", () => {
  outputs.console.innerHTML = "";
});

modals.settingsModal.activateButton.addEventListener("click", () => {
  modals.settingsModal.modal.style.display = "block";
});

modals.settingsModal.closeButton.addEventListener("click", ()=> {
  modals.settingsModal.modal.style.display = "none";
})

function executeDay(
  year: number,
  day: number,
  part: number,
  test: boolean
) {
  console.log(
        "[ Day: " +
          day +
          " | Part " +
          part +
          " | " +
          (test ? "Test" : "Real") +
          " Input ]"
      );
}
