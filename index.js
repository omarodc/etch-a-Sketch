// Create a webpage with a 16x16 grid of square divs.
const grid = document.querySelector(".container");
const btn = document.getElementById("prompt");

let column = 16;
let row = 16;

function createCanvas() {
  for (let i = 0; i < column; i++) {
    for (let y = 0; y < row; y++) {
      const canvas = document.createElement("div");
      canvas.classList.add("size");
      grid.appendChild(canvas);
    }
  }
  // “hover” effect so that the grid divs change color when mouse passes over them,
  //  leaving a (pixelated) trail through he grid like a pen would.
  const newColor = document.querySelectorAll(".size");
  for (let color of newColor) {
    color.addEventListener("mouseover", () => {
      color.style.backgroundColor = "green";
    });
  }
}
createCanvas();

btn.addEventListener("click", () => {
  const input = prompt("Enter a new size for the grid max(100x100):");
  console.log(input);
});
