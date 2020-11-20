// should be sorted array

const maxSum = (arr, num) => {
  if (arr.length === 0) {
    console.log(-1);

    return -1;
  }

  let len = arr.length;

  for (let i = 0; i < len; i++) {
    const pos = Math.floor((i + len) / 2);

    // console.log({ i, len });
    if (arr[pos] < num) {
      i = pos;
    } else if (arr[pos] > num) {
      len = pos;
    } else {
      console.log(pos);
      return pos;
    }
  }

  console.log(-1);
  return -1;
};

maxSum([-15, -10, -8, -6, -5, -4, -2, -1, 0, 2, 3, 13, 16, 20], -21);
