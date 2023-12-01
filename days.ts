const { getInput } = require('./inputs.ts');
export function executeDay(day: number, part: number, test: boolean) {
  try {
    let solution;
    eval(`solution = day_${day}_${part}(${test});`);
    return solution;
  } catch (e) {
    if (e != '') {
      const regex = /ReferenceError: day_[0-9]+_[0-9]+ is not defined/gm;
      if (regex.test(String(e))) {
        return 'Invalid Day';
      } else {
        console.log(String(e));
        return 'Error as above';
      }
    }
  }
}

function day_01_1(test: boolean) {
  let input = getInput(1, test);
  if (input==undefined) return;
  let inputArrary = input.split('\n');
  let solution = 0;
  for (let value of inputArrary) {
    let firstnumber = value.search(/^+[0-9]/);
    let secondnumber = value.search(/[0-9]+$/);;
    solution += parseInt(String(firstnumber) + String(secondnumber));
  }
  console.log('Some Day 01_1 info...', input);
  return solution;
}

function day_01_2(test: boolean) {
  let input = getInput(1, test);
  console.log('Some Day 01_2 info...', input);
  return 'wow';
}
