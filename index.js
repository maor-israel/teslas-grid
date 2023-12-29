const createArrayFromNumber = (num) => {
  return Array.from(num.toString()).map((item) => parseInt(item));
};

const recursion = (arr) => {
  let DigitSum = 0;

  for (let j = 0; j < arr.length; j++) {
    const current = arr[j];
    DigitSum = current + DigitSum;
  }

  if (DigitSum > 9) {
    const array = createArrayFromNumber(DigitSum);
    return recursion(array);
  } else {
    return DigitSum;
  }
};

const calc = (multiplier, itterations) => {
  let result = multiplier;
  let outputArray = [];
  for (let i = 0; i < itterations; i++) {
    result = multiplier * result;
    const oldAray = createArrayFromNumber(result);
    outputArray.push(recursion(oldAray));
  }

  return outputArray;
};

// console.log(calc(0, 1000)); // infinte 0
// console.log(calc(1, 100)); // infinte 1
console.log(calc(2, 68)); // 68 limit
// console.log(calc(3, 43)); // 43 limit
// console.log(calc(4, 33)); // 33 limit
// console.log(calc(5, 29)); // 29 limit
// console.log(calc(6, 25)); // 25 limit
// console.log(calc(7, 23)); // 23 limit
// console.log(calc(8, 22)); // 22 limit
// console.log(calc(9, 21)); // 21 limit