$(document).ready(function(){
	
	
	var userChoice;
	var computerChoice;
	var difference;
	var counter=0;
	/*--- Generate random number chosen by computer ---*/
	var num = (Math.random() * 100);
	var computerChoice = num.toFixed(0);
	
	console.log(computerChoice);

	/*--- User can start new game without reloading page ---*/
	
for (counter = 0; counter < 100; counter++) {

    $("#guessButton").click(function(){
    	userChoice = document.getElementById("userGuess").value;
    	difference = (Math.abs(computerChoice - userChoice));
    	$('#guessButton').val('');

    	$("#guessList").append(userChoice + ",");
    	
    	
    	if (isNaN(userChoice)) {
    		alert("\"" + userChoice + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else if ((userChoice < 1) || (userChoice > 100)) {
    		alert("Enter a number between 1 and 100.");
    	}

    	else if (userChoice === computerChoice) {
    		alert("You guessed it!");
    	}
    	
    	else {

    			if (difference > 0 && difference <= 3) {
    			$("#feedback").text("You're very hot!");
    			}

	    		else if (difference > 3 && difference <= 6) {
	    		
	    		$("#feedback").text("Hot!");
	    		alert("Hot!");
	    		
	    		}

	    		else if (difference > 6 && difference <= 12) {
	    		
	    		$("#feedback").text("More than warm...");
	    		alert("More than warm...");
	    		
	    		}

	    		else if (difference > 12 && difference <= 20) {
	    		
	    		$("#feedback").text("Warm.");
	    		alert("Warm.");
	    		}

	    		else if (difference > 20 && difference <= 30) {
	    		
	    		$("#feedback").text("Kinda warm...");
	    		alert("Kinda warm...");
	    		}

	    		else if (difference > 30 && difference <= 50) {
	    		
	    		$("#feedback").text("Cold.");
	    		alert("Cold.");
	    		}

	    		else if (difference > 50 && difference <= 75) {
	    		
	    		$("#feedback").text("Very cold.");
	    		alert("Very cold.");
	    		}

	    		else {
	    		
	    		$("#feedback").text("Frickin' freezing.");
	    		alert("Freezing.");
	    		}
    		
    		}
    	
    	
    });

}
 
/*
    $(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		}); */

	/*--- Display information modal box ---*/
  	//$(".what").click(function(){
    //	$(".overlay").fadeIn(700);

  	//});

  	/*--- Hide information modal box ---*/
  	//$("a.close").click(function(){
  	//	$(".overlay").fadeOut(700);
  	//});

  	


});