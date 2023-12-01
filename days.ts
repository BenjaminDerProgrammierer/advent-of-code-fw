import { getInput } from './inputs';
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

function day_1_1(test: boolean) {
  let input = getInput(1, test);
  console.log('Some Day 1_1 info...', input);
  return 'wow';
}
function day_17_1(test) {
  let input = getInput(17, test);
  console.log('Some Day 17_1 info...', input);
  return 'wow';
}

function day_17_2(test) {
  let input = getInput(17, test);
  console.log('Some Day 17_2 info...', input);
  return 'wow';
}
function day_17_1(test) {
  let input = getInput(17, test);
  console.log('Some Day 17_1 info...', input);
  return 'wow';
}

function day_17_2(test) {
  let input = getInput(17, test);
  console.log('Some Day 17_2 info...', input);
  return 'wow';
}
function day_01_1(test) {
  let input = getInput(01, test);
  console.log('Some Day 01_1 info...', input);
  return 'wow';
}

function day_01_2(test) {
  let input = getInput(01, test);
  console.log('Some Day 01_2 info...', input);
  return 'wow';
}
