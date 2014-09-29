$(document).ready(function(){
	
	/*--- Generate random number chosen by computer ---*/
	var num = (Math.random() * 100);
	var computerChoice = num.toFixed(0);
	var userChoice;
	console.log(computerChoice);

	/*--- User can start new game without reloading page ---*/
	$(".new").click(function() {
		num = (Math.random() * 100);
		computerChoice = num.toFixed(0);
		console.log(computerChoice);
		});
    

    $("#userGuess").keydown(function(e){

    	if(e.keyCode == 13) {
		
    		userChoice = document.getElementById("userGuess").value;
    
		}
            console.log(userChoice);

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