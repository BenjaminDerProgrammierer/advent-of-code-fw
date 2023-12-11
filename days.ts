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

function day_01_1(test: boolean) {
  let input = getInput(1, test);
  if (input==undefined) return;
  let inputArrary = input.split('\n');
  let solution = 0;
  for (let value of inputArrary) {
    let firstnumber = value.search(/^+\d/);
    let secondnumber = value.search(/\d+$/);;
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
function day_02_1(test) {
  let input = getInput(02, test);
  console.log('Some Day 02_1 info...', input);
  return 'wow';
}

function day_02_2(test) {
  let input = getInput(02, test);
  console.log('Some Day 02_2 info...', input);
  return 'wow';
}
function day_03_1(test) {
  let input = getInput(03, test);
  console.log('Some Day 03_1 info...', input);
  return 'wow';
}

function day_03_2(test) {
  let input = getInput(03, test);
  console.log('Some Day 03_2 info...', input);
  return 'wow';
}
function day_04_1(test) {
  let input = getInput(04, test);
  console.log('Some Day 04_1 info...', input);
  return 'wow';
}

function day_04_2(test) {
  let input = getInput(04, test);
  console.log('Some Day 04_2 info...', input);
  return 'wow';
}
function day_05_1(test) {
  let input = getInput(05, test);
  console.log('Some Day 05_1 info...', input);
  return 'wow';
}

function day_05_2(test) {
  let input = getInput(05, test);
  console.log('Some Day 05_2 info...', input);
  return 'wow';
}
function day_06_1(test) {
  let input = getInput(06, test);
  console.log('Some Day 06_1 info...', input);
  return 'wow';
}

function day_06_2(test) {
  let input = getInput(06, test);
  console.log('Some Day 06_2 info...', input);
  return 'wow';
}
function day_07_1(test) {
  let input = getInput(07, test);
  console.log('Some Day 07_1 info...', input);
  return 'wow';
}

function day_07_2(test) {
  let input = getInput(07, test);
  console.log('Some Day 07_2 info...', input);
  return 'wow';
}
function day_08_1(test) {
  let input = getInput(08, test);
  console.log('Some Day 08_1 info...', input);
  return 'wow';
}

function day_08_2(test) {
  let input = getInput(08, test);
  console.log('Some Day 08_2 info...', input);
  return 'wow';
}
function day_09_1(test) {
  let input = getInput(09, test);
  console.log('Some Day 09_1 info...', input);
  return 'wow';
}

function day_09_2(test) {
  let input = getInput(09, test);
  console.log('Some Day 09_2 info...', input);
  return 'wow';
}
function day_10_1(test) {
  let input = getInput(10, test);
  console.log('Some Day 10_1 info...', input);
  return 'wow';
}

function day_10_2(test) {
  let input = getInput(10, test);
  console.log('Some Day 10_2 info...', input);
  return 'wow';
}
function day_11_1(test) {
  let input = getInput(11, test);
  console.log('Some Day 11_1 info...', input);
  return 'wow';
}

function day_11_2(test) {
  let input = getInput(11, test);
  console.log('Some Day 11_2 info...', input);
  return 'wow';
}
