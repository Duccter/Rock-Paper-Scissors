function getComputerChoice() {
    // 0: rock, 1: paper, 2: scissors
    imgComputer.src = "";
    let num = Math.floor(Math.random() * 3);
    let res;
    switch(num) {
        case 0:
            res = "rock";
            imgComputer.src = "./images/rock.png";
            break;
        case 1:
            res = "paper";
            imgComputer.src = "./images/paper.png";
            break;
        case 2:
            res = "scissors";
            imgComputer.src = "./images/scissors.png";
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
        textAnnouncement.textContent = `A draw this match!`;
        return;
    }

    let human_computer = humanChoice + computerChoice;
    switch(human_computer) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
            // alert(`your choice: ${humanChoice}\ncomputer's choice: ${computerChoice}\nyou get 1 point!\n${humanChoice} beats ${computerChoice}`);
            textAnnouncement.textContent = `you get 1 point! ${humanChoice} beats ${computerChoice}`;
            human_points++;
            break;
        default:
            
            textAnnouncement.textContent = `computer gets 1 point! ${computerChoice} beats ${humanChoice}`;
            computer_points++;
            break;
    }
    return;
}

// function playGame() {
//     playRound(getHumanChoice(), getComputerChoice());

//     if (human_points > computer_points) {
//         alert(`You win!!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
//     } else if (human_points < computer_points) {
//         alert(`You lose!!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
//     } else {
//         alert(`Draw!!\nYour score: ${human_points}\nComputer's score: ${computer_points}`);
//     }
// }


let human_points = 0;
let computer_points = 0;
const btn = document.querySelector(".selection");
let round = 0;

imgHumanChoice = document.querySelector("#imgPlayer");
imgComputer = document.querySelector("#imgComputer");
textAnnouncement = document.querySelector(".result");

btn.addEventListener("click", (event) => {
    let button = event.target.closest("button");
    let humanChoice;

    if (!button) return;

    imgHumanChoice.src = "";

    switch(button.id) {
        case "btn1":
            humanChoice = "rock";
            imgHumanChoice.src = "./images/rock.png";
            break;
        case "btn2":
            humanChoice = "paper";
            imgHumanChoice.src = "./images/paper.png";
            break;
        case "btn3":
            humanChoice = "scissors"; 
            imgHumanChoice.src = "./images/scissors.png";
            break;
        default:
            return;
            break;
    }


    round++;
    ComputerChoice = getComputerChoice();
    playRound(humanChoice, ComputerChoice);

    if (round == 5) {
        console.log("it works");
        round = 0;
        if (human_points > computer_points) {
            textAnnouncement.textContent = `You win!!! Your score: ${human_points} Computer's score: ${computer_points}`;

        } else if (human_points < computer_points) {
            textAnnouncement.textContent = `You lose!!! Your score: ${human_points} Computer's score: ${computer_points}`;
        } else {
            textAnnouncement.textContent = `Draw!! Your score: ${human_points} Computer's score: ${computer_points}`;
        }

        human_points = 0;
        computer_points = 0;
    }
})
// playGame();

