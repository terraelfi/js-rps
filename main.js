const rpsArray = ["rock", "paper", "scissors"];

let playerScore = 0;
let CPUscore = 0;

// let playerSelection = prompt("Type Rock, Paper or Scissors").toLowerCase();


// Computer Selection
function getCPUselection() {
    let CPUselection = Math.floor(Math.random() * 3)
    
    let CPUrock = "Rock";
    let CPUpaper = "Paper";
    let CPUscissors = "Scissors";
    

    switch (CPUselection) {
        case 0:
            console.log("Computer chooses rock 🗿")
            return CPUrock;
            break;
        case 1:
            console.log("Computer chooses paper 📜")
            return CPUpaper;
            break;
        case 2:
            console.log("Computer chooses scissors ✂️")
            return CPUscissors;
            break;
        default:
            console.log("didn't pick anything");
            return null;
    }
}

// Game Started
function playRound(playerSelection) {
    playerSelection = prompt("Type Rock, Paper or Scissors").toLowerCase();

    if (playerSelection === "rock") {
        console.log("You choose rock 🗿");
    } else if (playerSelection === "paper") {
        console.log("You choose paper 📜");
    } else if (playerSelection === "scissors") {
        console.log("You choose scissors ✂️");
    }

    if ((playerSelection === "rock" && getCPUselection() === "Scissors") ||
        (playerSelection === "paper" && getCPUselection() === "Rock") ||
        (playerSelection === "scissors" && getCPUselection() === "Paper")
    ) {
        ++playerScore;
        console.log("YOU WIN!");
    } else if (
        (playerSelection === "rock" && getCPUselection() === "Paper") ||
        (playerSelection === "paper" && getCPUselection() === "Scissors") ||
        (playerSelection === "scissors" && getCPUselection() === "Rock")
    ) {
        ++CPUscore;
        console.log("YOU LOST!");
    } else if ((playerSelection === "rock" && getCPUselection() === "Rock") ||
        (playerSelection === "paper" && getCPUselection() === "Paper") ||
        (playerSelection === "scissors" && getCPUselection() === "Scissors")
    ) {
        console.log("TIED!");
    } else {
        console.log("Cancelled or typo");
    }

    console.log("===================================");
}

for (let i = 0; i < 5; i++) {
    playRound();   
}

console.log("%c =====SCORE=====", "color: red; font-size:1rem");
console.log("Player Score: " + playerScore);
console.log("CPU Score: " + CPUscore);
