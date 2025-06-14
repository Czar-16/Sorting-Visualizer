const insertionSortbtn = document.querySelector(".insertionSort");

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

async function insertionSort() {
  disableUI();

  const bars = document.querySelectorAll(".bar");
  const speedSlider = document.querySelector("#speed input"); // element is selected
  let speed = 310 - parseInt(speedSlider.value); // Reverse speed: higher value = faster (lower delay)

  // Main algo
  for (let i = 1; i < array.length; i++) {
    let key = array[i]; // Current element to be inserted
    let j = i - 1; // Index of last element in sorted portion

    bars[i].style.backgroundColor = "#ff4136"; // Highlight current key

    await delay(speed);

    // Shift elements in sorted portion that are greater than key
    while (j >= 0 && array[j] > key) {
      bars[j].style.backgroundColor = "#ff4136"; // Highlight comparison
      bars[j + 1].style.backgroundColor = "#ff4136";

      await delay(speed);

      array[j + 1] = array[j]; // Shift element right
      bars[j + 1].style.height = `${array[j]}%`; // Update bar height

      bars[j].style.backgroundColor = "#00d1b2"; // Reset color
      bars[j + 1].style.backgroundColor = "#00d1b2";

      j--;
    }

    array[j + 1] = key; // Place key in correct position
    bars[j + 1].style.height = `${key}%`; // Update bar height

    // Mark sorted portion green
    for (let k = 0; k <= i; k++) {
      bars[k].style.backgroundColor = "#2ecc40";
    }

    await delay(speed);
  }

  // Ensure all bars are green when sorting is complete
  for (let k = 0; k < array.length; k++) {
    bars[k].style.backgroundColor = "#2ecc40";
  }

  // Re-enable the ui element after sorting
  enableUI();
}
insertionSortbtn.addEventListener("click", insertionSort);
