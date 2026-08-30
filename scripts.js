function getComputerChoice() {
    // 0: rock, 1: paper, 2: scissors
    let num = Math.floor(Math.random() * 3);
    let res;
    switch(num) {
        case 0:
            res = "rock";
            break;
        case 1:
            res = "paper";
            break;
        case 2:
            res = "scissors";
            break;
        default:
            res = "somethingWentWrong";
            break;
    }

    console.log(num);
    return res;
}

let getHumanChoice = () => prompt("Selection: rock, paper, scissors");


// alert(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        alert(`your choice: ${humanChoice}\ncomputer's choice: ${computerChoice}\nA draw this match!`);
        return;
    }

    let human_computer = humanChoice + computerChoice;
    switch(human_computer) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            alert(`your choice: ${humanChoice}\ncomputer's choice: ${computerChoice}\nyou get 1 point!\n${humanChoice} beats ${computerChoice}`);
            human_points++;
            break;
        default:
            alert(`your choice: ${humanChoice}\ncomputer's choice: ${computerChoice}\ncomputer gets 1 point!\n${computerChoice} beats ${humanChoice}`);
            computer_points++;
            break;
    }
    return;
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (human_points > computer_points) {
        alert(`You win!!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
    } else if (human_points < computer_points) {
        alert(`You lose!!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
    } else {
        alert(`Draw!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
    }
}

let human_points = 0;
let computer_points = 0;
playGame();