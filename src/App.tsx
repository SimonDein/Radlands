import { Client } from "boardgame.io/react";
import { Board } from "./components/Board";
import { Radlands } from "./Game";

export default Client({ game: Radlands, board: Board });
