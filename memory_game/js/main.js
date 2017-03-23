

// ROUND 5 - Final working version

// Create an array to link cards and IDs
var cards = [

	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}

];

// Create an empty array to store flipped cards
var cardsInPlay = [];

//Create a function to check that 2 cards have been drawn, and alert if they match or not
var checkForMatch = function () {

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
      	alert("You found a match!");
  		} else {
      	alert("Sorry, try again.");
 		}
 	}
}

// Create a function to flip a card and store it in cardsInPlay array
var flipCard = function () {

	var cardId = this.getAttribute('data-id');
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute('src', cards[cardId].cardImage);
	checkForMatch();

}

// Create a function to create a board and populate it with cards from the array.
var createBoard = function () {

	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);

		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement)[i];

	}

}

createBoard();

// // ROUND 4 - adding objects and click functions (doesn't work)

// // Create an array to link cards and IDs
// var cards = [

// 	{
// 		rank: 'queen',
// 		suit: 'hearts',
// 		cardImage: 'images/queen-of-hearts.png'
// 	},
// 	{
// 		rank: 'queen',
// 		suit: 'diamonds',
// 		cardImage: 'images/queen-of-diamonds.png'
// 	},
// 	{
// 		rank: 'king',
// 		suit: 'hearts',
// 		cardImage: 'images/king-of-hearts.png'
// 	},
// 	{
// 		rank: 'king',
// 		suit: 'diamonds',
// 		cardImage: 'images/king-of-diamonds.png'
// 	}

// ];

// // Create an empty array to store flipped cards
// var cardsInPlay = [];

// //Create a function to check that 2 cards have been drawn, and alert if they match or not
// var checkForMatch = function () {

// 	this.setAttribute('src', cards[cardId].cardImage);

// 	if (cardsInPlay.length = 2);
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//       alert("You found a match!");
//   	} else {
//       alert("Sorry, try again.");
//  	}
// }

// // Create a function to flip a card and store it in cardsInPlay array
// var flipCard = function () {

// 	var cardId = this.getAttribute('data-id');

// 	console.log('User flipped ' + cards[cardId].rank);
// 	cardsInPlay.push(cards[cardId].rank);
// 	console.log(cards[cardId].cardImage);
// 	console.log(cards[cardId].suit);
// 	checkForMatch();

// }

// var createBoard = function () {

// 	for (var i = 0; i < cards.length; i++) {
// 		var cardElement = document.createElement('img');
// 		cardElement.setAttribute('src', 'images/back.png');
// 		cardElement.setAttribute('data-id', i);

// 		cardElement[0].addEventListener('click', flipCard);
// 		document.getElementById(game-board).appendChild('cardElement');
// 	}
// }

// createBoard();


// // ROUND 3 - Adding objects.

// // Create an array to link cards and IDs
// var cards = [

// 	{
// 		rank: 'queen',
// 		suit: 'hearts',
// 		cardImage: 'images/queen-of-hearts.png'
// 	},
// 	{
// 		rank: 'queen',
// 		suit: 'diamonds',
// 		cardImage: 'images/queen-of-diamonds.png'
// 	},
// 	{
// 		rank: 'king',
// 		suit: 'hearts',
// 		cardImage: 'images/king-of-hearts.png'
// 	},
// 	{
// 		rank: 'king',
// 		suit: 'diamonds',
// 		cardImage: 'images/king-of-diamonds.png'
// 	}

// ];

// // Create an empty array to store flipped cards
// var cardsInPlay = [];

// //Create a function to check that 2 cards have been drawn, and alert if they match or not
// var checkForMatch = function () {

// 	if (cardsInPlay.length = 2)
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
//       alert("You found a match!");
//   	} else {
//       alert("Sorry, try again.");
//  	}
// }

// // Create a function to flip a card and store it in cardsInPlay array
// var flipCard = function (cardId) {

// 	console.log('User flipped ' + cards[cardId].rank);
// 	cardsInPlay.push(cards[cardId].rank);
// 	console.log(cards[cardId].cardImage);
// 	console.log(cards[cardId].suit);
// 	checkForMatch();

// }

// flipCard(0);
// flipCard(2);




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