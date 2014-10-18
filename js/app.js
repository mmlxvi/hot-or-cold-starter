$(document).ready(function(){
	
	$( "#userGuess" ).focus();
	var userChoice;
	var computerChoice;
	var difference;
	var counter=0;
	/*--- Generate random number chosen by computer ---*/
	var num = Math.ceil((Math.random() * 100));
	var computerChoice = num.toFixed(0);
	
	
	console.log(computerChoice);

	/*--- User can start new game without reloading page ---*/
	

    $("form").submit(function(event){

    	event.preventDefault();

    	userChoice = document.getElementById("userGuess").value;
    	difference = (Math.abs(computerChoice - userChoice));
    	$('#userGuess').val('');
    	$("#guessList").append(userChoice + ", ");
    	counter = counter+1;
    	$('#guessCount').show();
    	$('#count').text(counter);
    	
    	if (isNaN(userChoice)) {
    		alert("\"" + userChoice + "\"" + " is not a number. Please enter a number between 1 and 100.");
    	}

    	else if ((userChoice < 1) || (userChoice > 100)) {
    		alert("Enter a number between 1 and 100.");
    	}

    	else if (userChoice === computerChoice) {
    		$("#feedback").text("That's correct!");
            $("html").css("background-color","black");
    		
    	}
    	
    	else {

    			if (difference > 0 && difference <= 1) {
    			$("#feedback").text("Very hot! Guess again.");
                $("html").css("background-color","#fe0001");
    			}

	    		else if (difference > 1 && difference <= 6) {
	    		
	    		$("#feedback").text("Hot! Guess again.");
	    		//alert("Hot!");
                $("html").css("background-color","#ff00ff");
	    		
	    		}

	    		else if (difference > 6 && difference <= 10) {
	    		
	    		$("#feedback").text("Very warm. Guess again.");
	    		//alert("Warm.");
                $("html").css("background-color","#ff6600");
	    		}

	    		else if (difference > 10 && difference <= 18) {
	    		
	    		$("#feedback").text("Warm. Guess again.");
	    		//alert("Kinda warm...");
                $("html").css("background-color","#cfff04");
	    		}

	    		else if (difference > 18 && difference <= 35) {
	    		
	    		$("#feedback").text("Lukewarm. Guess again.");
	    		//alert("Cold.");
                $("html").css("background-color","#6fff00");
	    		}

	    		else if (difference > 35 && difference <= 50) {
	    		
	    		$("#feedback").text("Cold. Guess again.");
	    		//alert("Very cold.");
                $("html").css("background-color","#00ffff");
	    		}

	    		else {
	    		
	    		$("#feedback").text("Very cold. Guess again.");
	    		//alert("Freezing.");
                $("html").css("background-color","#993cf3");
	    		}
    		
    		}
    	
    	
    });
	
	

 

      $(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		counter = 0;
		$("#userChoice").val("");
		$("#guessList").text("");
		$('#guessCount').show();
		$('#count').text(counter);
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