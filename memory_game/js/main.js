const cards = ["queen", "king", "queen", "king"];

let cardsInPlay = [];

let cardOne = cards[0];

let cardTwo = cards[1];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    alert("You found a match!");
  } else {
    alert("Sorry,try again.");
  }
}

console.log("User flipped Queen");
console.log("User flipped King");
