const rpsArray = ["rock", "paper", "scissors"];

let playerScore = 0;
let CPUscore = 0;

let playerSelection = prompt("Type Rock, Paper or Scissors").toLowerCase();
let CPUselection = Math.floor(Math.random() * rpsArray.length);

for (let i = 0; i < 10; i++) {
    getCPUselection();
}

// Computer Selection
function getCPUselection() {
    switch (CPUselection) {
        case 0:
            console.log("Computer chooses rock 🗿")
            break;
        case 1:
            console.log("Computer chooses paper 📜")
            break;
        case 2:
            console.log("Computer chooses scissors ✂️")
            break;
        default:
            console.log("didn't pick anything");
    }
    return CPUselection;
}

if (playerSelection === "rock") {
    console.log("You choose rock 🗿");
} else if (playerSelection === "paper") {
    console.log("You choose paper 📜");
} else if (playerSelection === "scissors") {
    console.log("You choose scissors ✂️");
}

if ((playerSelection === "rock" && getCPUselection() === 2) ||
    (playerSelection === "paper" && getCPUselection() === 0) ||
    (playerSelection === "scissors" && getCPUselection() === 1)
) {
    ++playerScore;
    console.log("YOU WIN!");
} else if (
    (playerSelection === "rock" && getCPUselection() === 1) ||
    (playerSelection === "paper" && getCPUselection() === 2) ||
    (playerSelection === "scissors" && getCPUselection() === 0)
) {
    ++CPUscore;
    console.log("YOU LOST!");
} else if ((playerSelection === "rock" && getCPUselection() === 0) ||
    (playerSelection === "paper" && getCPUselection() === 0) ||
    (playerSelection === "scissors" && getCPUselection() === 2)
) {
    console.log("DRAW!");
} else {
    console.log("Cancelled or typo");
}

console.log("%c =====SCORE=====", "color: red; font-size:1rem");
console.log("Player Score: " + playerScore);
console.log("CPU Score: " + CPUscore);
