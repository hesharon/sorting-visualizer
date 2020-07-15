export function getInsertionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  insertionSort(array, animations);
  return animations;
}

function insertionSort(array, animations) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1,
      temp = array[i];
    const newHeight = array[i];
    while (j >= 0 && array[j] > temp) {
      const newHeight2 = array[j];
      animations.push([j + 1, newHeight2]);
      array[j + 1] = array[j];
      j--;
    }
    animations.push([j + 1, newHeight]);
    array[j + 1] = temp;
  }
}
