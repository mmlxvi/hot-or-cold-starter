$(document).ready(function(){
	
	
	var userChoice;
	var computerChoice;
	
	/*--- Generate random number chosen by computer ---*/
	var num = (Math.random() * 100);
	var computerChoice = num.toFixed(0);
	
	console.log(computerChoice);

	/*--- User can start new game without reloading page ---*/
	
    

    $("#guessButton").click(function(){
    	userChoice = document.getElementById("userGuess").value;
    	var difference = (Math.abs(computerChoice - userChoice));
    	$('#guessButton').val('');

    	while (userChoice !== computerChoice) {

    	    	if (isNaN(userChoice)) {
    		alert("\"" + userChoice + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else if ((userChoice < 1) || (userChoice > 100)) {
    		alert("Enter a number between 1 and 100.");
    	}
    	
    	else if (difference <= 3) {
    		alert("Smoking hot!");
    	}

    	else if (difference > 3 && difference <= 6) {
    		alert("Hot!");
    	}

    	else if (difference > 6 && difference <= 12) {
    		alert("More than warm...");
    	}

    	else if (difference > 12 && difference <= 20) {
    		alert("Warm!");
    	}

    	else if (difference > 20 && difference <= 30) {
    		alert("Kinda warm...");
    	}

    	else if (difference > 30 && difference <= 50) {
    		alert("Cold.");
    	}

    	else if (difference > 50 && difference <= 75) {
    		alert("Ice cold.");
    	}

    	else {
    		alert("You're on Antarctica.");
    	};

        };
    	
    	});
 

    $(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(700);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(700);
  	});

  	




});