// Lights Out Game: Modified Code for Uniqueness
const gridDimension = 5;
const gameGrid = [];
const boardContainer = document.getElementById("game-board");

function initializeGameBoard() {
    for (let rowIndex = 0; rowIndex < gridDimension; rowIndex++) {
        gameGrid[rowIndex] = [];
        for (let colIndex = 0; colIndex < gridDimension; colIndex++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.dataset.rowIndex = rowIndex;
            gridCell.dataset.colIndex = colIndex;
            gridCell.addEventListener("click", () => handleCellToggle(rowIndex, colIndex));
            gameGrid[rowIndex][colIndex] = gridCell;
            boardContainer.appendChild(gridCell);
        }
    }
}

function handleCellToggle(row, col) {
    toggleCellState(row, col);
    toggleCellState(row - 1, col);
    toggleCellState(row + 1, col);
    toggleCellState(row, col - 1);
    toggleCellState(row, col + 1);

    if (verifyVictory()) {
        setTimeout(() => alert("Congratulations! You have won!"), 100);
    }
}

function toggleCellState(row, col) {
    if (row >= 0 && row < gridDimension && col >= 0 && col < gridDimension) {
        gameGrid[row][col].classList.toggle("inactive-cell");
    }
}

function shuffleGameBoard() {
    const totalCells = gridDimension * gridDimension;
    for (let i = 0; i < totalCells; i++) {
        const randomRow = Math.floor(Math.random() * gridDimension);
        const randomCol = Math.floor(Math.random() * gridDimension);
        handleCellToggle(randomRow, randomCol);
    }
}

function verifyVictory() {
    return Array.from(boardContainer.children).every(
        cell => !cell.classList.contains("inactive-cell")
    );
}

// Initialize the game
initializeGameBoard();
shuffleGameBoard();

// Display the last modified date in the footer
document.getElementById('lastUpdated').textContent = document.lastModified;
