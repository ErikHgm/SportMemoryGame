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
let username = document.getElementById('name').innerText;

// switches to the game screen and runs the cardsContainer function
function showGameScreen() {
  document.getElementById('start-screen').style.display = "none";
  document.getElementById('game-screen').style.display = "block";
  cardDeck();
}

// creates array with 16 items inside, 8 pairs of two items of the same kind
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
  })



  const cards = document.querySelectorAll('.memory-card');
  cards.forEach(card => {
    card.onclick = () => {
      const cardInner = card.querySelector('.memory-card-inner');
      cardInner.style.transform = 'rotateY(-180deg)';
      card.classList.add('turned')
      turnedCard(card)
    }
  })
}


const card = document.querySelectorAll('.memory-card');
let selectedCards = []
let firstCard, secondCard = null;

function turnedCard(card) {
  console.log(card.children[0].children[1].children[0].className)
  const cardInner = card.querySelector('.memory-card-inner');
  if (card.classList.contains('turned') && selectedCards.length == 0) {
    firstCard = card;
    selectedCards.push(firstCard)
    console.log(card)
    console.log(selectedCards)
  } else if (card.classList.contains('turned')) {
    secondCard = card;
    selectedCards.push(secondCard);
    selectedCards = []
    matchedCards();
  } else {
    setTimeout(() => {
      cardInner.style.transform = 'rotateY(0deg)';

    }, 1500);
    console.log('not-matching')


  }
}

let matchedCardArray = [];

function matchedCards() {
  /* console.log('matched-cards')
  console.log(firstCard);
  console.log(secondCard); */

  if (firstCard.children[0].children[1].children[0].className === secondCard.children[0].children[1].children[0].className) {
    // it is a match
    matchedCardArray.push(firstCard, secondCard);
    console.log('matching')


    console.log(firstCard);
    console.log(secondCard);

    firstCard.removeEventListener('click', cardDeck)
    secondCard.removeEventListener('click', cardDeck)



    firstCard = '';
    secondCard = '';

  } else {
    //no match
    firstCard.classList.remove('turned');
    secondCard.classList.remove('turned');


    console.log('no-match');
  }

  if (matchedCardArray.length === 16) {
    
  
    showFinishScreen();

  }
}
function showFinishScreen() {

  document.getElementById('game-screen').style.display = "none";
  document.getElementById('finish-screen').style.display = "block";
  let startbutton = document.getElementById('start-new-button');
  startbutton.addEventListener('click', restartGame);
  let quitbutton = document.getElementById('quit-button');
  quitbutton.addEventListener('click', restartStartScreen);
}

function restartGame(){
  document.getElementById('game-screen').style.display = "block";
  document.getElementById('finish-screen').style.display = "none";
  let oldGameScreen = document.getElementById("game");
  oldGameScreen.innerHTML = "";
  matchedCardArray = [];
  cardDeck();
}

function restartStartScreen(){
  document.getElementById('start-screen').style.display = "block";
  document.getElementById('finish-screen').style.display = "none";
  let startbutton = document.getElementById('start-button');
  startbutton.addEventListener('click', showGameScreen);
  let oldGameScreen = document.getElementById("game");
  oldGameScreen.innerHTML = "";
  matchedCardArray = [];
}
