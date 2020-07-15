export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  bubbleSort(array, animations);
  return animations;
}

function bubbleSort(array, animations) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      animations.push([i, j]); // Colour
      animations.push([i, j]); // De-colour
      if (array[j] > array[j + 1]) {
        const newHeight = array[j],
          newHeight2 = array[j + 1];
        animations.push([j, newHeight2]);
        animations.push([j + 1, newHeight]);
        swap(array, j, j + 1);
      } else {
        animations.push([null, null]);
        animations.push([null, null]);
      }
    }
  }
}

function swap(array, index1, index2) {
  var temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}
