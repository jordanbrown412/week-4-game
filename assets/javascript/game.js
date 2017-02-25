var targetNumber = Math.floor(Math.random() * 102) + 19;
$("#number-to-guess").html(targetNumber);

var winCounter = 0;
$("#wins").html(winCounter);

var lossCounter = 0;
$("#losses").html(lossCounter);


var userNum = 0;
$("#user-score").html(userNum);

var numOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];

for (var i = 0; i < numOptions.length; i++) {

var imageCrystal = $("<img>");

imageCrystal.addClass("crystal-image");

imageCrystal.attr("src", "../week-4-game/assets/images/crystal.png");

imageCrystal.attr("data-crystalvalue", numOptions[i]);

$("#crystals").append(imageCrystal)
};


// ON Click Function 
$(".crystal-image").on("click", function(){
	var crystalValue= ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	userNum += crystalValue;
	$("#user-score").html(userNum)

// Game Over
if (userNum === targetNumber){

winCounter++;
$("#wins").html(winCounter);
alert("Great Job!!! You're the Winner!!!");	
startgame();


} else if(userNum >= targetNumber){
lossCounter++;
$("#losses").html(lossCounter);
alert("You Lose");
startgame();
};
});


function startgame(){


var targetNumber = Math.floor(Math.random() * 102) + 19;
$("#number-to-guess").html(targetNumber);
var numOptions = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
var userNum = 0;
$("#user-score").html(userNum);


};




