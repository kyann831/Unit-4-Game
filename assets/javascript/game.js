var userGuess = [0,0,0,0];
var targetNumber = 50;

$(document).ready(function() {
    function generaterandomNumber(a) {
        Math.floor(Math.random()* a);
    }
    targetNumber = generaterandomNumber(51);
    for (i = 0; i < 4; i++) {
        userGuess[i] = generaterandomNumber(11);
    }

});
var imageGem = $("<img>");
imageGem.addClass("");
imageCrystal.attr("src", )

