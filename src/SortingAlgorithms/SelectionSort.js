export function getSelectionSortAnimations(array) {
  if (array.length < 1) return array;
  const animations = [];
  selectionSort(array, animations);
  return animations;
}

function selectionSort(array, animations) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      animations.push([min, j]);
      animations.push([min, j]);
      if (array[min] > array[j]) {
        min = j;
      }
      animations.push([null, null]);
      animations.push([null, null]);
    }
    if (min !== i) {
      const newHeight = array[min];
      const newHeight2 = array[i];
      animations.push([min, i]);
      animations.push([min, i]);
      animations.push([min, newHeight2]);
      animations.push([i, newHeight]);
      swap(array, min, i);
    }
  }
}

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
