// count unique values in the sorted array

const twoSum = (arr) => {
  if (arr.length === 0) {
    console.log(0);

    return 0;
  }

  let i = 0;

  for (let j = 1; j < arr.length; j++)
    if (arr[i] !== arr[j]) {
      // console.log(arr[j]);
      i++;
      arr[i] = arr[j];
    }

  console.log(i + 1);
  //   console.log(arr);
  return i + 1;
};

twoSum([-6, -1, 2, 2, 5, 5, 6, 6, 8, 10]);
