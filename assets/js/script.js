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
    cardShuffle();
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
        
    }
})
}
