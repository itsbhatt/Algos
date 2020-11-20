// for almost sorted arrays

const sort = (arr) => {
  let swap;
  for (let i = arr.length; i > 0; i--) {
    swap = false;
    for (let j = 0; j < i - 1; j++) {
      console.log(i, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swap = true;
      }
    }

    if (!swap) {
      break;
    }
  }
  console.log(arr);
};

sort([2, 6, 5, 10, 12, 13]);
