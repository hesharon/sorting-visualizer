// QUICKSORT
// Video on how quicksort works: https://www.youtube.com/watch?v=MZaf_9IZCrc
export function getQuickSortAnimations(array) {
  if (array.length <= 1) return array;
  const animations = [];
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(array, start, end, animations) {
  var pivot, partitionIndex;

  if (start < end) {
    pivot = end;
    partitionIndex = partition(array, pivot, start, end, animations);

    quickSortHelper(array, start, partitionIndex - 1, animations);
    quickSortHelper(array, partitionIndex + 1, end, animations);
  }
}

function partition(array, pivot, start, end, animations) {
  var pivotValue = array[pivot],
    partitionIndex = start;

  let newHeight, newHeight2;
  for (var i = start; i < end; i++) {
    animations.push([i, pivot]);
    animations.push([i, pivot]);

    if (array[i] < pivotValue) {
      newHeight = array[i];
      newHeight2 = array[partitionIndex];
      animations.push([i, newHeight2]);
      animations.push([partitionIndex, newHeight]);
      swap(array, i, partitionIndex);
      partitionIndex++;
    } else {
      animations.push([null, null]);
      animations.push([null, null]);
    }
  }
  newHeight = array[end];
  newHeight2 = array[partitionIndex];

  animations.push([end, partitionIndex]);
  animations.push([end, partitionIndex]);
  animations.push([end, newHeight2]);
  animations.push([partitionIndex, newHeight]);
  swap(array, end, partitionIndex);

  return partitionIndex;
}

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
