var game = require("./game.js");
var wordConstructor = require("./word.js");
var letterConstructor = require("./letter.js");
var inquirer = require("inquirer");
var randomWord = game.randomWord;
var letterGuessed;
exports.letter;

var myWord = new wordConstructor.wordConstructor(game.randomWord);
var maxGuesses = 15;
