const selectionSortbtn = document.querySelector(".selectionSort");

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

async function selectionSort() {
  disableUI();

  const bars = document.querySelectorAll(".bar");
  const speedSlider = document.querySelector("#speed input"); // element is selected
  let speed = 310 - parseInt(speedSlider.value); // Reverse speed: higher value = faster (lower delay)

  // Main algo
  for (let i = 0; i < array.length - 1; i++) {
    let minIdx = i; // Index of minimum element

    bars[i].style.backgroundColor = "#ff4136"; // Highlight current position

    // Find minimum element in unsorted portion
    for (let j = i + 1; j < array.length; j++) {
      bars[j].style.backgroundColor = "#ff4136"; // Highlight comparison

      await delay(speed);

      if (array[j] < array[minIdx]) {
        // Reset previous min bar color
        if (minIdx !== i) {
          bars[minIdx].style.backgroundColor = "#00d1b2";
        }
        minIdx = j; // Update minimum index
        bars[minIdx].style.backgroundColor = "#ff4136"; // Highlight new minimum
      } else {
        bars[j].style.backgroundColor = "#00d1b2"; // Reset non-minimum bar
      }
    }

    // Swap if minimum is not at current position
    if (minIdx !== i) {
      let temp = array[i];
      array[i] = array[minIdx];
      array[minIdx] = temp;

      // Update bar heights
      bars[i].style.height = `${array[i]}%`;
      bars[minIdx].style.height = `${array[minIdx]}%`;
    }

    // Mark sorted position green
    bars[i].style.backgroundColor = "#2ecc40";

    await delay(speed);
  }

  // Mark last bar green
  bars[array.length - 1].style.backgroundColor = "#2ecc40";

  // Re-enable the ui element after sorting
  enableUI();
}
selectionSortbtn.addEventListener("click", selectionSort);
