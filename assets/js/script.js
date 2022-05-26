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

// creates the HTML structure for the cardsArray in the gamescreen
function cardsContainers() {
   

    for (let i = 0; i < 16; i++) {
        let cardHolder = document.createElement('div')
        cardHolder.className = 'cardHolder';
        document.getElementById('game').appendChild(cardHolder);
    }
}

// array with 16 items inside, 8 pairs of two cards of the same kind
function cardsArray() {

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


}