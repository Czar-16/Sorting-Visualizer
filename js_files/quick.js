const quickSortbtn = document.querySelector(".quickSort");

// Disable the buttons
function disableUI() {
  document.querySelector("#size input").disabled = true;
  document.querySelector("#speed input").disabled = true;
  // only #size -- it will only access the div but we have to the input element
  document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = true)); // disable each button
}
function enableUI() {
  document.querySelector("#size input").disabled = false;
  document.querySelector("#speed input").disabled = false;

  document.querySelectorAll(".btn").forEach((btn) => (btn.disabled = false));
}

// Delay for Animation
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// resolve- signal for the wait is over.

async function partition(start, end, bars, speed) {
  let pivot = array[end]; // Choose last element as pivot
  bars[end].style.backgroundColor = "#800080"; // Highlight pivot in purple

  let i = start - 1; // Index of smaller element

  for (let j = start; j < end; j++) {
    bars[j].style.backgroundColor = "#ffa500"; // Highlight current element in orange

    await delay(speed);

    if (array[j] <= pivot) {
      i++;
      // Swap elements
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;

      // Update bar heights
      bars[i].style.height = `${array[i]}%`;
      bars[j].style.height = `${array[j]}%`;

      bars[i].style.backgroundColor = "#007bff"; // Mark smaller element blue
    } else {
      bars[j].style.backgroundColor = "#00d1b2"; // Reset non-swapped element to teal
    }
  }

  // Place pivot in correct position
  let temp = array[i + 1];
  array[i + 1] = array[end];
  array[end] = temp;

  bars[i + 1].style.height = `${array[i + 1]}%`;
  bars[end].style.height = `${array[end]}%`;

  bars[end].style.backgroundColor = "#00d1b2"; // Reset pivot color to teal
  bars[i + 1].style.backgroundColor = "#2ecc40"; // Mark pivot position green

  await delay(speed);

  // Reset blue bars to teal for next recursion
  for (let k = start; k <= i; k++) {
    bars[k].style.backgroundColor = "#00d1b2"; // Reset left partition to teal
  }

  return i + 1; // Return pivot index
}

async function quickSortHelper(start, end, bars, speed) {
  if (start < end) {
    let pi = await partition(start, end, bars, speed); // Get pivot index
    await quickSortHelper(start, pi - 1, bars, speed); // Sort left of pivot
    await quickSortHelper(pi + 1, end, bars, speed); // Sort right of pivot
  } else if (start === end) {
    // Single element is sorted
    bars[start].style.backgroundColor = "#2ecc40"; // Mark single element green
    await delay(speed);
  }
}

async function quickSort() {
  disableUI();

  const bars = document.querySelectorAll(".bar");
  const speedSlider = document.querySelector("#speed input"); // element is selected
  let speed = 310 - parseInt(speedSlider.value); // Reverse speed: higher value = faster (lower delay)

  // Start quick sort
  await quickSortHelper(0, array.length - 1, bars, speed);

  // Ensure all bars are green when sorting is complete
  for (let k = 0; k < array.length; k++) {
    bars[k].style.backgroundColor = "#2ecc40";
  }

  // Re-enable the ui element after sorting
  enableUI();
}
quickSortbtn.addEventListener("click", quickSort);

//

// Color Legend:
// - Purple (#800080): Pivot element
// - Orange (#ffa500): Current element being compared
// - Blue (#007bff): Elements smaller than pivot (left partition)
// - Green (#2ecc40): Sorted elements in final position
// - Teal (#00d1b2): Reset or uninvolved elements
