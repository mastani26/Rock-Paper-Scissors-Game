const pchoice = document.getElementById("pchoice");
const cchoice = document.getElementById("cchoice");
const pscore = document.getElementById("pscore");
const cscore = document.getElementById("cscore");
const result = document.getElementById("result");

let choices = ['rock', 'paper', 'scissors'];
let playerscore = 0;
let computerscore = 0;

function play(playerchoice) {
    let computerchoice = choices[Math.floor(Math.random() * 3)];
    let resultdisplay = "";

    playerchoice = playerchoice.toLowerCase();

    if (playerchoice === computerchoice) {
        resultdisplay = "It's a Tie";
    } else {
        switch (playerchoice) {
            case "rock":
                resultdisplay = (computerchoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                resultdisplay = (computerchoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                resultdisplay = (computerchoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    pchoice.textContent = `Player: ${playerchoice}`;
    cchoice.textContent = `Computer: ${computerchoice}`;

    result.classList.remove("greentext", "redtext");

    switch (resultdisplay) {
        case "YOU WIN!":
            playerscore++;
            result.classList.add("greentext");
            break;
        case "YOU LOSE!":
            computerscore++;
            result.classList.add("redtext");
            break;
    }

    pscore.textContent = `Player Score: ${playerscore}`;
    cscore.textContent = `Computer Score: ${computerscore}`;
    result.textContent = resultdisplay;

    if (playerscore === computerscore) {
        result.textContent += " | It's a Tie Game!";
    } else if (playerscore > computerscore) {
        result.textContent += " | You are leading! 🎉🎉";
    } else {
        result.textContent += " | Computer is leading 😔";
    }
}
