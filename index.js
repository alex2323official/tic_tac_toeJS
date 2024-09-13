// IIFE Module Pattern thingy
const createGameBoard = (function () {
  // PRIVATE
  const GameBoard = [];
  const gameContainerDiv = document.querySelector("#game-container");
  let player1round = true; // X for 1 Player

  const startGameBoard = function () {
    // push starting state to every GameBoard index
    for (let i = 0; i <= 8; i++) {
      GameBoard.push("?");
    }
  };

  const showGameBoard = function () {
    //   loop trough array and create divs for each of one
    GameBoard.forEach((item, index) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = item;
      newDiv.id = index;
      gameContainerDiv.appendChild(newDiv);
    });
  };

  const refreshGameBoard = function () {
    gameContainerDiv.innerHTML = "";
    showGameBoard();
  };

  const scrnUptade = function () {
    gameContainerDiv.addEventListener("click", (item) => {
      let id = item.target.id;
      if (player1round) {
        GameBoard[id] = "X";
        refreshGameBoard();
        checkForVictory();
        player1round = false;
      } else {
        GameBoard[id] = "O";
        refreshGameBoard();
        checkForVictory();
        player1round = true;
      }
    });
  };

  const checkForVictory = function () {
    // check for player1 to win
    if (GameBoard[0] == "X" && GameBoard[1] == "X" && GameBoard[2] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[0] == "X" && GameBoard[4] == "X" && GameBoard[8] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[3] == "X" && GameBoard[4] == "X" && GameBoard[5] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[6] == "X" && GameBoard[7] == "X" && GameBoard[8] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[0] == "X" && GameBoard[3] == "X" && GameBoard[6] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[2] == "X" && GameBoard[5] == "X" && GameBoard[8] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[1] == "X" && GameBoard[4] == "X" && GameBoard[7] == "X") {
      console.log("Player 1 Victory!");
    }

    if (GameBoard[2] == "X" && GameBoard[4] == "X" && GameBoard[6] == "X") {
      console.log("Player 1 Victory!");
    }

    // check for player2 to win
    if (GameBoard[0] == "O" && GameBoard[1] == "O" && GameBoard[2] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[0] == "O" && GameBoard[4] == "O" && GameBoard[8] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[3] == "O" && GameBoard[4] == "O" && GameBoard[5] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[6] == "O" && GameBoard[7] == "O" && GameBoard[8] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[0] == "O" && GameBoard[3] == "O" && GameBoard[6] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[2] == "O" && GameBoard[5] == "O" && GameBoard[8] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[1] == "O" && GameBoard[4] == "O" && GameBoard[7] == "O") {
      console.log("Player 2 Victory!");
    }

    if (GameBoard[2] == "O" && GameBoard[4] == "O" && GameBoard[6] == "O") {
      console.log("Player 2 Victory!");
    }
  };

  // PUBLIC API (returned object)
  return {
    // public variables
    name: "test",

    // public methods
    startUI: function () {
      startGameBoard();
      showGameBoard();
    },
    runScrnUpdate: function () {
      scrnUptade();
    },
  };
})();

// TESTING HERE
createGameBoard.startUI();
createGameBoard.runScrnUpdate();
