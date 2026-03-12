// Initialize game state arrays
let rowA = ["-", "-", "-"];
let rowB = ["-", "-", "-"];
let rowC = ["-", "-", "-"];

let currentPlayerSymbol = "X"; // X starts
let gameOver = false;

const currentPlayerSpan = document.querySelector("#nextPlayer span");
currentPlayerSpan.innerHTML = currentPlayerSymbol;

function checkGameboard(rowA, rowB, rowC) {
  // Your existing implementation here
  function checkLine(a, b, c) {
    if (a === b && b === c && a !== "-") {
      return a;
    }
    return false;
  }
  // Check columns
  for (let i=0; i<3; i++) {
    const colWin = checkLine(rowA[i], rowB[i], rowC[i]);
    if (colWin) return colWin;
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
  if (!allCells.includes("-")) return "d";
  return false;
}

function handleCellClick() {
  if (this.innerHTML === "" && !gameOver) {
    this.innerHTML = currentPlayerSymbol;
    this.classList.add("clicked");
    const idMap = {
      a1: [rowA, 0], a2: [rowA, 1], a3: [rowA, 2],
      b1: [rowB, 0], b2: [rowB, 1], b3: [rowB, 2],
      c1: [rowC, 0], c2: [rowC, 1], c3: [rowC, 2],
    };
    const [rowRef, index] = idMap[this.id];
    rowRef[index] = currentPlayerSymbol;
    const resultDiv = document.querySelector("#gameResult");
    const winner = checkGameboard(rowA, rowB, rowC);
    if (winner === "X" || winner === "O") {
      resultDiv.innerHTML = `<div style="font-size: 4rem;">Player ${winner} WINS!</div>`;
      resultDiv.style.display = "flex";
      gameOver = true;
    } else if (winner === "d") {
      resultDiv.innerHTML = `<div style="font-size: 4rem;">It's a Draw!</div>`;
      resultDiv.style.display = "flex";
      gameOver = true;
    } else {
      currentPlayerSymbol = currentPlayerSymbol === "X" ? "O" : "X";
      currentPlayerSpan.innerHTML = currentPlayerSymbol;
    }
  }
}

function resetGame() {
  rowA = ["-", "-", "-"];
  rowB = ["-", "-", "-"];
  rowC = ["-", "-", "-"];
  currentPlayerSymbol = "X";
  gameOver = false;
  document.querySelectorAll(".gameSpace").forEach(cell => {
    cell.innerHTML = "";
    cell.classList.remove("clicked");
  });
  document.querySelector("#gameResult").style.display = "none";
  currentPlayerSpan.innerHTML = currentPlayerSymbol;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".gameSpace").forEach(space => {
    space.addEventListener("click", handleCellClick);
  });
  document.querySelector("#resetButton").addEventListener("click", resetGame);
  // Set initial turn display
  currentPlayerSpan.innerHTML = currentPlayerSymbol;
});
