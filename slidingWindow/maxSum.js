//

const maxSum = (arr, len) => {
  if (arr.length === 0 || arr.length < len) {
    console.log(null);

    return null;
  }

  let sum = 0;

  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }

  let newSum = sum;

  for (let i = len; i <= arr.length - 1; i++) {
    // console.log(newSum, arr[i - len], arr[len], 'f');

    newSum = newSum - arr[i - len] + arr[i];

    // console.log({ newSum });

    if (newSum > sum) {
      sum = newSum;
    }
  }

  console.log(sum);
  return sum;
};

maxSum([-6, -1, 2, 2, -15, -5, -4, 16, -8, -10], 3);
