const grid = document.querySelector(".container");
const column = 16;
const row = 16;

function createCanvas() {
  for (let i = 0; i < column; i++) {
    for (let y = 0; y < row; y++) {
      const canvas = document.createElement("div");
      canvas.classList.add("size");
      grid.appendChild(canvas);
    }
  }
}
createCanvas();
