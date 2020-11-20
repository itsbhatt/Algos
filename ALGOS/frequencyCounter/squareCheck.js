// compare two array params for second array has same length and each element  should be square of element of first array element same freqency
// order doesnt matter

// solution using method frequency counter

const squareCheck = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const obj = {};

  for (let el of arr1) {
    obj[el * el] = obj[el * el] ? obj[el * el] + 1 : 1;
  }

  for (let el of arr2) {
    if (!obj[el]) {
      return false;
    }

    obj[el] = obj[el] - 1;
  }

  return true;
};
