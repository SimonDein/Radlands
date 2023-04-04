import { Client } from 'boardgame.io/react';
import { Board } from './Board';
import {Radlands} from "./Game";

export default Client({ game: Radlands, board: Board });
