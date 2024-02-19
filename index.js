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
      color.style.backgroundColor = "black";
    });
  }
}
createCanvas();

// reset grid when button is clicked and input size.
function reset() {
  document
    .querySelectorAll(".size")
    .forEach((e) => e.parentNode.removeChild(e));
}
// ask user for a grid size.
btn.addEventListener("click", () => {
  const input = parseInt(
    prompt("Enter a new size for the grid min(16x16),max(100x100):")
  );
  column = input;
  row = input;
  // check if input is in range of accepted value.
  if (column >= 16 && row >= 16 && column <= 100 && row <= 100) {
    reset();
    createCanvas();
  }
});

// TODO:
// Extra credit
// Transform the behavior of a square when interacting with the mouse by introducing a series of modifications.

// Rather than a color change from black to white, each interaction should randomize the square’s RGB value entirely.
// Additionally, implement a progressive darkening effect where each interaction
// adds 10% more black or color to the square. The objective is to achieve a completely
//  black square only after ten interactions.
// You can choose to do either one or both of these challenges, it’s up to you.
