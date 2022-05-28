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
    cardsContainers();
}

// creates the HTML structure for the cardHolders in the gamescreen
function cardsContainers() {

    for (let i = 0; i < 16; i++) {
        let cardHolder = document.createElement('div');
        cardHolder.className = 'memory-card';
        cardHolder.innerHTML = '<i class="fa-solid fa-question"></i>';
        document.getElementById('game').appendChild(cardHolder);
        cardHolder.addEventListener('click', showCard);
    }
    cardDeck();

}

function cardDeck() {
    // creates array with 16 items inside, 8 pairs of two items of the same kind
    let cardArray = [
        '<i class="fa-solid fa-table-tennis-paddle-ball"></i>',
        '<i class="fa-solid fa-basketball"></i>',
        '<i class="fa-solid fa-hockey-puck"></i>',
        '<i class="fa-solid fa-futbol"></i>',
        '<i class="fa-solid fa-dumbbell"></i>',
        '<i class="fa-solid fa-baseball-bat-ball"></i>',
        '<i class="fa-solid fa-person-swimming"></i>',
        '<i class="fa-solid fa-person-skiing"></i>',
        '<i class="fa-solid fa-table-tennis-paddle-ball"></i>',
        '<i class="fa-solid fa-basketball"></i>',
        '<i class="fa-solid fa-hockey-puck"></i>',
        '<i class="fa-solid fa-futbol"></i>',
        '<i class="fa-solid fa-dumbbell"></i>',
        '<i class="fa-solid fa-baseball-bat-ball"></i>',
        '<i class="fa-solid fa-person-swimming"></i>',
        '<i class="fa-solid fa-person-skiing"></i>',
    ];

    // creates an ordered array with numbers less than 16
    let number = [];
    for (let i = 0; i < cardArray.length; i++) {
        number.push(i);
    }
    // Sort the above number array into a random order each time it is executed.
    // Credit: this code snippet comes from https://www.w3schools.com/js/js_array_sort.asp.
    for (let i = number.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = number[i];
        number[i] = number[j];
        number[j] = k;
    }
    // inserts an item into the game screen cardHolder
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.getElementsByClassName('icon');
        card[i].innerHTML = cardArray[number[i]];
    }

}

function showCard() {
    this.style.animation = 'flipEffect';

}