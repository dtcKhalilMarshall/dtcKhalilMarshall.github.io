<script>
  document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.card'));
    const gameBoard = document.getElementById('gameBoard');
    const totalPairs = 8; // total pairs in your game
    let flippedCards = [];
    let lockBoard = false;
    let matchesFound = 0;
    let turns = 0;

    // Create and insert a display for the number of pairs compared
    const turnsDisplay = document.createElement('div');
    turnsDisplay.style.margin = '1rem';
    turnsDisplay.style.fontSize = '1.2rem';
    turnsDisplay.innerText = `Pairs compared: 0`;
    document.body.insertBefore(turnsDisplay, gameBoard);

    // Create a "You win!" panel
    const winPanel = document.createElement('div');
    winPanel.style.display = 'none';
    winPanel.style.position = 'fixed';
    winPanel.style.top = '50%';
    winPanel.style.left = '50%';
    winPanel.style.transform = 'translate(-50%, -50%)';
    winPanel.style.backgroundColor = 'white';
    winPanel.style.padding = '2rem';
    winPanel.style.border = '2px solid black';
    winPanel.style.fontSize = '2rem';
    winPanel.innerText = 'You win!';
    document.body.appendChild(winPanel);

    // Function to shuffle the cards
    function shuffleCards() {
      for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        gameBoard.appendChild(cards[j]);
        [cards[i], cards[j]] = [cards[j], cards[i]];
      }
    }

    // Shuffle cards on page load
    shuffleCards();

    // Function to flip a card
    function flipCard(card) {
      if (
        lockBoard ||
        flippedCards.includes(card) ||
        card.classList.contains('matched')
      ) {
        return;
      }
      // Flip the card
      card.querySelector('.cardContent').style.transform = 'rotateY(180deg)';
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        turns++;
        turnsDisplay.innerText = `Pairs compared: ${turns}`;
        checkForMatch();
      }
    }

    // Function to check if flipped cards match
    function checkForMatch() {
      const [card1, card2] = flippedCards;
      const pair1 = card1.classList[1]; // class like 'pair1'
      const pair2 = card2.classList[1];

      if (pair1 === pair2) {
        // They match
        setTimeout(() => {
          card1.classList.add('matched');
          card2.classList.add('matched');
          // Hide matched cards
          card1.style.visibility = 'hidden';
          card2.style.visibility = 'hidden';
          flippedCards = [];
          matchesFound++;
          if (matchesFound === totalPairs) {
            // Show win message
            winPanel.style.display = 'block';
          }
        }, 500);
      } else {
        // Not a match
        lockBoard = true;
        setTimeout(() => {
          // Flip back
          card1.querySelector('.cardContent').style.transform = '';
          card2.querySelector('.cardContent').style.transform = '';
          flippedCards = [];
          lockBoard = false;
        }, 1000);
      }
    }

    // Attach event listeners to all cards
    cards.forEach(card => {
      card.addEventListener('click', () => flipCard(card));
    });
  });
</script>
