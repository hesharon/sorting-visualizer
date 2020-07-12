// MERGESORT

export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxillaryArray = array.slice();
  mergeSortHelper(array, auxillaryArray, animations, 0, array.length - 1);
  return animations;
}

function mergeSortHelper(array, aux, animations, start, end) {
  if (start === end) return;
  const mid = Math.floor((start + end) / 2);
  mergeSortHelper(aux, array, animations, start, mid);
  mergeSortHelper(aux, array, animations, mid + 1, end);
  merge(array, aux, animations, start, mid, end);
}

function merge(array, aux, animations, start, mid, end) {
  let i = start,
    j = mid + 1,
    k = start;
  while (i <= mid && j <= end) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (aux[i] <= aux[j]) {
      animations.push([k, aux[i]]);
      array[k++] = aux[i++];
    } else {
      animations.push([k, aux[j]]);
      array[k++] = aux[j++];
    }
  }

  while (i <= mid) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, aux[i]]);
    array[k++] = aux[i++];
  }

  while (j <= end) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, aux[j]]);
    array[k++] = aux[j++];
  }
}
