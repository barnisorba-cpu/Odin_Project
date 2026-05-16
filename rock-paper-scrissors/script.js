function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num === 1) return "rock";
    else if (num === 2) return "scissors";
    else return "paper";
}

let tie = 0;
let computerWin = 0;
let humanWin = 0;

function playRound() {
    let computerChoice = getComputerChoice();
    let userChoice = prompt("Choose: rock, scissors, or paper?");

    if (userChoice === computerChoice) {
        tie = tie + 1;
        console.log("Tie!");
    } else if (userChoice === "paper" && computerChoice === "rock") {
        humanWin = humanWin + 1;
        console.log("You win!");
    } else if (userChoice === "rock" && computerChoice === "paper") {
        computerWin = computerWin + 1;
        console.log("Computer wins!");
    } else if (userChoice === "scissors" && computerChoice === "paper") {
        humanWin = humanWin + 1;
        console.log("You win!");
    } else if (userChoice === "paper" && computerChoice === "scissors") {
        computerWin = computerWin + 1;
        console.log("Computer wins!");
    } else if (userChoice === "rock" && computerChoice === "scissors") {
        humanWin = humanWin + 1;
        console.log("You win!");
    } else if (userChoice === "scissors" && computerChoice === "rock") {
        computerWin = computerWin + 1;
        console.log("Computer wins!");
    }
}

// 5-ször játszik
for (let i = 0; i < 5; i++) {
    playRound();
}

console.log(`Final score - Tie: ${tie}, Human: ${humanWin}, Computer: ${computerWin}`);