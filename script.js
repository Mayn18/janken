/**
 * Question
    # Declare the the function to store the value from the user
    # create function to take the value from the user
    # create a function to decide a random value from "rock", "paper", "scissors"
    # compare the value from the user and the random value we generated
    # display the result
    # the game will be played in rounds
    # there will be a total of 5 rounds the one which has the most point wins


    * Pseudo Code

        Start
        DECLARE function getComputerChoice()
            use random() to generate a random number
            multiply the number with 100
            IF number is less than or equal to 33
            THEN return the value "rock"
            ELSE IF the value is less than equal to 66
            THEN return the value "paper"
            ELSE return "scissors"

        DECLARE function getHumanChoice()
            use prompt() to get a string input from the user
            tell the user to input either "rock", "paper", "scissors"
            return the value inputed by the user

        DECLARE variable humanScore and computerScore
        INITIALIZE humanScore and computerScore as 0

        DECLARE function playRound(humanChoice, computerChoice)
            convert the humanChoice to lowercase
            IF humanChoice is equal to computerChoice
            THEN increment both humanChoice and computerChoice by 1 And return "TIE"

            ELSE IF humanChoice is "rock" && computerChoice "paper"
            THEN computerScore increment by 1 and return "You lose" along with both score
            ELSE IF humanChoice is "scissor" && computerChoice "rock"
            THEN computerScore increment by 1 and return "You lose" along with both score
            ELSE IF humanChoice is "paper" && computerChoice "scissor"
            THEN computerScore increment by 1 and return "You lose" along with both score
            
            IF humanChoice is "paper" && computerChoice "rock"
            THEN humanScore increment by 1 and return "You Win" along with both score
            ELSE IF humanChoice is "rock" && computerChoice "scissor"
            THEN humanScore increment by 1 and return "You Win" along with both score
            ELSE IF humanChoice is "scissor" && computerChoice "paper"
            THEN humanScore increment by 1 and return "You Win" along with both score

        DECLARE function playGame()
            DECLARE variable gameCounter = 0,  humanChoice, computerChoice
            FOR gameCounter is less than 5
                INITIALIZE humanChoice with the value of getHumanChoice and computerChoice with getComputerChoice
                run playRound(humanScore,computerScore)
            IF humanScore is equal to computerScore
            THEN return "Game is a tie"
            ELSE IF humanScore is greater than computerScore
            THEN return "Human wins"
            ELSE return "Computer wins"

        RUN playGame()
        Display the value returned by playGame

        END


**/

// console.log(Math.floor(Math.random() * 99 ) + 1)


// The Function to get computer choice using a random number from Math.random

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 99 ) + 1;
    if(randomNumber<=33){
        return "rock";
    }
    else if(randomNumber <= 66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

// Function to get the choice made by the user

function getHumanChoice(){
    let choice = prompt("Enter your choice from rock, paper or scissors");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

// function calculate Scores of each round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice){
        console.log(humanChoice + " " + computerChoice + " " + "TIE");
        alert("TIE");
    }

    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You lose the Round");
        alert("You lose the Round");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You lose the Round");
        alert("You lose the Round");
    }
     else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You lose the Round");
        alert("You lose the Round");
    }

    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You Win the Round");
        alert("You Win the Round");
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        humanScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You Win the Round");
        alert("You Win the Round");
    }
     else if(humanChoice === "rock" && computerChoice === "scissors"){
        humanScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You Win the Round");
        alert("You Win the Round");
    }

}

// Function to play the game
function playGame(){
    let humanChoice, computerChoice;

    for(let i = 0; i < 5; i++){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        console.log(humanChoice + " " + computerChoice + " Round " + i);

        playRound(humanChoice,computerChoice);

        console.log(humanScore + " " + computerScore +" Round "+ i);
    }

    if(humanScore === computerScore){
        alert(`Game is a TIEfinal score: H ${humanScore} C ${computerScore}`);
    }
    else if(humanScore > computerScore){
        alert(`The Human Wins  final score: H ${humanScore} C ${computerScore}`);
    }
    else{
        alert(`The Computer Wins final score: H ${humanScore} C ${computerScore}`);
    }

    humanScore = 0;
    computerScore = 0;
}

playGame();