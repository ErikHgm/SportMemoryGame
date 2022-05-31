// runs the eventlister thas is starting the showStartScreen once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  showStartScreen();
});
// shows the startscreen upon entering the game and runs the startbutton eventlistener
function showStartScreen() {
  document.getElementById('start-screen').style.display = "block";
  let startbutton = document.getElementById('start-button');
  startbutton.addEventListener('click', showGameScreen);
}
// collets the name from the player
var username = document.getElementById('name').value;

// switches to the game screen and runs the cardsContainer function
function showGameScreen() {

  setTimeout(() => {
    document.getElementById('start-screen').style.display = "none";
    document.getElementById('game-screen').style.display = "block";
  }, 400);

  cardDeck();  
  timer();

}
// timer function that runs the game clock
var seconds = 0;

function timer() {
  setInterval(function clock() {
    document.getElementById('timer').innerHTML = seconds++;
  }, 1000);
}
// array that stores the memorycards, 8 pairs of two items of the same kind
let cardArray = [
  'fa-solid fa-table-tennis-paddle-ball',
  'fa-solid fa-basketball',
  'fa-solid fa-hockey-puck',
  'fa-solid fa-futbol',
  'fa-solid fa-dumbbell',
  'fa-solid fa-baseball-bat-ball',
  'fa-solid fa-person-swimming',
  'fa-solid fa-person-skiing',
  'fa-solid fa-table-tennis-paddle-ball',
  'fa-solid fa-basketball',
  'fa-solid fa-hockey-puck',
  'fa-solid fa-futbol',
  'fa-solid fa-dumbbell',
  'fa-solid fa-baseball-bat-ball',
  'fa-solid fa-person-swimming',
  'fa-solid fa-person-skiing',
];

// creates the HTML structure for the memorycards in the gamescreen
function cardDeck() {
  cardArray = cardArray.sort(() => Math.random() - 0.5);
  cardArray.forEach(card => {
    const html = `
        <div class="memory-card">
          <div class="memory-card-inner">
            <div class="memory-card-front">
              <i class="fa-solid fa-question"></i>    
            </div>
            <div class="memory-card-back">
              <i class="${card}"></i>
            </div>
          </div>
        </div>
      `;

    document.getElementById('game').innerHTML += html;
  });
  // adds click events for each memorycard and rotates them 180 degrees
  // adds a class "turned" to the pair of cards that is being turned
  const cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => {
    card.onclick = () => {
      const cardInner = card.querySelector('.memory-card-inner');
      cardInner.style.transform = 'rotateY(-180deg)';
      card.classList.add('turned');
      turnedCard(card);
    };
  });
}

// variables and function for checking if a card is turned 
// pass the turned cards to the matchedCards function to check for a matching pair
let selectedCards = [];
let firstCard, secondCard = null;

function turnedCard(card) {
  if (card.classList.contains('turned') && selectedCards.length == 0) {
    firstCard = card;
    selectedCards.push(firstCard);

  } else if (card.classList.contains('turned')) {
    secondCard = card;
    selectedCards.push(secondCard);
    selectedCards = [];
    matchCards();
  }
}

// array that stores the pairs that have been matched 
let matchedCardsArray = [];

// function that checks if the pair of cards is matching 
function matchCards() {

  // compares the classname for matching of the two cards that the user clicked on
  if (firstCard.children[0].children[1].children[0].className === secondCard.children[0].children[1].children[0].className) {
    // if it is a match store in array
    matchedCardsArray.push(firstCard, secondCard);

    // removes eventlisteners from the matching cards so they can't be clicked again
    firstCard.onclick = null;
    secondCard.onclick = null;

  } else {
    //no match,remove "turned" classname so they can be turned again
    firstCard.classList.remove('turned');
    secondCard.classList.remove('turned');
    // variables and function for flipping the card back 
    let firtsCardStyle = firstCard.children[0];
    let secondCardStyle = secondCard.children[0];

    setTimeout(() => {
      firtsCardStyle.style.transform = 'rotateY(0deg)';
      secondCardStyle.style.transform = 'rotateY(0deg)';
    }, 800);
  }

  // if the matchedCardArray has 16 items, all cards have been matched and the game is finished
  if (matchedCardsArray.length === 16) {
    setTimeout(() => {
      showFinishScreen();
    }, 1700);
  }
  // clears the variables firstCard & secondCard so they can be reused by the turnedCard function
  firstCard = '';
  secondCard = '';

}

// shows the finish screen when all the cards have been matched
function showFinishScreen() {
  document.getElementById('game-screen').style.display = "none";
  document.getElementById('finish-screen').style.display = "block";
  document.getElementById('time').innerHTML = `${seconds}s!`;
  let startbutton = document.getElementById('start-new-button');
  startbutton.addEventListener('click', restartGame);
  let quitbutton = document.getElementById('quit-button');
  quitbutton.addEventListener('click', restartStartScreen);
}

// restarts the game and shows game screen again when user clicks on start new game in the finish screen
// resets the game screen html and matchedCardArray

function restartGame() {
  document.getElementById('game-screen').style.display = "block";
  document.getElementById('finish-screen').style.display = "none";
  document.getElementById("game").innerHTML = '';
  matchedCardsArray = [];
  cardDeck();

}
// swithes to the start screen when user clicks on quit game in the finish screen
// resets the game screen html and matchedCardArray
function restartStartScreen() {
  document.getElementById('start-screen').style.display = "block";
  document.getElementById('finish-screen').style.display = "none";
  let startbutton = document.getElementById('start-button');
  startbutton.addEventListener('click', showGameScreen);
  document.getElementById("game").innerHTML = '';
  matchedCardsArray = [];

}