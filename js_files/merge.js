const mergeSortbtn = document.querySelector(".mergeSort");

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

async function merge(left, right, startIdx, bars, speed) {
  let i = 0,
    j = 0,
    k = startIdx;
  const merged = [];

  // Merge two arrays
  while (i < left.length && j < right.length) {
    bars[k].style.backgroundColor = "#ff4136"; // Highlight merging position

    await delay(speed);

    if (left[i] <= right[j]) {
      merged.push(left[i]);
      array[k] = left[i];
      bars[k].style.height = `${left[i]}%`;
      i++;
    } else {
      merged.push(right[j]);
      array[k] = right[j];
      bars[k].style.height = `${right[j]}%`;
      j++;
    }

    bars[k].style.backgroundColor = "#2ecc40"; // Mark merged element green
    k++;
  }

  // Append remaining elements from left
  while (i < left.length) {
    bars[k].style.backgroundColor = "#ff4136";
    await delay(speed);
    merged.push(left[i]);
    array[k] = left[i];
    bars[k].style.height = `${left[i]}%`;
    bars[k].style.backgroundColor = "#2ecc40";
    i++;
    k++;
  }

  // Append remaining elements from right
  while (j < right.length) {
    bars[k].style.backgroundColor = "#ff4136";
    await delay(speed);
    merged.push(right[j]);
    array[k] = right[j];
    bars[k].style.height = `${right[j]}%`;
    bars[k].style.backgroundColor = "#2ecc40";
    j++;
    k++;
  }

  return merged;
}

async function mergeSortHelper(start, end, bars, speed) {
  if (start >= end) {
    return [array[start]];
  }

  const mid = Math.floor((start + end) / 2);
  const left = await mergeSortHelper(start, mid, bars, speed);
  const right = await mergeSortHelper(mid + 1, end, bars, speed);

  return await merge(left, right, start, bars, speed);
}

async function mergeSort() {
  disableUI();

  const bars = document.querySelectorAll(".bar");
  const speedSlider = document.querySelector("#speed input"); // element is selected
  let speed = 310 - parseInt(speedSlider.value); // Reverse speed: higher value = faster (lower delay)

  // Start merge sort
  await mergeSortHelper(0, array.length - 1, bars, speed);

  // Ensure all bars are green when sorting is complete
  for (let k = 0; k < array.length; k++) {
    bars[k].style.backgroundColor = "#2ecc40";
  }

  // Re-enable the ui element after sorting
  enableUI();
}
mergeSortbtn.addEventListener("click", mergeSort);
