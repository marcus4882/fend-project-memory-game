/*
 * Create a list that holds all of your cards
 */
 // cards array holds all cards
let card = document.getElementsByClassName("card");
let cards = [...card]

// deck of all cards
const deck = document.getElementById("card-deck");

// declaring variable of the moves
let moves = 0;
let counter = document.querySelector(".moves");

// declare star  icons variables
const stars = document.querySelectorAll(".fa-star");

// declaring matchedcards variable
let matchedCard = document.getElementsByClassName("match");

 // stars listings
 let starsList = document.querySelectorAll(".stars li");

 // close icon
 let closeicon = document.querySelector(".close");

 let modal = document.getElementById("popup1")

 // array for cards opened
var openedCards = [];

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
//shuffles cards when page is refreshed / loads
document.body.onload = startGame();

//function to start a new play
function startGame(){
// shuffle deck
    cards = shuffle(cards);
// remove all exisiting classes from each card
    for (var i = 0; i < cards.length; i++){
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disabled");
    }
// reset moves
    moves = 0;
    counter.innerHTML = moves;
    // reset rating
    for (var i= 0; i < stars.length; i++){
        stars[i].style.color = "#FFD700";
        stars[i].style.visibility = "visible";
    }
//reset timer
        second = 0;
        minute = 0;
        hour = 0;
        var timer = document.querySelector(".timer");
        timer.innerHTML = "0 mins 0 secs";
        clearInterval(interval);
    }
//  toggles open and show class to display cards
    var displayCard = function (){
        this.classList.toggle("open");
        this.classList.toggle("show");
        this.classList.toggle("disabled");
    };
    / @description add opened cards to OpenedCards list and check if cards are match or not
    function cardOpen() {
        openedCards.push(this);
        var len = openedCards.length;
        if(len === 2){
            moveCounter();
            if(openedCards[0].type === openedCards[1].type){
                matched();
            } else {
                unmatched();
            }
        }
    };
    / @description when cards match
    function matched(){
        openedCards[0].classList.add("match", "disabled");
        openedCards[1].classList.add("match", "disabled");
        openedCards[0].classList.remove("show", "open", "no-event");
        openedCards[1].classList.remove("show", "open", "no-event");
        openedCards = [];
    }

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
