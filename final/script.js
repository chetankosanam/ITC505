const boardSize = 5;
const board = [];
const gameBoardElement = document.getElementById("game-board");

function createBoard() {
    for (let i = 0; i < boardSize; i++) {
        board[i] = [];
        for (let j = 0; j < boardSize; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.row = i;
            cell.dataset.col = j;
            cell.addEventListener("click", () => toggleCell(i, j));
            board[i][j] = cell;
            gameBoardElement.appendChild(cell);
        }
    }
}

function toggleCell(row, col) {
    toggle(row, col);
    toggle(row - 1, col);
    toggle(row + 1, col);
    toggle(row, col - 1);
    toggle(row, col + 1);

    if (checkWin()) {
        setTimeout(() => alert("You win!"), 100);
    }
}

function toggle(row, col) {
    if (row >= 0 && row < boardSize && col >= 0 && col < boardSize) {
        board[row][col].classList.toggle("is-off");
    }
}

function randomizeBoard() {
    for (let i = 0; i < boardSize * boardSize; i++) {
        const row = Math.floor(Math.random() * boardSize);
        const col = Math.floor(Math.random() * boardSize);
        toggleCell(row, col);
    }
}

function checkWin() {
    return Array.from(gameBoardElement.children).every(
        cell => !cell.classList.contains("is-off")
    );
}

createBoard();
randomizeBoard();

// Footer script for last modified date
document.getElementById('lastModified').textContent = document.lastModified;
