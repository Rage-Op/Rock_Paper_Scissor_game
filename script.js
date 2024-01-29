//Wait for the page to load fully before execution
window.onload = function () {
  // Initialize
  let choices = document.querySelectorAll(".choice");
  let playerScoreBoard = document.querySelector("#player-score");
  let computerScoreBoard = document.querySelector("#computer-score");
  let rock = document.querySelector("#stone");
  let paper = document.querySelector("#paper");
  let scissor = document.querySelector("#scissor");
  let mssg = document.querySelector("#mssg");
  let cStone = document.querySelector("#computer-stone");
  let cPaper = document.querySelector("#computer-paper");
  let cScissor = document.querySelector("#computer-scissor");
  let dynamicTheme = document.querySelectorAll(".dynamic-theme");
  let themeButton = document.querySelector("#nav-button1");
  let tutorialButton = document.querySelector("#nav-button2");
  let howTo = document.querySelector("#how-to");
  let tutorialHeaderButton = document.querySelector("#tutorial-header-button");
  let overlay = document.querySelector("#overlay");
  const player = document.querySelector("dotlottie-player");

  // For lottie Animation
  function playOnce() {
    player.play();

    player.addEventListener("complete", () => {
      player.stop();
    });
  }

  // Game logic variables
  let computerDraw = "empty";
  let userDraw = "empty";
  let computerDefeatsPlayer = false;
  let gameDraw = false;
  let playerScore = 0;
  let computerScore = 0;
  let isDarkTheme = false;
  let showTutorial = false;

  // Change Theme function
  themeButton.addEventListener("click", () => {
    isDarkTheme = !isDarkTheme;
    if (isDarkTheme == true) {
      dynamicTheme.forEach((toChange) => {
        toChange.classList.add("dark-theme");
        themeButton.innerHTML =
          '<i class="fa-solid fa-sun nav-icons" style="color: #ffffff;"></i>';
      });
    } else {
      dynamicTheme.forEach((toChange) => {
        toChange.classList.remove("dark-theme");
        themeButton.innerHTML =
          '<i class="fa-solid fa-moon nav-icons" style="color: #ffffff"></i>';
      });
    }
  });

  // Show tutorial button
  tutorialButton.addEventListener("click", () => {
    showTutorial == true;
    howTo.classList.remove("hide-tutorial");
    overlay.classList.remove("hide-tutorial");
  });
  tutorialHeaderButton.addEventListener("click", () => {
    showTutorial == false;
    howTo.classList.add("hide-tutorial");
    overlay.classList.add("hide-tutorial");
  });
  overlay.addEventListener("click", () => {
    showTutorial == false;
    howTo.classList.add("hide-tutorial");
    overlay.classList.add("hide-tutorial");
  });

  // Computer draw generate
  function resultCheck(choice) {
    var chosen = choice;
    gameDraw = false;
    let valueDraw = Math.floor(Math.random() * 100 + 1);
    if (valueDraw > 0 && valueDraw < 33.3) {
      computerDraw = "rock";
      cStone.classList.remove("hide");
      console.log(valueDraw, computerDraw);
    } else if (valueDraw > 33.3 && valueDraw < 66.6) {
      computerDraw = "paper";
      cPaper.classList.remove("hide");
      console.log(valueDraw, computerDraw);
    } else {
      computerDraw = "scissor";
      cScissor.classList.remove("hide");
      console.log(valueDraw, computerDraw);
    }
    console.log("computerDraw:" + computerDraw);
    console.log("resultCheck func called sucesfully");
    whoWins(chosen);
  }

  //   Winner decide
  const whoWins = (chosen) => {
    if (computerDraw == "rock" && chosen == "scissor") {
      console.log("computer wins");
      computerDefeatsPlayer = true;
      computerScore += 1;
    } else if (computerDraw == "paper" && chosen == "rock") {
      console.log("computer wins");
      computerDefeatsPlayer = true;
      computerScore += 1;
    } else if (computerDraw == "scissor" && chosen == "paper") {
      console.log("computer wins");
      computerDefeatsPlayer = true;
      computerScore += 1;
    } else if (computerDraw == chosen) {
      gameDraw = true;
    } else {
      console.log("player wins");
      computerDefeatsPlayer = false;
      playOnce();
      playerScore += 1;
      console.log("computerDefeatsPlayer" + computerDefeatsPlayer);
    }
    displayWinner(gameDraw);
    console.log(computerScore);
    playerScoreBoard.innerText = playerScore;
    computerScoreBoard.innerText = computerScore;
  };

  console.log(computerDraw);

  //   Announce the winner
  const displayWinner = (gameDraw) => {
    if (computerDefeatsPlayer == true && gameDraw == false) {
      mssg.innerText = "Nice try but AI wins 😈";
      console.log("AI says:" + mssg.innerText);
    } else if (gameDraw == true) {
      mssg.innerText = "Draw 😑";
      console.log("AI says:" + mssg.innerText);
    } else {
      mssg.innerText = "You win 😒";
      console.log("AI says:" + mssg.innerText);
    }
  };

  //   Event listener for user choices
  rock.addEventListener("click", () => {
    console.log("userChoice is rock");
    userDraw = "rock";
    cStone.classList.add("hide");
    cPaper.classList.add("hide");
    cScissor.classList.add("hide");
    resultCheck(userDraw);
  });

  paper.addEventListener("click", () => {
    console.log("userChoice is paper");
    userDraw = "paper";
    cStone.classList.add("hide");
    cPaper.classList.add("hide");
    cScissor.classList.add("hide");
    resultCheck(userDraw);
  });

  scissor.addEventListener("click", () => {
    console.log("userChoice is scissor");
    userDraw = "scissor";
    cStone.classList.add("hide");
    cPaper.classList.add("hide");
    cScissor.classList.add("hide");
    resultCheck(userDraw);
  });
};
// END
