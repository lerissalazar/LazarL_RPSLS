let gameScore = document.getElementById("gameScore");
let gameHeader = document.getElementById("gameHeader");
let gameSelectionsBtn = document.getElementById("gameSelectionsBtn");
let gamequitBtn = document.getElementById("gamequitBtn");

let userAmount = "";
let gameLevel = "";
let playerOneInput = "";
let playerTwoInput = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let scoreOneImg;
let scoreOneImgAlt;
let scoreTwoImg;
let scoreTwoImgAlt;

let btnsRow;
let h2;



ChangeTitle("Hello player");
GamePlayer();
function ChangeTitle(headerStr) {
    gameHeader.innerHTML = "";
    h2 = document.createElement("h2");
    h2.className = "playerTitle"
    h2.textContent = headerStr;
    gameHeader.appendChild(h2);
}

function GamePlayer() {
    gameSelectionsBtn.innerHTML = "";
    btnsRow = document.createElement("div");
    btnsRow.id = "playersRow";
    btnsRow.className = "modes";
    let btn1 = document.createElement("img");
    btn1.className = "modeBtn";
    btn1.src = "./assets/num1.png";
    btn1.alt = "1 GamePlayer";
    btn1.addEventListener("click", function () {
        LevelBtn("singleplayer");
        console.log("1")
    });
    let btn2 = document.createElement("img");
    btn2.className = "modeBtn";
    btn2.src = "./assets/num2.png";
    btn2.alt = "2 GamePlayer";
    btn2.addEventListener("click", function () {
        LevelBtn("twoplayer");
        console.log("2")
    });
    btnsRow.appendChild(btn1);
    btnsRow.appendChild(btn2);
    gameSelectionsBtn.appendChild(btnsRow);
}

function LevelBtn(playersValue) {
    userAmount = playersValue;
    gameSelectionsBtn.removeChild(btnsRow);
    GameRounds();
}

function GameRounds() {
    gameSelectionsBtn.innerHTML = "";
    btnsRow = document.createElement("div");
    btnsRow.id = "playersRow";
    btnsRow.className = "modes";
    let btn1 = document.createElement("img");
    btn1.className = "modeBtn";
    btn1.src = "./assets/num1.png";
    btn1.alt = "mode 1";
    btn1.addEventListener("click", function () {
        GameRoundBtn("1");
    });
    let btn2 = document.createElement("img");
    btn2.className = "modeBtn";
    btn2.src = "./assets/num5.png";
    btn2.alt = "mode 2";
    btn2.addEventListener("click", function () {
        GameRoundBtn("3");
    });
    let btn3 = document.createElement("img");
    btn3.className = "modeBtn";
    btn3.src = "./assets/num7Img.png";
    btn3.alt = "mode 3";
    btn3.addEventListener("click", function () {
        GameRoundBtn("4");
    });
    btnsRow.appendChild(btn1);
    btnsRow.appendChild(btn2);
    btnsRow.appendChild(btn3)
    gameSelectionsBtn.appendChild(btnsRow);
}

function GameRoundBtn(gameModeStr) {
    gameLevel = gameModeStr;
    gameSelectionsBtn.removeChild(btnsRow);
    GameBtns();
}

function GameBtns() {
    gameSelectionsBtn.innerHTML = "";
    btnsRow = document.createElement("div");
    btnsRow.id = "playersRow";
    btnsRow.className = "modes";
    let btn1 = document.createElement("img");
    btn1.className = "modeBtn";
    btn1.src = "./assets/rockImg.png";
    btn1.alt = "rock";
    btn1.addEventListener("click", function () {
        GameBtnClick("Rock");
    });
    let btn2 = document.createElement("img");
    btn2.className = "modeBtn";
    btn2.src = "./assets/paperImgg.png";
    btn2.alt = "paper";
    btn2.addEventListener("click", function () {
        GameBtnClick("Paper");
    });
    let btn3 = document.createElement("img");
    btn3.className = "modeBtn";
    btn3.src = "./assets/scissorsImg.png";
    btn3.alt = "scissors";
    btn3.addEventListener("click", function () {
        GameBtnClick("Scissors");
    });
    let btn4 = document.createElement("img");
    btn4.className = "modeBtn";
    btn4.src = "./assets/lizardImg.png";
    btn4.alt = "lizard";
    btn4.addEventListener("click", function () {
        GameBtnClick("Lizard");
    });
    let btn5 = document.createElement("img");
    btn5.className = "modeBtn";
    btn5.src = "./assets/spockImg.png";
    btn5.alt = "spock";
    btn5.addEventListener("click", function () {
        GameBtnClick("Spock");
    });
    btnsRow.appendChild(btn1);
    btnsRow.appendChild(btn2);
    btnsRow.appendChild(btn3);
    btnsRow.appendChild(btn4);
    btnsRow.appendChild(btn5);
    gameSelectionsBtn.appendChild(btnsRow);
}

function GameBtnClick(rpslsStr) {
    if (playerOneInput == "") {
        playerOneInput = rpslsStr;
        PlayerOneClick();
    }
    else {
        playerTwoInput = rpslsStr;
        CheckWinner();
    }
}

