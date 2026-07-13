const btnGroup = document.querySelector(".buttonGroup")
const main = document.querySelector(".main");
const frontImage = document.querySelector(".frontImage");
const header = document.querySelector(".header");
const footer = document.querySelector(".footer");
const announcementBanner = document.querySelector(".announcementBanner");
const content = document.querySelector(".content");

const announcement = document.createElement("p");
announcementBanner.appendChild(announcement);

const btnArray = [
    document.querySelector("#rockBtn"), 
    document.querySelector("#paperBtn"), 
    document.querySelector("#scissorsBtn")
];

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
    const humanScoreCount = document.querySelector("#humanScoreCount");
    const computerScoreCount = document.querySelector("#computerScoreCount");
    const roundCount = document.querySelector("#roundCount");

    
    if (roundNumber >= 5) {
        if(computerScore === humanScore){
            announcement.textContent = "Tie";
        }
        else if(computerScore > humanScore){
            announcement.textContent = "computer wins";
        }
        else{
            announcement.textContent = "human win";
        }
        return;
    }
    
    console.log("Round:", roundNumber);
    roundCount.textContent = roundNumber + 1;
    console.log("Human Choice: ", humanChoice, "Computer Choice: ", computerChoice)

    if (humanChoice === computerChoice) {
        console.log(humanChoice + " " + computerChoice + " " + "TIE");
        announcement.textContent = "TIE";
    }

    else if (humanChoice === "rock" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "scissors" ||
        humanChoice === "scissors" && computerChoice === "rock"
    ) {
        computerScore++;
        computerScoreCount.textContent = computerScore;
        console.log(humanChoice + " " + computerChoice + " " + "You lose the Round");
        announcement.textContent = "You lose the Round";
    }

    else if (humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "rock" && computerChoice === "scissors"
    ) {
        humanScore++;
        humanScoreCount.textContent = humanScore;
        console.log(humanChoice + " " + computerChoice + " " + "You Win the Round");
        announcement.textContent = "You Win the Round";
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
    header.style.display = "block";
    content.style.display = "flex";
    footer.style.display = "block";
}

frontImage.addEventListener('click', displayPropertyChanger);