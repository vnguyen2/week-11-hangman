//Random word is selected and exported
var wordsToGuess = ["Alternator", "AC Compressor", "Intake", "Exhaust", "Camshaft", "Air Filter", "Belts", "brakes", "Windshield", "Seatbelts", "wipers"];
var randomIndex = Math.floor(Math.random() * wordsToGuess.length);
var randomWord = wordsToGuess[randomIndex];
exports.randomWord = randomWord;