const rock = document.querySelector("#rockBtn");
const scissors = document.querySelector("#scissorsBtn");
const paper = document.querySelector("#paperBtn");

const btnGroup = document.querySelector(".buttonGroup")

let humanChoice;
let computerChoice;

let btnArray = [rock, paper, scissors];

let humanScore = 0;
let computerScore = 0;
let roundNumber = 0;
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 99) + 1;
    if (randomNumber <= 33) {
        return "rock";
    }
    else if (randomNumber <= 66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    switch (humanChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function gameRounds() {

    if (roundNumber >= 5) {
        if(computerScore === humanScore){
            alert("Tie");
        }
        else if(computerScore > humanScore){
            alert("computer wins")
        }
        else{
            alert("human wins");
        }
        return;
    }

    console.log("this is hu: ", humanChoice, "this is com: ", computerChoice)

    if (humanChoice === computerChoice) {
        console.log(humanChoice + " " + computerChoice + " " + "TIE");
        alert("TIE");
    }

    else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        computerScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You lose the Round");
        alert("You lose the Round");
    }

    else if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        humanScore++;
        console.log(humanChoice + " " + computerChoice + " " + "You Win the Round");
        alert("You Win the Round");
    }

    roundNumber++;
}

function gameStart() {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();

    console.log(humanChoice, computerChoice);

    gameRounds();
}


btnArray.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        humanChoice = i;
        gameStart();
    })
});