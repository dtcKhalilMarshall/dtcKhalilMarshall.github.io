// ****** (^v^) hi! I'm Khalil and Welcome to my JavaScript!
// Initialize game state arrays
let rowA = ["-", "-", "-"];
let rowB = ["-", "-", "-"];
let rowC = ["-", "-", "-"];

let currentPlayerSymbol = "X"; // X starts
let gameOver = false;

const currentPlayerSpan = document.querySelector("#nextPlayer span");
const resultDiv = document.querySelector("#gameResult");

// Function to check if a line has a winner
function checkLine(a, b, c) {
  if (a === b && b === c && a !== "-") {
    return a;
  }
  return false;
}

// Check the gameboard for a winner or draw
function checkGameboard(rowA, rowB, rowC) {
  const lines = [
    // Rows
    [rowA[0], rowA[1], rowA[2]],
    [rowB[0], rowB[1], rowB[2]],
    [rowC[0], rowC[1], rowC[2]],
    // Columns
    [rowA[0], rowB[0], rowC[0]],
    [rowA[1], rowB[1], rowC[1]],
    [rowA[2], rowB[2], rowC[2]],
    // Diagonals
    [rowA[0], rowB[1], rowC[2]],
    [rowA[2], rowB[1], rowC[0]],
  ];

  for (const line of lines) {
    const winner = checkLine(...line);
    if (winner) return winner;
  }

  // Check for draw
  const allCells = [...rowA, ...rowB, ...rowC];
  if (!allCells.includes("-")) return "d";

  return false;
}

// Handle cell click event
function handleCellClick() {
  if (this.innerHTML === "" && !gameOver) {
    this.innerHTML = currentPlayerSymbol;
    this.classList.add("clicked");

    // Map cell id to the corresponding array and index
    const idMap = {
      a1: [rowA, 0], a2: [rowA, 1], a3: [rowA, 2],
      b1: [rowB, 0], b2: [rowB, 1], b3: [rowB, 2],
      c1: [rowC, 0], c2: [rowC, 1], c3: [rowC, 2],
    };

    const [rowRef, index] = idMap[this.id];
    rowRef[index] = currentPlayerSymbol;

    const winner = checkGameboard(rowA, rowB, rowC);

    if (winner === "X" || winner === "O") {
      resultDiv.innerHTML = `<div style="font-size: 4rem;">Player ${winner} WINS!</div>`;
      resultDiv.style.display = "flex";
      gameOver = true;
      // Optional: add click to overlay to restart
      // resultDiv.addEventListener("click", resetGame);
    } else if (winner === "d") {
      resultDiv.innerHTML = `<div style="font-size: 4rem;">It's a Draw!</div>`;
      resultDiv.style.display = "flex";
      gameOver = true;
    } else {
      // Switch players
      currentPlayerSymbol = currentPlayerSymbol === "X" ? "O" : "X";
      currentPlayerSpan.innerHTML = currentPlayerSymbol;
    }
  }
}

// Reset the game to initial state
function resetGame() {
  rowA = ["-", "-", "-"];
  rowB = ["-", "-", "-"];
  rowC = ["-", "-", "-"];
  currentPlayerSymbol = "X";
  gameOver = false;

  // Clear UI cells
  document.querySelectorAll(".gameSpace").forEach(cell => {
    cell.innerHTML = "";
    cell.classList.remove("clicked");
  });

  // Hide result overlay
  resultDiv.style.display = "none";

  // Reset turn display
  currentPlayerSpan.innerHTML = currentPlayerSymbol;
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  // Add click listeners to game cells
  document.querySelectorAll(".gameSpace").forEach(space => {
    space.addEventListener("click", handleCellClick);
  });

  // Add click listener to reset button
  document.querySelector("#resetButton").addEventListener("click", resetGame);

  // Add click on overlay to reset game
  resultDiv.addEventListener("click", () => {
    resetGame();
  });

  // Set initial turn display
  currentPlayerSpan.innerHTML = currentPlayerSymbol;
});
