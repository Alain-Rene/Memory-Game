/*//import { levelConfigurations } from './level.js';
let flippedCards = [];

// Toggles the flipped state of the card
function flipCard(event){
  const clickedCard = event.target;
  clickedCard.classList.toggle('flipped');

  flippedCards.push(clickedCard);

  if (flippedCards.length === 2){
    if (flippedCards[0].dataset.card === flippedCards[1].dataset.card){
      flippedCards = [];
    } else{
      setTimeout(() => {
        flippedCards.forEach(card => card.classList.remove('flipped'));
        flippedCards = [];
      }, 1000);
    }
  }
}
//Selects card elements(*)
const cards = document.querySelectorAll('.card');

//Event listener will detect the click interactions
cards.forEach(card => {
  card.addEventListener('click', flipCard);
}); */

