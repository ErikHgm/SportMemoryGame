// runs the eventlister thas is starting the showStartScreen once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    showStartScreen();
})
// shows the startscreen upon entering the game and runs the startbutton eventlistener
function showStartScreen() {
    document.getElementById('start-screen').style.display = "block";
    let startbutton = document.getElementById('start-button');
    startbutton.addEventListener('click', showGameScreen);

}
// collets the name from the player
let name = document.getElementById('name').innerText;

// switches to the game screen and runs the cardsContainer function
function showGameScreen() {
    document.getElementById('start-screen').style.display = "none";
    document.getElementById('game-screen').style.display = "block";
    cardsContainers();
}

// creates the HTML structure for the cardHolders in the gamescreen
function cardsContainers() {
    for (let i = 0; i < 16; i++) {
        let cardHolder = document.createElement('div')
        cardHolder.className = 'cardHolder';
        cardHolder.innerText = '?'
        cardHolder.addEventListener('click', showCard);
        document.getElementById('game').appendChild(cardHolder);

    }
    for (let i = 0; i < 16; i++) {
        let i = document.createElement('div')
        i.className = 'i';
        document.getElementById('game').appendChild(i);
    }
    insertCardContent();

}

function insertCardContent() {
    // creates array with 16 items inside, 8 pairs of two items of the same kind
    let cardDeck = [
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
    for (let i = 0; i < 16; i++) {
        number.push(i);
    }
    // Sort the above number array into a random order each time it is executed.
    // Credit: this code snippet comes from https://www.w3schools.com/js/js_array_sort.asp.
    for (let i = number.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i)
        let k = number[i]
        number[i] = number[j]
        number[j] = k
    }
    // inserts an item into the game screen cardHolder
    for (let i = 0; i < 16; i++) {
        let card = document.getElementsByClassName('i');
        card[i].innerText = cardDeck[number[i]];
    }

    showCard();
}


function showCard() {
    console.log('clicked')
    console.log(this)
    console.log(this.classList)
    if (this.classList.contains('cardHolder')) {
        console.log("condition met")
        this.setAttribute('class','i');
        this.style.display = 'inline-block';
    }

}