/*
1. First load all the eventlistener on document load

2. Run the start screen window and hide the game and finish screen at the same time.

3. Collect user name

4. when user clicks on "start game":
    1. Hide the start screen and finish screen
    2. Display the game screen.
    3. Create and array of 4x4 cards
        1. The array needs to be random everytime it executes.
    4. Start the timer that count the time it takes.

5. When user clicks on a card:
    1. Show the card.
    2. Compare the card to the second card the user selected.
    3. If the same, cards should stay open.
    4. If no the same cards should close.

6. When all cards are open:
    1. Stop the timer.
    2. Hide the game and startscreen.
    3. Show the finish screen

7. On the finish screen:
    1. Show the time it took for the user to finish
    2. Show the highscore list
    3. Show the "start new game" and "Quit game" button

8. If user click "start new game":
    1.Show the game screen again.
    2. Run the timer again.

9. If user clicks "quit game":
    1. Show the start screen and hide the game and finish screen.
 */

document.addEventListener('DOMContentLoaded', function () {
    showStartScreen();
})
let name = document.getElementById('name').innerText;

function showStartScreen() {
    document.getElementById('start-screen').style.display = "block";
    let startbutton = document.getElementById('start-button');
    startbutton.addEventListener('click', showGameScreen);

}

function showGameScreen() {
    document.getElementById('start-screen').style.display = "none";
    document.getElementById('game-screen').style.display = "block";
    cardsArray();
}
//Array with 16 items inside, 8 pairs of two cards of the same kind
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