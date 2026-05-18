const DEFAULT_GRID_SIZE = 16;
const MAX_GRID_SIZE = 100;

const grid = document.querySelector("#grid");
const colorPicker = document.querySelector("#color-picker");
const resizeButton = document.querySelector("#resize-grid");
const clearButton = document.querySelector("#clear-grid");
let currentGridSize = DEFAULT_GRID_SIZE;

function hexToRgb(hexColor) {
  const red = parseInt(hexColor.slice(1, 3), 16);
  const green = parseInt(hexColor.slice(3, 5), 16);
  const blue = parseInt(hexColor.slice(5, 7), 16);

  return `${red}, ${green}, ${blue}`;
}

function shadeSquare(square) {
  const currentInteractions = Number(square.dataset.interactions) || 0;
  const nextInteractions = Math.min(currentInteractions + 1, 10);

  square.dataset.rgb = hexToRgb(colorPicker.value);
  square.dataset.interactions = nextInteractions;
  square.style.backgroundColor = `rgba(${square.dataset.rgb}, ${nextInteractions / 10})`;
}

function createSquare(size) {
  const square = document.createElement("div");
  square.classList.add("grid-square");
  square.style.flexBasis = `calc(100% / ${size})`;
  square.dataset.interactions = "0";

  square.addEventListener("mouseenter", () => shadeSquare(square));

  return square;
}

function createGrid(size = DEFAULT_GRID_SIZE) {
  currentGridSize = size;
  grid.replaceChildren();

  const squareCount = size * size;
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < squareCount; i += 1) {
    fragment.appendChild(createSquare(size));
  }

  grid.appendChild(fragment);
}

function askForGridSize() {
  const input = prompt(`How many squares per side? Enter a number from 1 to ${MAX_GRID_SIZE}.`);

  if (input === null) {
    return;
  }

  const size = Number(input);

  if (!Number.isInteger(size) || size < 1 || size > MAX_GRID_SIZE) {
    alert(`Please enter a whole number between 1 and ${MAX_GRID_SIZE}.`);
    return;
  }

  createGrid(size);
}

resizeButton.addEventListener("click", askForGridSize);
clearButton.addEventListener("click", () => createGrid(currentGridSize));

createGrid();
