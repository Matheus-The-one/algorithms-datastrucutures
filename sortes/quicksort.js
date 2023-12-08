function quicksort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length-1; i++) { // Fix loop condition
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quicksort(left), pivot, ...quicksort(right)];
  }
  
  const arr = [1, 5, 3, 6, -2, 7, -4, 10];
  console.log(quicksort(arr));
  