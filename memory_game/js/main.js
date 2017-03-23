// ROUND 3 - simplified functions.

// Create an array to link cards and IDs
var cards = ['queen', 'queen', 'king', 'king'];

// Create an empty array to store flipped cards
var cardsInPlay = [];

//Create a function to check that 2 cards have been drawn, and alert if they match or not
var checkForMatch = function () {

	if (cardsInPlay[0] === cardsInPlay[1]) {
      console.log("You found a match!");
  	} else {
      console.log("Sorry, try again.");
 	}
}

// Create a function to flip a card and store it in cardsInPlay array
var flipCard = function (cardId) {

	console.log('User flipped ' + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
	checkForMatch();

}

flipCard(0);
flipCard(2);




// // Round 2 - intergrating functions.

// var cards = ['queen', 'queen', 'king', 'king'];

// var cardsInPlay = [];

// var checkForMatch = function () {
	
// 	if (cardsInPlay.length = 2) 
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert('You found a match!');
// 		} else {
// 		alert('Sorry, try again.');
// 	}
// }

// var flipCard = function (cardId) {

// 	console.log("User flipped " + cards[cardId]);
// 	cardsInPlay.push(cards[cardId]); 
// 	checkForMatch();
	
// }

// flipCard(0);
// flipCard(2);

// // Round 1, no use of functions

// console.log("Up and running!");

// var cards = ['queen', 'queen', 'king', 'king'];

// var cardsInPlay = [];

// var cardOne = cards[0];

// cardsInPlay.push(cardOne);

// console.log("User flipped queen");

// var cardTwo = cards[2];

// cardsInPlay.push(cardTwo);

// console.log("User flipped king");

// if (cardsInPlay.length = 2) {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert('You found a match!')
// 	}
// 	else {
// 		alert('Sorry, try again.');
// 	}
// }