function PlayerOneClick() {
    if (userAmount == "singleplayer") {
        urlCall();
    }
    else {
        gameHeader.removeChild(h2);
        ChangeTitle("Player 2 choose");
    }
}

function urlCall() {
    fetch(
        "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption"
    )
        .then((response) => response.text())
        .then((data) => {
            playerTwoInput = data;
            CheckWinner();
        });
}

function CheckWinner() {
    console.log(playerOneInput);
    console.log(playerTwoInput);

    if (
        (playerOneInput == "Rock" && playerTwoInput == "Scissors") ||
        (playerOneInput == "Rock" && playerTwoInput == "Lizard") ||
        (playerOneInput == "Paper" && playerTwoInput == "Rock") ||
        (playerOneInput == "Paper" && playerTwoInput == "Spock") ||
        (playerOneInput == "Scissors" && playerTwoInput == "Paper") ||
        (playerOneInput == "Scissors" && playerTwoInput == "Lizard") ||
        (playerOneInput == "Lizard" && playerTwoInput == "Paper") ||
        (playerOneInput == "Lizard" && playerTwoInput == "Spock") ||
        (playerOneInput == "Spock" && playerTwoInput == "Scissors") ||
        (playerOneInput == "Spock" && playerTwoInput == "Rock")
    ) {
        playerOneScore++;
    }
    else if (playerOneInput == playerTwoInput) {

    }
    else {
        playerTwoScore++;
    }
    console.log(playerOneScore + "\n" + playerTwoScore);
    UpdateScoreBox();
    CreateScoreBox();
    playerOneInput = "";
    playerTwoInput = "";
    CheckGameWinner();
}

function UpdateScoreBox() {
    switch (playerOneScore) {
        case 0:
            scoreOneImg = "./assets/num0.png";
            scoreOneImgAlt = "Zero";
            break;
        case 1:
            scoreOneImg = "./assets/num1.png";
            scoreOneImgAlt = "One";
            break;
        case 2:
            scoreOneImg = "./assets/num2.png";
            scoreOneImgAlt = "Two";
            break;
        case 3:
            scoreOneImg = "./assets/num3.png";
            scoreOneImgAlt = "Three";
            break;
        case 4:
            scoreOneImg = "./assets/num4.png";
            scoreOneImgAlt = "Four";
            break;
    }

    switch (playerTwoScore) {
        case 0:
            scoreTwoImg = "./assets/num0.png";
            scoreTwoImgAlt = "Zero";
            break;
        case 1:
            scoreTwoImg = "./assets/num1.png";
            scoreTwoImgAlt = "One";
            break;
        case 2:
            scoreTwoImg = "./assets/num2.png";
            scoreTwoImgAlt = "Two";
            break;
        case 3:
            scoreTwoImg = "./assets/num3.png";
            scoreTwoImgAlt = "Three";
            break;
        case 4:
            scoreTwoImg = "./assets/num4.png";
            scoreTwoImgAlt = "Four";
            break;
    }
}

function CreateScoreBox() {
    gameScore.innerHTML = "";

    let scoreBox = document.createElement("div");
    scoreBox.className = "scoresBox";
    scoreBox.id = "scoreBox";

    let scoreOneDiv = document.createElement("div");
    scoreOneDiv.className = "playerScore";
    let scoreOneTxt = document.createElement("h3");
    scoreOneTxt.textContent = "Player One";
    let scoreOne = document.createElement("img");
    scoreOne.className = "scoreImg";
    scoreOne.src = scoreOneImg;
    scoreOne.alt = scoreOneImgAlt;

    let scoreTwoDiv = document.createElement("div");
    scoreTwoDiv.className = "playerScore";
    let scoreTwoTxt = document.createElement("h3");
    scoreTwoTxt.textContent = "Player Two";
    let scoreTwo = document.createElement("img");
    scoreTwo.className = "scoreImg";
    scoreTwo.src = scoreTwoImg;
    scoreTwo.alt = scoreTwoImgAlt;

    scoreOneDiv.appendChild(scoreOneTxt);
    scoreOneDiv.appendChild(scoreOne);
    scoreTwoDiv.appendChild(scoreTwoTxt);
    scoreTwoDiv.appendChild(scoreTwo);
    scoreBox.appendChild(scoreOneDiv);
    scoreBox.appendChild(scoreTwoDiv);
    gameScore.appendChild(scoreBox);
}

function CheckGameWinner(){
    if(playerOneScore == gameLevel){
        gameHeader.removeChild(h2);
        gameSelectionsBtn.removeChild(btnsRow);
        playerOneScore = 0;
        playerTwoScore = 0;
        ChangeTitle("Player One Wins");
    }
    else if(playerTwoScore == gameLevel){
        gameHeader.removeChild(h2);
        gameSelectionsBtn.removeChild(btnsRow);
        playerOneScore = 0;
        playerTwoScore = 0;
        ChangeTitle("Player Two Wins");
    }
    else {
        gameHeader.removeChild(h2)
        ChangeTitle("Player One Choose");
    }
}