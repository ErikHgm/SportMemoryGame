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
const cardArray = [
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

// creates an ordered array with numbers less than 16 
const number = [];
for (let i = 0; i < cardArray.length; i++) {
    number.push(i);
}

function cardShuffle() {
    // Sort the number array into a random order each time it is executed.
    // Credit: this code snippet comes from https://www.w3schools.com/js/js_array_sort.asp.
    for (let i = number.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = number[i];
        number[i] = number[j];
        number[j] = k;
    }
}

// creates the HTML structure and eventlistener for the memorycards in the gamescreen
function cardDeck() {
    cardShuffle();
    cardArray.forEach(card => {
        const html = `
        <div class="memory-card">
          <div class="memory-card-card-inner">
            <div class="memory-card-card-front">
              <i class="fa-solid fa-question"></i>    
            </div>
            <div class="memory-card-card-back">
              <i class="${card}"></i>
            </div>
          </div>
        </div>
      `;

        document.getElementById('game').innerHTML += html;
    })

}