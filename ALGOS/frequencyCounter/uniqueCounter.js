// count unique values in the array

const twoSum = (arr) => {
  let value = 0;
  let obj = {};

  for (let el of arr) {
    if (!obj[el]) {
      value++;

      obj[el] = 1;
    } else {
      obj[el]++;
    }
  }

  return value;
};

twoSum([-5, -1, 2, 5, 2, 6, 8, 10, 5, 6]);
