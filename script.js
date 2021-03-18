const grid = document.querySelector('.grid');
const radio = document.querySelector('input');
const reset = document.querySelector('.reset');
const rainbowButton = document.querySelector('.trip');
const item = document.querySelectorAll('.item');
const shades = document.querySelector('.black');
const clear = document.querySelector('.clear');



let htmlStyles =
window.getComputedStyle(document.querySelector("html"));
let rowNum =
parseInt(htmlStyles.getPropertyValue("--rowNum"));
let colNum =
parseInt(htmlStyles.getPropertyValue("--colNum"));


// Create grid button
reset.addEventListener('click', resetGrid);

function resetGrid() {
  grid.innerHTML = '';
  colNum = prompt('How many columns?');
  rowNum = prompt('How many rows?');
  document.documentElement.style.setProperty("--colNum", colNum);
  document.documentElement.style.setProperty("--rowNum", rowNum);
  let size = colNum * rowNum
  if (rowNum <= 36 && rowNum <= 36) {
    createGrid(size);
  } else {
    alert("Max height/width = 36");
  }
}

// Grid generator
function createGrid(size) {
    for (i = 1; i <= size; i++) {
      const div = document.createElement('div');
      div.classList.add('item');
      grid.appendChild(div);
    }
}

 // Add hover status to each grid item
function addHoverClass() {
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', () => {
      e.classList.add('item-hover');
    });
  })
}


// Rainbow
rainbowButton.addEventListener('click', trip);

function trip() {
  const item = document.querySelectorAll('.item');
  item.forEach((e) => {
    e.addEventListener('mouseover', () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      rainbow = "#" + randomColor;
      e.style.backgroundColor = rainbow;
    });
  })
}


// Black shades
shades.addEventListener('click', blackShades);

function blackShades() {
    const item = document.querySelectorAll('.item');
    item.forEach((e) => {
      let shade = 0.1;
      e.addEventListener('mouseover', () => {
        e.style.backgroundColor = `rgb(0,0,0, ${shade})`;
        shade += 0.1;
      })
    })
}



// Clear everything
clear.addEventListener('click', clearGrid);

function clearGrid() {
  grid.innerHTML = '';

}



