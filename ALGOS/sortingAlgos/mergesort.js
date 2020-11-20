const merge = (arr1, arr2) => {
  const newArr = [];

  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);

      i++;
    } else if (arr1[i] > arr2[j]) {
      newArr.push(arr2[j]);

      j++;
    } else {
      newArr.push(arr1[i]);
      newArr.push(arr2[j]);

      i++;
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = arr.length / 2;

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

const sorted = mergeSort([
  2,
  3,
  5,
  10,
  2,
  3,
  5,
  10,
  15,
  4,
  16,
  2,
  91,
  1,
  5,
  6,
  0,
  15,
  4,
  16
]);

console.log(sorted);
