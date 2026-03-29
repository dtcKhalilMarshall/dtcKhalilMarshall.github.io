// Track number of turns
let playerClicks = 0;
let timeDelay = 2000; // in milliseconds

// Clear clicked classes and check for win
function clearClicks() {
  // get all the clicked elements
  let allClickedCards = document.querySelectorAll(".clicked");
  for (let eachCard of allClickedCards) {
    eachCard.classList.remove("clicked");
  }

  // increase player turn count by 1
  playerClicks++;
  document.querySelector("#turnCount span").innerHTML = playerClicks;

  // check for winning
  let allCards = document.querySelectorAll(".card");
  let matchedCards = document.querySelectorAll(".matched");
  if (allCards.length === matchedCards.length) {
    // player has matched all cards
    console.log("all cards matched, player has won");
    document.querySelector("#winning").innerHTML = "You won!";
    showWinScreen();
  }
}

// new function to flip card when clicked
function flipCard() {
  if (!this.classList.contains("matched")) {
    // get all the clicked cards
    let allClickedCards = document.querySelectorAll(".clicked");

    // only proceed if there are less than two clicked
    if (allClickedCards.length < 2 && !this.classList.contains("clicked")) {
      // add clicked class to clicked card
      this.classList.add("clicked");
    }

    // get a fresh list of the clicked cards
    allClickedCards = document.querySelectorAll(".clicked");

    // if it's a pair, compare them
    if (allClickedCards.length === 2) {
      // get the class list of each card as a string
      let card1 = allClickedCards[0].classList.toString();
      let card2 = allClickedCards[1].classList.toString();

      // if the class lists match -- it's a pair
      if (card1 === card2) {
        console.log("it's a match!");
        allClickedCards[0].classList.add("matched");
        allClickedCards[1].classList.add("matched");
        window.setTimeout(clearClicks, timeDelay);
      } else {
        console.log("not a match)");
        window.setTimeout(clearClicks, timeDelay);
      }
    }
  }
}

// When DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".card");
  const gameboard = document.querySelector("#gameBoard");

  // shuffle the cards
  let cardsArray = Array.from(allCards);
  for (let i = cardsArray.length - 1; i > 0; i--) {
    const randNum = Math.floor(Math.random() * (i + 1));
    [cardsArray[i], cardsArray[randNum]] = [cardsArray[randNum], cardsArray[i]];
  }
  // Append shuffled cards
  for (let card of cardsArray) {
    gameboard.appendChild(card);
  }

  // add click event listeners to all cards
  allCards.forEach(card => {
    card.addEventListener("click", flipCard);
  });
});

// Function to show win overlay
function showWinScreen() {
  document.getElementById("winScreen").style.display = "flex";
}

// Function to close win overlay
function closeWinScreen() {
  document.getElementById("winScreen").style.display = "none";
  // Reset game state
  document.querySelector("#winning").innerHTML = "";
  document.querySelector("#turnCount span").innerHTML = "0";
  playerClicks = 0;
  // Remove classes from cards
  document.querySelectorAll(".card").forEach(card => {
    card.classList.remove("clicked", "matched");
  });
  // Shuffle again
  const cards = Array.from(document.querySelectorAll(".card"));
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }
  // Append shuffled cards
  const gameboard = document.querySelector("#gameBoard");
  for (let card of cards) {
    gameboard.appendChild(card);
  }
}
