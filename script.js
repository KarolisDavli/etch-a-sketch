const grid = document.querySelector('.grid');
const button = document.querySelector('input');

let htmlStyles =
window.getComputedStyle(document.querySelector("html"));
let rowNum =
parseInt(htmlStyles.getPropertyValue("--rowNum"));

function createGrid() {
  for (i = 1; i <= 16*16; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    grid.appendChild(div);
  }
}

button.addEventListener('change', createGrid);






// Dynamic CSS values, pulling them with JS
// HTML input tag