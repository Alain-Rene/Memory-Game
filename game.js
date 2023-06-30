import { levelConfigurations } from './level.js';

console.log(levelConfigurations);

console.log("Code execution reached this point.");
let clickedCards = [];

// Flips the clicked card
function flipCard(event) {
    // Event is the click function and target is the card, so this gets the clicked card and stores it in a variable.
    const clickedCard = event.target;

    // Edge case where user clicks card twice, 
    if(isAlreadyFlipped(clickedCard)) {
      return;
    }

    showCardFront(clickedCard);
    hideCardBack(clickedCard);
    toggleFlippedClass(clickedCard);
    handleFlippedCards(clickedCard)
}

// Checks if the card is already flipped
function isAlreadyFlipped(card) {
  return card.classList.contains('flipped');
}

// Shows the front of the card
function showCardFront(card) {
    card.querySelector('.card-front').style.display = 'block';
}  

// Hides the back of the card
function hideCardBack(card) {
    card.querySelector('.card-back').style.display = 'none';
}

// Toggles the 'flipped' class
function toggleFlippedClass(card) {
    card.classList.toggle('flipped');
}

// Handles the flipped cards after a delay
function handleFlippedCards(clickedCard) {
    const flippedCards = getFlippedCards();

    if (flippedCards.length === 2) {
        setTimeout(resetFlippedCards, 500);
    }
}

// Returns an array of currently flipped cards
function getFlippedCards() {
    return Array.from(document.querySelectorAll('.flipped'));
}

// Resets the flipped cards to their original state
function resetFlippedCards() {
    const flippedCards = getFlippedCards();

    flippedCards.forEach(card => {
        card.classList.remove('flipped');
        card.querySelector('.card-back').style.display = 'block';
        card.querySelector('.card-front').style.display = 'none';
    });
}

// Add event listeners to the cards
const cards = document.querySelectorAll('.card');
// Event Listener will detectt the click interactions
cards.forEach(card => {
    card.addEventListener('click', flipCard);
});