const grid = document.querySelector('.grid');

function createGrid() {
  for (i = 0; i <= 15; i++) {
    const div = document.createElement('div');
    div.classList.add('item');
    grid.appendChild(div);
  }
}