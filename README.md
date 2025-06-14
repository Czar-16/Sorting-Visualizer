🌀 Sorting Visualizer

Overview 📖
The Sorting Visualizer is a web-based application that visually demonstrates the workings of various sorting algorithms. It allows users to generate random arrays of bars and observe how different algorithms (Bubble Sort, Selection Sort, Insertion Sort, Quick Sort, and Merge Sort) sort them in real-time. The project is built using HTML, CSS (with Bulma for styling), and JavaScript, featuring interactive controls for array size and animation speed. 🚀
Features ✨

🖱️ Interactive Controls: Adjust the array size (number of bars) and sorting speed using sliders.
📊 Multiple Algorithms: Visualize five sorting algorithms:
🫧 Bubble Sort
🔍 Selection Sort
➡️ Insertion Sort
⚡ Quick Sort
🔗 Merge Sort

🎨 Dynamic Visualization: Bars represent array elements, with heights indicating values. Color changes highlight comparisons, swaps, and sorted elements.
📱 Responsive Design: Bar widths adjust dynamically based on array size for optimal display.
🖥️ User Interface: Buttons to generate a new array or trigger sorting, with UI elements disabled during sorting to prevent interference.
🎥 Animation Feedback: Smooth transitions and color-coded bars (e.g., 🔴 for comparisons, 🟢 for sorted, 🩵 for reset) enhance understanding.

Technologies Used 🛠️

🌐 HTML: Structure for the visualizer, including the bar container and control buttons/sliders.
🎨 CSS: Styling for bars and layout, using Bulma for a modern look and custom styles for bar animations.
💻 JavaScript: Logic for array generation, sorting algorithms, and DOM manipulation for real-time visualization.

📸 Preview
Below are screenshots of the Sorting Visualizer in action, showing the array in different states:

Unsorted Array: A randomly generated array before sorting begins.
[Image 1](Image/img1.png)

Sorting in Progress: The array during a sorting algorithm, with bars highlighted in red to indicate comparisons (e.g., during Quick Sort).
[Image 1](Image/img2.png)

Sorting in Progress: Merge Sort
[Image 1](Image/img3.png)

Sorted Array: The array after sorting is complete, with all bars in green to indicate they are sorted.
[Image 1](Image/img4.png)
Setup Instructions ⚙️

📥 Clone or Download: Download the project files or clone the repository.
📂 File Structure:sorting-visualizer/
├── index.html
├── style.css
├── main.js
├── bubble.js
├── selection.js
├── insertion.js
├── quick.js
├── merge.js
├── screenshots/
│ ├── unsorted.png
│ ├── sorting.png
│ ├── sorted.png
└── README.me

🚀 Serve the Application:
Open index.html directly in a modern web browser (e.g., Chrome, Firefox). 🌍
Alternatively, use a local server (e.g., python -m http.server or VS Code's Live Server) to avoid CORS issues with external resources like Bulma. 🖥️

📦 Dependencies: No external installations are required. The project uses Bulma CSS via a CDN.

Usage 🎮

🌐 Open the Visualizer: Load index.html in a browser.
📈 Generate an Array:
Use the Size slider to set the number of bars (default: 60). 🔧
Click the New Array button to generate a new random array. 🔄

🛠️ Sort the Array:
Select a sorting algorithm by clicking its respective button (e.g., Bubble Sort, Quick Sort). 🖱️
Adjust the Speed slider to control animation speed (higher value = faster sorting). ⚡

👀 Observe the Animation:
Bars change colors to indicate comparisons (🔴), sorted elements (🟢), and other states (🩵, or in Quick Sort: 🟣 for pivot, 🟠 for current element, 🔵 for smaller elements).
The UI is disabled during sorting to prevent interruptions. 🔒

🔁 Repeat: Generate a new array or try a different algorithm.

Algorithm Details 📚

🫧 Bubble Sort: Repeatedly compares adjacent elements and swaps them if out of order. Time complexity: O(n²).
🔍 Selection Sort: Finds the minimum element in the unsorted portion and places it at the beginning. Time complexity: O(n²).
➡️ Insertion Sort: Builds a sorted portion by inserting each element into its correct position. Time complexity: O(n²).
⚡ Quick Sort: Uses a pivot to partition the array and recursively sorts sub-arrays. Average time complexity: O(n log n).
🔗 Merge Sort: Divides the array into halves, recursively sorts them, and merges them back. Time complexity: O(n log n).
