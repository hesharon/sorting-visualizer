var array_length;

export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length < 1) return array;
  heapSort(array, animations);
  return animations;
}

function heapify(arr, i, animations) {
  var left = 2 * i + 1;
  var right = 2 * i + 2;
  var max = i;
  if (left < array_length && arr[left] > arr[max]) {
    max = left;
  }

  if (right < array_length && arr[right] > arr[max]) {
    max = right;
  }

  if (max != i) {
    animations.push([i, arr[max]]);
    animations.push([max, arr[i]]);
    swap(arr, i, max);
    heapify(arr, max, animations);
  }
}

function heapSort(arr, animations) {
  array_length = arr.length;
  for (var i = Math.floor(array_length / 2); i >= 0; i--) {
    heapify(arr, i, animations);
  }

  for (i = arr.length - 1; i > 0; i--) {
    animations.push([0, arr[i]]);
    animations.push([i, arr[0]]);
    swap(arr, 0, i);
    array_length--;
    heapify(arr, 0, animations);
  }
}

function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
