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
	

    $("form").submit(function(event){

    	event.preventDefault();

    	userChoice = document.getElementById("userGuess").value;
    	difference = (Math.abs(computerChoice - userChoice));
    	$('#userGuess').val('');
    	$("#guessList").append(userChoice + ", ");

    	
    	if (isNaN(userChoice)) {
    		alert("\"" + userChoice + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else if ((userChoice < 1) || (userChoice > 100)) {
    		alert("Enter a number between 1 and 100.");
    	}

    	else if (userChoice === computerChoice) {
    		$("#feedback").text("That's correct!");
    		
    	}
    	
    	else {

    			if (difference > 0 && difference <= 1) {
    			$("#feedback").text("You're right next to it!");
    			}

	    		else if (difference > 1 && difference <= 6) {
	    		
	    		$("#feedback").text("Hot!");
	    		//alert("Hot!");
	    		
	    		}

	    		else if (difference > 6 && difference <= 10) {
	    		
	    		$("#feedback").text("Warm.");
	    		//alert("Warm.");
	    		}

	    		else if (difference > 10 && difference <= 18) {
	    		
	    		$("#feedback").text("Kinda warm...");
	    		//alert("Kinda warm...");
	    		}

	    		else if (difference > 18 && difference <= 40) {
	    		
	    		$("#feedback").text("Cold.");
	    		//alert("Cold.");
	    		}

	    		else if (difference > 40 && difference <= 75) {
	    		
	    		$("#feedback").text("Very cold.");
	    		//alert("Very cold.");
	    		}

	    		else {
	    		
	    		$("#feedback").text("Freezing.");
	    		//alert("Freezing.");
	    		}
    		
    		}
    	
    	
    });
	
	

 

    $(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		$("#guessList").val('');
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