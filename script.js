game();

function game(){

    //loop 5 times
    for (let i = 0; i < 5; i++){

        // prompt user for selection
        let player = prompt("Rock, Paper, Scissors?");

        //declare variable for computer selection
        const computer = getComputerSelection();

        //write a function that randomly returns rock, paper, or scissors
        function getComputerSelection(){
            let choices = ["rock","paper","scissors"];
            let randomChoice = Math.floor(Math.random()*choices.length);
            return choices[randomChoice];
        };

        // play a round against computer
        function playRound(player,computer){
            //convert player to lower case
            player = player.toLowerCase();
            
            if (player === computer){
                return "tie!"
            } else if( (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")){
                return "You Win!"
            } else {
                return "You Lose!"
            }

        };

        //return results and round number
        let results = playRound(player,computer);
        console.log("Round", i + 1);
        console.log("Player:", player);
        console.log("Computer:", computer);
        console.log(results);
    };
};

//print winner best of 5
