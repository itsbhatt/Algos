const getPivotIndex = (arr, start = 0, end = arr.length) => {
  const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    // console.log(arr, index1, index2);
  };

  const pivot = arr[start];
  let swapIndex = start;

  for (let i = start + 1; i < end; i++) {
    if (pivot > arr[i]) {
      swapIndex += 1;

      swapIndex !== i && swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);

  return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length) => {
  if (left < right) {
    const pivot = getPivotIndex(arr, left, right);

    // left
    quickSort(arr, left, pivot);

    // left
    quickSort(arr, pivot + 1, right);
  }

  console.log(arr);
  return arr;
};

quickSort([5, 2, 4, 1, -1, 45, 7]);
