// array should be sorted

const twoSum = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];

    if (sum === 0) {
      console.log([arr[left], arr[right]]);

      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left--;
    }
  }

  return false;
};

twoSum([-2, -1, 2, 5, 6]);
