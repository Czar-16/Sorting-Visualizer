// Get the container where bars will be displayed
const barsContainer = document.querySelector("#bars");
//Get the size slider input
const sizeSlider = document.querySelector("#size input");
//Get the newarray button-- green wala
const newArrayButton = document.querySelector("#newArray button");

// to store the value of bars
let array = [];

function generateArray(size) {
  array = [];
  //Generate random numbers b/w 10 to 100
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * (100 - 10 + 1)) + 10);
    // formula: Math.random()*(max-min+1)
    // The formula max - min calculates the difference between the biggest number (max = 100) and the smallest number (min = 10).
  }
  displayBars();
}

function displayBars() {
  //clear container
  barsContainer.innerHTML = "";
  // calculate width of each bar on width and array size
  let barWidth = 70 / array.length;
  // find out how wide each bar should be :in %

  for (let i = 0; i < array.length; i++) {
    let value = array[i];
    const bar = document.createElement("div");
    bar.classList.add("bar");
    // give the css class bar
    bar.style.height = value + "%"; // tall beased on array value if 80 then 80%

    bar.style.width = barWidth + "%"; // here for width
    barsContainer.appendChild(bar);
  }
}
// Function to initialize the visualizer with default size
function init() {
  // Get the initial size from the slider (default is 60)
  const initialSize = parseInt(sizeSlider.value);
  // Generate and display the initial array
  generateArray(initialSize);
}
// adding functionalities to newArray button
newArrayButton.addEventListener("click", function () {
  const size = parseInt(sizeSlider.value);
  generateArray(size);
});

// adding functionalities for the size slider that changes
sizeSlider.addEventListener("input", function () {
  const size = parseInt(sizeSlider.value);
  generateArray(size);
});

window.onload = init;
