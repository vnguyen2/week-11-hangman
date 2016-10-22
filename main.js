var game = require("./game.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var myWord = new wordConstructor.wordConstructor(randomWord);
var maxGuesses = 15;

//have user guess a letter
function playGame(){
	console.log(myWord.toString());
	if (myWord.guessesMade.length >= maxGuesses){
		console.log('You have no more guesses.');
	return; //Game over
	}
	inquirer.prompt([{
		name: 'letter',
		type: 'text',
		message: 'Enter a letter:',
		validate: function(str){
			var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
			return regEx.test(str);
				}
		}]).then(function(letterInput){ //Game control
				var letter = letterInput.letter; 
				myWord.findLetter(letter); //Check
					if(myWord.isComplete()){ 
					console.log('Yes! It was ' + myWord.toString() + '!');
					return; //Winner
					}
                //continues to ask user for a guess until word is complete
				console.log('-------------------\n'); 
				console.log('You have ' + (maxGuesses - myWord.guessesMade.length) + ' guesses left.')
				playGame();
				});
}
//starts the game
playGame();