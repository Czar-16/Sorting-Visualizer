const bubbleSortbtn = document.querySelector(".bubbleSort");

// Disble the buttons
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

async function bubbleSort() {
  disableUI();

  const bars = document.querySelectorAll(".bar");
  const speedSlider = document.querySelector("#speed input"); //element is selected
  let speed = 310 - parseInt(speedSlider.value); // 20 to 300ms and .value always return a string
  // 310-speed = delay -- as speed
  //  speed = 20 delay 290 ms -- slow
  //speed =300 delay 10 ms -- super fast

  // Main algo
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      bars[j].style.backgroundColor = "#ff4136";
      bars[j + 1].style.backgroundColor = "#ff4136";

      await delay(speed);

      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        // update the height of the corresponding bars
        bars[j].style.height = `${array[j]}%`;
        bars[j + 1].style.height = `${array[j + 1]}%`;
      }

      // resets the bar colors
      bars[j].style.backgroundColor = "#00d1b2";
      bars[j + 1].style.backgroundColor = "#00d1b2";
      await delay(speed);
    }

    // make the last sorted bar green
    bars[array.length - 1 - i].style.backgroundColor = "#2ecc40";
  }

  // Mark the first bar as sorted (last remaining)
  bars[0].style.backgroundColor = "#2ecc40";

  // Re-enable the ui element after sorting
  enableUI();
}

bubbleSortbtn.addEventListener("click", bubbleSort);
