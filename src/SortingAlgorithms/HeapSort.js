export function getHeapSortAnimations(array) {
  const animations = [];
  if (array.length < 1) return array;
  heapSort(array, animations);
  return animations;
}

function heapSort(array, animations) {}
