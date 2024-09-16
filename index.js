// IIFE Module Pattern thingy
const createGameBoard = (function () {
  // PRIVATE
  // let GameBoard = [];
  // const gameContainerDiv = document.querySelector("#game-container");
  const formBtn = document.querySelector("#formBtn");
  const player1NameDiv = document.querySelector("#player1");
  const player2NameDiv = document.querySelector("#player2");
  const form = document.querySelector(".form");
  let player1round = true; // X for 1 Player
  let username1 = "Player 1";
  let username2 = "Player 2";
  let player1Score = 0;
  let player2Score = 0;
  let roundCounter = 0;

  // const startGameBoard = function () {
  //   // clean old GambeBoard
  //   GameBoard = [];
  //   // push starting state to every GameBoard index
  //   for (let i = 0; i <= 8; i++) {
  //     GameBoard.push("?");
  //   }
  // };

  // const showGameBoard = function () {
  //   //   loop trough array and create divs for each of one
  //   GameBoard.forEach((item, index) => {
  //     const newDiv = document.createElement("div");
  //     newDiv.textContent = item;
  //     newDiv.id = index;
  //     gameContainerDiv.appendChild(newDiv);
  //   });
  // };

  const refreshGameBoard = function () {
    gameContainerDiv.innerHTML = "";
    showGameBoard();
  };

  const scrnUptade = function () {
    gameContainerDiv.addEventListener("click", (item) => {
      let id = item.target.id;
      if (player1round && GameBoard[id] != "X" && GameBoard[id] != "O") {
        GameBoard[id] = "X";
        refreshGameBoard();
        checkForVictory();
        updateUserName();
        player1round = false;
      } else if (
        !player1round &&
        GameBoard[id] != "X" &&
        GameBoard[id] != "O"
      ) {
        GameBoard[id] = "O";
        refreshGameBoard();
        checkForVictory();
        updateUserName();
        player1round = true;
      }

      roundCounter++;
      console.log(roundCounter);

      // check for 9 rounds without win
      if (roundCounter >= 9) {
        startGameBoard();
        refreshGameBoard();
        roundCounter = 0;
      }
    });
  };

  const checkForVictory = function () {
    // check for player1 to win
    if (GameBoard[0] == "X" && GameBoard[1] == "X" && GameBoard[2] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[0] == "X" && GameBoard[4] == "X" && GameBoard[8] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[3] == "X" && GameBoard[4] == "X" && GameBoard[5] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[6] == "X" && GameBoard[7] == "X" && GameBoard[8] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[0] == "X" && GameBoard[3] == "X" && GameBoard[6] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[2] == "X" && GameBoard[5] == "X" && GameBoard[8] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[1] == "X" && GameBoard[4] == "X" && GameBoard[7] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[2] == "X" && GameBoard[4] == "X" && GameBoard[6] == "X") {
      player1Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    // check for player2 to win
    if (GameBoard[0] == "O" && GameBoard[1] == "O" && GameBoard[2] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[0] == "O" && GameBoard[4] == "O" && GameBoard[8] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[3] == "O" && GameBoard[4] == "O" && GameBoard[5] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[6] == "O" && GameBoard[7] == "O" && GameBoard[8] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[0] == "O" && GameBoard[3] == "O" && GameBoard[6] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[2] == "O" && GameBoard[5] == "O" && GameBoard[8] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[1] == "O" && GameBoard[4] == "O" && GameBoard[7] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }

    if (GameBoard[2] == "O" && GameBoard[4] == "O" && GameBoard[6] == "O") {
      player2Score++;
      startGameBoard();
      refreshGameBoard();
      roundCounter = 0;
    }
  };

  const changeUserNamesOnClick = function () {
    formBtn.addEventListener("click", (item) => {
      // TODO: take input and use updateUserName()
      let tempUsername1 = document.querySelector("#name1").value;
      let tempUsername2 = document.querySelector("#name2").value;

      if (tempUsername1 != "" && tempUsername2 == "") {
        username1 = tempUsername1;
      }

      if (tempUsername1 == "" && tempUsername2 != "") {
        username2 = tempUsername2;
      }

      if (tempUsername1 != "" && tempUsername2 != "") {
        username1 = tempUsername1;
        username2 = tempUsername2;
        form.innerHTML = "";
        form.style.backgroundColor = "white";
      }

      updateUserName();
    });
  };

  const updateUserName = function () {
    player1NameDiv.textContent = `${username1} score: ${player1Score}`;
    player2NameDiv.textContent = `${username2} score: ${player2Score}`;
  };

  // PUBLIC API (returned object)
  return {
    // public variables
    name: "test",

    // public methods
    startUI: function () {
      updateUserName();
      startGameBoard();
      showGameBoard();
    },
    runScrnUpdate: function () {
      scrnUptade();
    },
    runChangeUsermanUpdate: function () {
      changeUserNamesOnClick();
    },
  };
})();

// TESTING HERE
createGameBoard.startUI();
createGameBoard.runScrnUpdate();
createGameBoard.runChangeUsermanUpdate();
