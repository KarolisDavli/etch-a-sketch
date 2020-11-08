const grid = document.querySelector('.grid');
const radio = document.querySelector('input');
const reset = document.querySelector('.reset');
const rainbowButton = document.querySelector('.trip');
const item = document.querySelectorAll('.item');
const shades = document.querySelector('.black');



let htmlStyles =
window.getComputedStyle(document.querySelector("html"));
let rowNum =
parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum =
parseInt(htmlStyles.getPropertyValue("--colNum"));


// Create grid
function createGrid(x, y) {
  for (i = 1; i <= x * y; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    grid.appendChild(div);
    addHoverClass();
  }
}

 // Add hover status to each grid item
function addHoverClass() {
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', changeColor);
  })

  // Change color function
function changeColor() {
  this.classList.add('item-hover');
}
}

// Rainbow
rainbowButton.addEventListener('click', trip);

function trip() {
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', rainbowColors);
  })
}

// Random color
function rainbowColors() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  rainbow = "#" + randomColor;
  this.style.backgroundColor = rainbow;
}

// Black shades
shades.addEventListener('click', blackShades);

function blackShades() {
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', opacityIncrese);
    shade = 0;
  })
}

function opacityIncrese() {
  shade = shade + 0.1;
  console.log(shade);
  this.style.opacity = shade;
}




// Reset button
reset.addEventListener('click', resetGrid);

function resetGrid() {
  grid.innerHTML = '';
  colNum = prompt('How many rows?');
  rowNum = prompt('How many columns?');
  document.documentElement.style.setProperty("--colNum", colNum);
  document.documentElement.style.setProperty("--rowNum", rowNum);
  createGrid(colNum, rowNum)
}










// Dynamic CSS properties, pulling them with JS
// HTML input tag

// Updating CSS variables with input from user with a prompt

