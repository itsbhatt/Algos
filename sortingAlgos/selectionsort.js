const sort = (arr) => {
  let min;
  for (let i = 0; i < arr.length; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  console.log(arr);
  return arr;
};

sort([2, 3, 6, 5, 4, 2, 6, 8, 9]);
