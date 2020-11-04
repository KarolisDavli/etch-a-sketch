const grid = document.querySelector('.grid');
const radio = document.querySelector('input');
const reset = document.querySelector('button');

let htmlStyles =
window.getComputedStyle(document.querySelector("html"));
let rowNum =
parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum =
parseInt(htmlStyles.getPropertyValue("--colNum"));

function createGrid(x, y) {
  // Loop to create a grid
  for (i = 1; i <= x * y; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    grid.appendChild(div);
    console.log(i);
  }

  // Add hover status to each grid item
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', changeColor);
  })

}

// Change color function
function changeColor() {
  this.classList.add('item-hover');
}

radio.addEventListener('change', createGrid);


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

// const grid = document.querySelector('.grid');
// const radio = document.querySelector('input');
// const reset = document.querySelector('button');

// let htmlStyles =
// window.getComputedStyle(document.querySelector("html"));
// let rowNum =
// parseInt(htmlStyles.getPropertyValue("--rowNum"));

// function createGrid() {
//   // Loop to create a grid
//   for (i = 1; i <= 16*16; i++) {
//     const div = document.createElement('div');
//     div.classList.add('item');
//     grid.appendChild(div);
//   }

//   // Add hover status to each grid item
//   const item = document.querySelectorAll('.item');
//   item.forEach((e) => {
//     e.addEventListener('mouseover', changeColor);
//   })

// }

// // Change color function
// function changeColor() {
//   this.classList.add('item-hover');
// }

// radio.addEventListener('change', createGrid);


// // Reset button
// reset.addEventListener('click', resetGrid);

// function resetGrid() {
//   grid.innerHTML = '';
//   rowNum = prompt('How many rows?');
// }

