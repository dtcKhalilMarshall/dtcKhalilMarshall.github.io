// ****** (^v^) hi!
// Game state variables
let rowA = ["-", "-", "-"];
let rowB = ["-", "-", "-"];
let rowC = ["-", "-", "-"];

let currentTurn = "x";
let remainingTurns = 9;
let gameOver = false;

let currentPlayer; // DOM element for displaying current player

// Function to check for winner or draw
function checkGameboard(rowA, rowB, rowC) {
  function checkLine(a, b, c) {
    if (a === b && b === c && a !== "-") {
      return a;
    }
    return false;
  }

  // Check columns
  for (let i = 0; i < 3; i++) {
    const winner = checkLine(rowA[i], rowB[i], rowC[i]);
    if (winner) return winner;
  }

  // Check rows
  if (checkLine(rowA[0], rowA[1], rowA[2])) return checkLine(rowA[0], rowA[1], rowA[2]);
  if (checkLine(rowB[0], rowB[1], rowB[2])) return checkLine(rowB[0], rowB[1], rowB[2]);
  if (checkLine(rowC[0], rowC[1], rowC[2])) return checkLine(rowC[0], rowC[1], rowC[2]);

  // Check diagonals
  if (checkLine(rowA[0], rowB[1], rowC[2])) return checkLine(rowA[0], rowB[1], rowC[2]);
  if (checkLine(rowC[0], rowB[1], rowA[2])) return checkLine(rowC[0], rowB[1], rowA[2]);

  // Check draw
  const allCells = [...rowA, ...rowB, ...rowC];
  if (!allCells.includes("-")) {
    return "d";
  }

  return false;
}

// Function to handle square clicks
function clickSquare() {
  if (this.innerHTML === "" && !gameOver) {
    this.innerHTML = currentTurn;
    this.classList.add("clicked");

    // Map element IDs to array positions
    const idMap = {
      a1: [rowA, 0],
      a2: [rowA, 1],
      a3: [rowA, 2],
      b1: [rowB, 0],
      b2: [rowB, 1],
      b3: [rowB, 2],
      c1: [rowC, 0],
      c2: [rowC, 1],
      c3: [rowC, 2],
    };
    const [rowRef, index] = idMap[this.id];
    rowRef[index] = currentTurn;

    remainingTurns--;

    // Check game status
    const gameOutputMsg = document.querySelector("#gameResult");
    let winState = checkGameboard(rowA, rowB, rowC);

    if (winState === "x" || winState === "o") {
      gameOutputMsg.innerHTML = (winState.toUpperCase() + " wins!");
      gameOver = true;
    } else if (winState === "d") {
      gameOutputMsg.innerHTML = "It's a draw!";
      gameOver = true;
    }

    if (gameOver) {
      document.querySelector("#gameResult").style.display = "flex";
    } else {
      // Switch turns
      currentTurn = currentTurn === "x" ? "o" : "x";
      currentPlayer.innerHTML = currentTurn;
    }
  }
}

// Function to reset the game
function resetGame() {
  rowA = ["-", "-", "-"];
  rowB = ["-", "-", "-"];
  rowC = ["-", "-", "-"];

  currentTurn = "x";
  remainingTurns = 9;
  gameOver = false;

  // Clear UI board
  document.querySelectorAll(".gameSpace").forEach(space => {
    space.innerHTML = "";
    space.classList.remove("clicked");
  });

  // Hide game result message
  const gameOutputMsg = document.querySelector("#gameResult");
  gameOutputMsg.innerHTML = "";
  gameOutputMsg.style.display = "none";

  // Reset current player display
  currentPlayer.innerHTML = currentTurn;
}

// Initialize game on DOM load
document.addEventListener("DOMContentLoaded", () => {
  // Set current player display
  currentPlayer = document.querySelector("#nextPlayer span");
  currentPlayer.innerHTML = currentTurn;

  // Add click event to each game space
  document.querySelectorAll(".gameSpace").forEach(space => {
    space.addEventListener("click", clickSquare);
  });

  // Add reset button event
  document.querySelector("#resetButton").addEventListener("click", resetGame);
});
