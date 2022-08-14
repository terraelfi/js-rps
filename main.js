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

    let playerWin;
    let CPUwin;
    
    if (playerSelection === CPUselection) {
        // console.log("TIED!")
    } else if (playerSelection === "Rock" && CPUselection === "Paper") { // ROCK SECTION
        CPUwin = true;
        console.log("📜 beats 🗿 : CPU Wins!");
    } else if (playerSelection === "Rock" && CPUselection === "Scissors") {
        playerWin = true;
        console.log("🗿 beats ✂️ : Player Wins!");
    } else if (playerSelection === "Paper" && CPUselection === "Scissors") { // PAPER SECTION
        CPUwin = true
        console.log("✂️ beats 📜 : CPU Wins!");
    } else if (playerSelection === "Paper" && CPUselection === "Rock") {
        playerWin = true;
        console.log("📜 beats 🗿 : Player Wins!");
    } else if (playerSelection === "Scissors" && CPUselection === "Rock") { // SCISSORS SECTION
        CPUwin = true
        console.log("🗿 beats ✂️ : CPU Wins!");
    } else if (playerSelection === "Scissors" && CPUselection === "Paper") {
        playerWin = true;
        console.log("✂️ beats 📜 : Player Wins!");
    } else {
        console.log("Typo or cancelled")
    }

    if (playerWin === true) {
        playerScore++;
    } else if (CPUwin === true) {
        CPUscore++;
    }

    return {playerScore, CPUscore};
}

function winnerCount() {
    console.log("%c =================", "font-size: 1rem; color: red;");
    console.log("%c Total Score", "font-size: 1rem; color: red;");
    console.log("Player score: " + playRound().playerScore);
    console.log("CPU score: " + playRound().CPUscore);
    console.log("%c =================", "font-size: 1rem; color: red;");
}

for (let i = 0; i < 5; i++) {
    playRound(getPlayerSelection(), getCPUselection());
    winnerCount();
}

if (playerScore > CPUscore) {
    console.log("CONGRATULATIONS YOU Beats CPU! 🥳🎉");
} else if (playerScore === CPUscore) {
    console.log("TIED! ♻️ Restart to play again!");
} else {
    console.log("HAHA YOU Lose to a JavaScript Program 🤡");
}

// for (let i = 0; i < 20; i++) {
//     if (playerScore === 5) {
//         console.log("CONGRATULATIONS YOU Beats CPU! 🥳🎉");
//     } else if (CPUscore === 5) {
//         console.log("HAHA YOU Lose to a JavaScript Program 🤡");
//     } else {
//         playRound(getPlayerSelection(), getCPUselection());
//     }
//     winnerCount();
// }