// QUICKSORT
// Video on how quicksort works: https://www.youtube.com/watch?v=MZaf_9IZCrc
export function getQuickSortAnimations(array) {
  if (array.length <= 1) return array;
  const quickSortAnimations = [];
  quickSortHelper(array, 0, array.length - 1, quickSortAnimations);
  return quickSortAnimations;
}

function quickSortHelper(array, start, end, quickSortAnimations) {
  var pivot, partitionIndex;

  if (start < end) {
    pivot = end;
    partitionIndex = partition(array, pivot, start, end, quickSortAnimations);

    quickSortHelper(array, start, partitionIndex - 1, quickSortAnimations);
    quickSortHelper(array, partitionIndex + 1, end, quickSortAnimations);
  }
  //   while (j <= end) {
  //     quickSortAnimations.push([j, k]);
  //     quickSortAnimations.push([j, k]);
  //     if (array[j] < array[k]) {
  //       i++;
  //       quickSortAnimations.push([i, j]);
  //       swap(array, i, j);
  //     } else {
  //       quickSortAnimations.push([null, null]);
  //     }
  //     j++;
  //   }
  //   quickSortAnimations.push([i + 1, k]);
  //   quickSortAnimations.push([i + 1, k]);
  //   quickSortAnimations.push([i + 1, k]);
  //   swap(array, i + 1, k);

  //   quickSortHelper(array, start, i, quickSortAnimations);
  //   quickSortHelper(array, i + 2, end, quickSortAnimations);
}

function partition(array, pivot, start, end, quickSortAnimations) {
  var pivotValue = array[pivot],
    partitionIndex = start;

  for (var i = start; i < end; i++) {
    quickSortAnimations.push([i, pivot]);
    quickSortAnimations.push([i, pivot]);
    if (array[i] < pivotValue) {
      quickSortAnimations.push([i, partitionIndex]);
      swap(array, i, partitionIndex);
      partitionIndex++;
    } else {
      quickSortAnimations.push([null, null]);
    }
  }
  quickSortAnimations.push([end, partitionIndex]);
  quickSortAnimations.push([end, partitionIndex]);
  quickSortAnimations.push([end, partitionIndex]);
  swap(array, end, partitionIndex);
  return partitionIndex;
}

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
