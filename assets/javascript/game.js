$(document).ready(function() {
    //Globals
    var userGuess = [0,0,0,0];
    var targetNumber = 50;
    var wins = 0;
    var losses = 0;
    var counter = 0;
    //wins and losses
    
    //function that generates random number b/t 1 and a max
    function generaterandomNumber(a) {
        return Math.ceil(Math.random() * a);
    }
    // targetNumber is autogenerated and printed 
    targetNumber = generaterandomNumber(50);
    $("#target-number").html(targetNumber);

    //loop for userguesses, generates 4 random numbers 
    for (i = 0; i < 4; i++) {
        userGuess[i] = generaterandomNumber(10);
    }
    //testing variables
    console.log(targetNumber);
    console.log(userGuess);

    //created variable containing gem images
    var $gems = $('div.gems img');

    // for loop created for gems
    for (var i = 0; i < $gems.length; i++) {
        //variable for single gem created using .eq which returns jQuery object
        var $gem = $gems.eq(i);
        //gem given numerical value attribute
        $gem.attr('data-value', userGuess[i]); 
        //on click function added to each gem
        $gem.on("click", function() { 
            var $this = $(this);
            //assigned data value to gems
            var value = $this.attr("data-value");
            value = parseInt(value);
            //prints score to score total div
            var scoreTotal = $("#score-total").html();
            scoreTotal = parseInt(scoreTotal);
            //adds current value to score total
            scoreTotal = value + scoreTotal;
            $("#score-total").html(scoreTotal);

            //when scoretotal equals computers number then it prints a win and resets the computer number and gem values
            if (scoreTotal === targetNumber) {
                ++wins;
                $("#wins").html(wins);
                targetNumber = generaterandomNumber(50);
                $("#target-number").html(targetNumber);
                scoreTotal = 0;
                $("#score-total").html(scoreTotal);
                for (var i = 0; i < $gems.length; i++) {
                    $gems.eq(i).attr("data-value", generaterandomNumber(10));
                }
                
            }
            //when scoretotal exceeds computer number losses print and resets the computer number and gem values
            if (scoreTotal > targetNumber) {
                ++losses;
                $("#losses").html(losses);
                targetNumber = generaterandomNumber(50);
                $("#target-number").html(targetNumber);
                scoreTotal = 0;
                $("#score-total").html(scoreTotal); 
                for (var i = 0; i < $gems.length; i++) {
                    $gems.eq(i).attr("data-value", generaterandomNumber(10));
                }
                         
            }
        });
    }

  
        
        
    // })


   

    //onClicks

});
// var imageGem = $("<img>");
// imageGem.addClass("");
// imageCrystal.attr("src", )

