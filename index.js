// IIFE Module Pattern thingy
const createGameBoard = (function () {
  // PRIVATE
  const GameBoard = [];
  const gameContainerDiv = document.querySelector("#game-container");

  const startGameBoard = function () {
    // push starting state to every GameBoard index
    for (let i = 0; i <= 8; i++) {
      GameBoard.push("?");
    }
  };

  // PUBLIC API (returned object)
  return {
    // public variables
    name: "test",

    // public methods
    showGameBoard: function () {
      startGameBoard();

      //   loop trough array and create divs for each of one
      GameBoard.forEach((item, index) => {
        const newDiv = document.createElement("div");
        newDiv.textContent = item;
        newDiv.id = `gameField${index}`;
        gameContainerDiv.appendChild(newDiv);
      });
    },
  };
})();

// TESTING HERE
createGameBoard.showGameBoard();
