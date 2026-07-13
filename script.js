const rock = document.querySelector("#rockBtn");
const scissors = document.querySelector("#scissorsBtn");
const paper = document.querySelector("#paperBtn");

const btnGroup = document.querySelector(".buttonGroup")

const main = document.querySelector(".main");

const frontImage = document.querySelector(".frontImage");


let btnArray = [rock, paper, scissors];
const choices = ["rock", "paper", "scissors"];

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

function gameRounds(humanChoice, computerChoice) {
    console.log("Round:", roundNumber);
    if (roundNumber >= 5) {
        if(computerScore === humanScore){
            alert("Tie");
            main.textContent = "Tie";
        }
        else if(computerScore > humanScore){
            alert("computer wins")
            main.textContent = "computer wins";
        }
        else{
            alert("human wins");
            main.textContent = "human win";
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

function gameStart(humanChoice) {
    const computerChoice = getComputerChoice();

    console.log(humanChoice, computerChoice);

    gameRounds(humanChoice, computerChoice);
}


btnArray.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        gameStart(choices[i]);
    })
});


function displayPropertyChanger(){
    frontImage.style.display = "none";
    main.style.display = "flex";
}

frontImage.addEventListener('click', displayPropertyChanger);