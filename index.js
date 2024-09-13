// IIFE Module Pattern thingy
const createGameBoard = (function () {
  // PRIVATE
  const GameBoard = [];
  const gameContainerDiv = document.querySelector("#game-container");
  const player1round = true; // X Player

  const startGameBoard = function () {
    // push starting state to every GameBoard index
    for (let i = 0; i <= 8; i++) {
      GameBoard.push("?");
    }
  };

  const showGameBoard = function () {
    startGameBoard();

    //   loop trough array and create divs for each of one
    GameBoard.forEach((item, index) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = item;
      newDiv.id = index;
      gameContainerDiv.appendChild(newDiv);
    });
  };

  const scrnUptade = function () {
    gameContainerDiv.addEventListener("click", (item) => {
      console.log(item.target.id);
      if (player1round) {
      }
    });
  };

  // PUBLIC API (returned object)
  return {
    // public variables
    name: "test",

    // public methods
    startUI: function () {
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
