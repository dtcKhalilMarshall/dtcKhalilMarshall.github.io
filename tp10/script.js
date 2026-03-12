// ****** (^v^) hi!
let rowA = [ "-", "-", "-" ];
let rowB = [ "-", "-", "-" ];
let rowC = [ "-", "-", "-" ];

// track whos turn it is
let currentTurn = "x";

// set up blank variable for current player DOM element
let currentPlayer;


function checkGameboard(rowA, rowB, rowC) {
  function checkLine(a, b, c) {
    console.log(`Checking line: ${a}, ${b}, ${c}`);
    if (a === b && b === c && a !== "-") {
      console.log(`Found winner in line: ${a}`);
      return a;
    }
    return false;
  }

  for (let i = 0; i < 3; i++) {
    const winner = checkLine(rowA[i], rowB[i], rowC[i]);
    if (winner) {
      console.log(`Winner found in column ${i}: ${winner}`);
      return winner;
    }
  }

  if (checkLine(rowA[0], rowA[1], rowA[2])) {
    console.log("Winner in row A");
    return checkLine(rowA[0], rowA[1], rowA[2]);
  }
  if (checkLine(rowB[0], rowB[1], rowB[2])) {
    console.log("Winner in row B");
    return checkLine(rowB[0], rowB[1], rowB[2]);
  }
  if (checkLine(rowC[0], rowC[1], rowC[2])) {
    console.log("Winner in row C");
    return checkLine(rowC[0], rowC[1], rowC[2]);
  }

  if (checkLine(rowA[0], rowB[1], rowC[2])) {
    console.log("Winner in diagonal A0-B1-C2");
    return checkLine(rowA[0], rowB[1], rowC[2]);
  }
  if (checkLine(rowC[0], rowB[1], rowA[2])) {
    console.log("Winner in diagonal C0-B1-A2");
    return checkLine(rowC[0], rowB[1], rowA[2]);
  }

  const allCells = [...rowA, ...rowB, ...rowC];
  console.log(`All cells: ${allCells.join(", ")}`);
  if (!allCells.includes("-")) {
    console.log("DRAW!!!");
    return "d";
  }

  console.log("Draw detected");
}

//function to handle clicks
function clickSquare() {

 // only proceed if space is empty
 if (this.innerHTML ==""){

  //set space
  this.innerHTML = currentTurn;

  //flip turn back and forth
  if (currentTurn === "x") currentTurn = "o";
  else currentTurn = "x";

// update next player DOM element
currentPlayer.innerHTML = currentTurn;

 }
  
}

// wait for document to load before adding clickable event
document.addEventListener("DOMContentLoaded", function() {

   // find all the clickable spaces
   let allSpaces = document.querySelectorAll(".gameSpace");

 for (let eachSpace of allSpaces) {
  eachSpace.addEventListener("click", clickSquare); 
  }

  //update current player DOM element with first player
  currentPlayer = document.querySelector("#currentPlayer span");
currentPlayer.innerHTML = currentTurn;
});

/* COMMENT OUT EVERYTHING BELOW THIS

// get a handle on the DOM element to be updated with the outcome
let gameOutputMsg = document.querySelector("#gameResult span");


// call your function checkGameboard() with the 3 rows
let winState = checkGameboard(rowA, rowB, rowC);

// test the returned value of the function
if (winState == "x") { 
  gameOutputMsg.innerHTML = "X wins";
  
} else if (winState == "o") {
  gameOutputMsg.innerHTML = "O wins";
  
} else if (winState == "d") {
  gameOutputMsg.innerHTML = "draw";
  
} else {
  gameOutputMsg.innerHTML = "unknown";
}

*/
