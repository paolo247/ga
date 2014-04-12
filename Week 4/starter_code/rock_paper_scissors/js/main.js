
	var buttonRock = document.getElementById("rock");

	var	buttonPaper = document.getElementById("paper");

	var	buttonScissors = document.getElementById("scissors");
    





	buttonRock.onclick = function () {


    var computerChoice = Math.random();

		if (computerChoice < 0.34) {
		computer = "rock";
	} 
		else if(computerChoice <= 0.67) {
			computer = "paper";
	} 
			else {
				computer = "scissors";
	}

		if (computer == "rock") {	
				Information.innerHTML = "You played rock. The bot played rock.<br><br>You tied. :|";
			}
				else if	(computer == "paper") 
				{
					Information.innerHTML = "You played rock. The bot played paper.<br><br>You lose. :(";
				}
					else 
					{ 
						Information.innerHTML = "You played rock. The bot played scissors.<br><br>You win! :)";
					}
				}
			

	buttonPaper.onclick = function () {

    var computerChoice = Math.random();

		if (computerChoice < 0.34) {
		computer = "rock";
	} 
		else if(computerChoice <= 0.67) {
			computer = "paper";
	} 
			else {
				computer = "scissors";
	}


			if (computer === "paper") {
				Information.innerHTML = "You played paper. The bot played paper.<br><br>You tied. :|"
		}
			else if (computer === "scissors")
			{
				Information.innerHTML = "You played paper. The bot played scissors.<br><br>You lose. :("
			}
			else { 
				Information.innerHTML = "You played paper. The bot played rock.<br><br>You win! :)"
				}
			}

	buttonScissors.onclick = function () {
    var computerChoice = Math.random();

		if (computerChoice < 0.34) {
		computer = "rock";
	} 
		else if(computerChoice <= 0.67) {
			computer = "paper";
	} 
			else {
				computer = "scissors";
	}


		
		if (computer === "scissors") {	
				Information.innerHTML = "You played scissors. The bot played scissors.<br><br>You tied. :|";
			}
				else if	(computer === "rock") 
				{
					Information.innerHTML = "You played scissors. The bot played rock.<br><br>You lose. :(";
				}
					else { 
						Information.innerHTML = "You played scissors. The bot played paper.<br><br>You win! :)";
				}
			}



