export function getInput(day: number, test: boolean) {
  try {
    let input;
    eval(`input = getDay${day}${test ? 'Test' : ''}Input();`);
    return input;
  } catch (e) {
    if (e != '') {
      const regex =
        /^ReferenceError: getDay\d+TestInput is not defined$|^ReferenceError: getDay\d+Input is not defined$/gm;
      if (regex.test(String(e))) {
        return 'Invalid Input';
      } else {
        console.log(String(e));
        return 'Input-Error as above';
      }
    }
  }
}
export function getDay1Input(): string {
  return `day1`;
}

export function getDay1TestInput(): string {
  return `day1Test`;
}
