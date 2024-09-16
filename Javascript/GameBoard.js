// GameBoard
export function GameBoard() {
  // private here
  let GameBoard = [];
  const gameContainerDiv = document.querySelector("#game-container");

  // public here
  return {
    test: "test",
    startGameBoard: function () {
      // clean old GameBoard
      GameBoard = [];
      // push starting state to every GameBoard index
      for (let i = 0; i <= 8; i++) {
        GameBoard.push("?");
      }
    },
    showGameBoard: function () {
      // loop trough array and create divs for each of one
      GameBoard.forEach((item, index) => {
        const newDiv = document.createElement("div");
        newDiv.textContent = item;
        newDiv.id = index;
        gameContainerDiv.appendChild(newDiv);
      });
    },
  };
}
