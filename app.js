var objectArray = ["Rock", "Paper", "Scissors"];

var playerScore = 0;

var computerScore = 0;

var gameStarted = false;


function rockVictory() {
  document.querySelector(".description").textContent = "Rock blunts Scissors";
  console.log("Rock blunts Scissors");
};

function scissorsVictory() {
  document.querySelector(".description").textContent = "Scissors cuts Paper";
  console.log("Scissors cuts Paper");
};

function paperVictory() {
  document.querySelector(".description").textContent = "Paper wraps Rock";
  console.log("Paper wraps Rock");
};

function playerWin() {
  document.querySelector(".outcome").textContent = "You Win!";
  document.querySelector(".outcome").style.color = "lightgreen";
  console.log("You Win!");
  playerScore++;
  document.querySelector(".player-score").textContent = "Player: " + playerScore;
};

function computerWin() {
  document.querySelector(".outcome").textContent = "You Lose!";
  document.querySelector(".outcome").style.color = "red";
  console.log("You Lose!");
  computerScore++;
  document.querySelector(".computer-score").textContent = "Computer " + computerScore;
  if (computerScore >= 3) {
    gameStarted === false;
    console.log("Hi");
  };
};

function gameText() {

};





document.querySelector(".start-button").addEventListener("click", startGame);

  function startGame() {
      document.querySelector(".start-button").classList.add("activated-button");
      document.querySelector(".start-button").textContent = "GAME STARTED";
      runGame();
    };


function runGame() {


for (var i = 0; i < document.querySelectorAll(".game-button").length; i++)  {


document.querySelectorAll(".game-button")[i].addEventListener("click", function (){

  var yourTurn = this.classList[1];

  function animateButton() {
    var pressedButton = document.querySelector("." + yourTurn);
    pressedButton.style.background = "gold";
    setTimeout(function() {
      pressedButton.style.background = "darkgray";
    }, 500);
  };

  animateButton();

  document.querySelector(".your-move").textContent = "You played " + yourTurn;
  console.log("You played " + yourTurn);
  computerTurn();

  function computerTurn () {
    var computerNumber = Math.floor(Math.random() * 3);

    var computerMove = objectArray[computerNumber];

    document.querySelector(".computer-move").textContent = "Computer played " + computerMove;
    console.log("Computer played " + computerMove);

    switch (computerMove + yourTurn)  {
      case "ScissorsPaper":
        scissorsVictory();
        computerWin();
        break;
      case "RockScissors":
        rockVictory();
        computerWin();
        break;
      case "PaperRock":
        paperVictory();
        computerWin();
        break;
      case "PaperScissors":
        scissorsVictory();
        playerWin();
        break;
      case "ScissorsRock":
        rockVictory();
        playerWin();
        break;
      case "RockPaper":
        paperVictory();
        playerWin();
        break;
    }


    if (computerMove === yourTurn) {
      document.querySelector(".your-move").textContent = "You played " + yourTurn;
      document.querySelector(".computer-move").textContent = "Computer played " + computerMove;
      document.querySelector(".description").textContent = "You both played " + yourTurn + "!";
      document.querySelector(".outcome").textContent = "It's a Draw!";
      document.querySelector(".outcome").style.color = "white";
      console.log("You both played " + yourTurn);
      console.log("It's a Draw!");
    }


  };

});
};


};



//
// else if (computerMove === "Scissors" && yourTurn === "Paper"){
//   scissorsVictory();
//   computerWin();
// }
//
// else if (computerMove === "Rock" && yourTurn === "Scissors"){
//   rockVictory();
//   computerWin();
// }
//
// else if (computerMove === "Paper" && yourTurn === "Rock"){
//   paperVictory();
//   computerWin();
// }
//
// else if (computerMove === "Paper" && yourTurn === "Scissors"){
//   scissorsVictory();
//   playerWin();
// }
//
// else if (computerMove === "Scissors" && yourTurn === "Rock"){
//   rockVictory();
//   playerWin();
// }
//
// else if (computerMove === "Rock" && yourTurn === "Paper"){
//   paperVictory();
//   playerWin();
// }
