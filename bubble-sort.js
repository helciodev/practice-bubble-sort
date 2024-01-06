function bubbleSort(arr) {
  // Iterate through the array
  let swapped = false;
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let neighborToTheRight = arr[i + 1];
    if (current > neighborToTheRight) {
      // If the current value is greater than its neighbor to the right
      // Swap those values
      [arr[i], arr[i + 1]] = [neighborToTheRight, current];
      swapped = true;
      // Do not move this console.log
      console.log(arr.join(","));
    }
  }

  // If you get to the end of the array and no swaps have occurred, return
  if (!swapped) return;

  // Otherwise, repeat from the beginning
  bubbleSort(arr);
}
const arr = [2, 4, 6, 8, 1, 3, 5, 7, 9];
bubbleSort(arr);

module.exports = bubbleSort;
