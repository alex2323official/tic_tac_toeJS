import { GameBoard } from "./Javascript/GameBoard.js";
import { Player } from "./Javascript/Player.js";
import { GameFlow } from "./Javascript/GameFlow.js";

const GameBoardInstance = GameBoard();
const PlayerInstance = Player();
const GameFlowInstance = GameFlow();

// App
GameBoardInstance.startGameBoard();
GameBoardInstance.showGameBoard();
PlayerInstance.changeUserNamesOnClick();
