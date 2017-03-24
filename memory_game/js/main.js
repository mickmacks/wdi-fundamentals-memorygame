// ROUND 6 - Final working version with personal ~flairs~

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

// Create a score variable and use it's value to replace the content of the span
var score = 0;
var addScore = function () {
	score += 10;
	document.getElementById('points').innerHTML = score;
	console.log(score);
}

// Create a function to restart the game once a pair is selected.
var resetCards = function () {

	// Remove cardsInPlay array values, then wipe the game-board and replace it with a new version.
	for (var i = 0; i <= cardsInPlay.length; i++) {
		cardsInPlay.pop(i);
	}
	var cardGame = document.getElementById('game-board');
	cardGame.innerHTML = "";
	createBoard();
}

// Use button element to run resetCards function on click
var button = document.querySelector('button')
button.addEventListener('click', resetCards)

//Create a function to check that 2 cards have been drawn, and alert if they match or not
var checkForMatch = function () {

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
      		alert("You found a match!");
      		addScore();
  		} else {
      		alert("Sorry, try again.");
 		}
 	}
}

// Create a function to flip a card and store it in cardsInPlay array
var flipCard = function () {

	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
	console.log('User flipped ' + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
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