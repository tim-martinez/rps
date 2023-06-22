game();

function game(){

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
       
        //div selector
        const container = document.querySelector('.results');

        //check who wins and print winner
        if (player === computer){

            //print tie
            const tie = document.createElement('p');
            tie.textContent = 'Round ' + round +': Tie!';

            container.appendChild(tie);
            return "tie!";

        } else if( (player === "rock" && computer === "scissors") || (player === "paper" && computer === "rock") || (player === "scissors" && computer === "paper")){            
            
            //update score
            playerScore++;

            //print win
            const win = document.createElement('p');
            win.textContent = 'Round' + round +': You Win!';

            container.appendChild(win);
            return "You Win!";
            
        } else {
            //update score
            compScore++;

            //print lose
            const lose = document.createElement('p');
            lose.textContent = 'Round' + round +': You lose!';

            container.appendChild(lose);
            return "You Lose!";
        };
    };

    //keep track of round
    let round = 1;

    //keep track of score
    let playerScore = 0;
    let compScore = 0;

    //event listener for buttons that call playRound 
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {

        btn.addEventListener('click', () => {
            //declare variable for computer selection
            const computer = getComputerSelection();
            playRound(btn.className, computer);
            
            //print running score
            const container = document.querySelector('.results');
            const score = document.createElement('p');
            score.textContent = 'Player: ' + playerScore + '  ' + 'Computer: ' + compScore;

            container.appendChild(score);

            //increment round
            round++;

            //return winner best of 5

            if (round === 6){

                const container = document.querySelector('.results');

                if(playerScore > compScore){
                    const youWin = document.createElement('p');
                    youWin.textContent = "You win best of 5!";
                    container.appendChild(youWin);
                }else if(playerScore === compScore){
                    const tie = document.createElement('p');
                    tie.textContent = 'Tie Game! No one wins!';
                    container.appendChild(tie);

                }else {
                    const youLose = document.createElement('p');
                    youLose.textContent = "You Lose best of 5!";
                    container.appendChild(youLose);
                };

                round = 1;
                playerScore = 0;
                compScore = 0;
            };
        });
    });

};


