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

function cardShuffle() {
    // Sort the number array into a random order each time it is executed.
    // Credit: this code snippet comes from https://www.w3schools.com/js/js_array_sort.asp.
    for (let i = cardArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i);
        let k = number[i];
        number[i] = number[j];
        number[j] = k;
    }
}

// creates the HTML structure and images for the memorycards in the gamescreen
function cardDeck() {
    cardShuffle();
    for (let i = 0; i < 16; i++) {
        // creates each element 
        let cardDiv = document.createElement('div');
        let cardImgOne = document.createElement('img');
        let cardImgTwo = document.createElement('img');
        // append elements as child of parent elements
        document.getElementById('game').appendChild(cardDiv);
        cardDiv.appendChild(cardImgOne);
        cardDiv.appendChild(cardImgTwo);
        //creates classnames and IDs for all elements
        cardDiv.className = 'memory-card';
        cardImgOne.id = 'card-front';
        cardImgTwo.id = 'card-back';
        // add img to each img element
        cardImgOne.innerHTML = '<i class="fa-solid fa-question"></i>';
        cardImgTwo.innerHTML = cardArray[number[i]];
        //add eventlistener to the memory-card div
        cardDiv.addEventListener('click', flipCard);
    }
}

function flipCard() {
    this.style.animation = 'flipEffect';

}