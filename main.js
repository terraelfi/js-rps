// const rpsArray = ["rock", "paper", "scissors"];

// Player Selection of RPS
function getPlayerSelection() {
    playerSelection = prompt("Type Rock, Paper or Scissors").toLowerCase();
    
    let playerSelectionCap = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    
    let playerRock = "Rock";
    let playerPaper = "Paper";
    let playerScissors = "Scissors";

    switch (playerSelectionCap) {
        case "Rock":
            console.log("YOU chooses Rock 🗿")
            return playerRock;
        case "Paper":
            console.log("YOU chooses Paper 📜")
            return playerPaper;
        case "Scissors":
            console.log("YOU chooses Scissors ✂️")
            return playerScissors;
        case null:
            break;
    }
}

// Computer Selection of RPS
function getCPUselection() {
    let CPUselection = Math.floor(Math.random() * 3)

    // WILL RETURN THIS VALUE BELOW
    let CPUrock = "Rock";
    let CPUpaper = "Paper";
    let CPUscissors = "Scissors";

    switch (CPUselection) {
        case 0:
            console.log("CPU chooses Rock 🗿")
            return CPUrock;
        case 1:
            console.log("CPU chooses Paper 📜")
            return CPUpaper;
        case 2:
            console.log("CPU chooses Scissors ✂️")
            return CPUscissors;
        default:
            console.log("didn't pick anything");
            return null;
    }
}
// Score
let playerScore = 0;
let CPUscore = 0;

// Game Started
function playRound(playerSelection, CPUselection) {
    
    if (playerSelection === CPUselection) {
        // console.log("TIED!")
    } else if (playerSelection === "Rock" && CPUselection === "Paper") { // ROCK SECTION
        CPUscore++;
        console.log("YOU LOST!");
    } else if (playerSelection === "Rock" && CPUselection === "Scissors") {
        playerScore++;
        console.log("YOU WIN!");
    } else if (playerSelection === "Paper" && CPUselection === "Scissors") { // PAPER SECTION
        CPUscore++;
        console.log("YOU LOST!");
    } else if (playerSelection === "Paper" && CPUselection === "Rock") {
        playerScore++;
        console.log("YOU WIN!");
    } else if (playerSelection === "Scissors" && CPUselection === "Rock") { // SCISSORS SECTION
        CPUscore++;
        console.log("YOU LOST!");
    } else if (playerSelection === "Scissors" && CPUselection === "Paper") {
        playerScore++;
        console.log("YOU WIN!");
    } else {
        console.log("Typo or cancelled")
    }

    return {playerScore, CPUscore};
}

function winnerCount() {
    console.log("%c =================", "font-size: 1rem; color: red;");
    console.log("%c Total Score", "font-size: 1rem; color: red;");
    console.log("Player score: " + playRound().playerScore);
    console.log("CPU score: " + playRound().CPUscore);
    console.log("%c =================", "font-size: 1rem; color: red;");

    // if (playRound().playerScore || playRound().CPUscore === 5) {
    //     b
    // }
}

for (let i = 0; i < 5; i++) {
    playRound(getPlayerSelection(), getCPUselection());
    winnerCount();
}