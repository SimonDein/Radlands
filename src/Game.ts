// Game.ts
import type { Game, Move } from "boardgame.io";
import {Card, Player} from "./types";

// The game state passed to any handlers
export interface GameState {
  players: Player[]
  deck: Card[];
  discardPile: Card[];
}

function setupPlayer(): Player {
  return {
    hand: [],
    people: [[], [], []],
    camps: [],
    eventQueue: [],
    remainingWater: 3,
    isRaidersAvailable: true,
    isWaterSiloAvailable: true
  }
}


export const Radlands: Game<GameState> = {
  setup: function() {
    return {
      players: [setupPlayer(), setupPlayer()],
      deck: [],
      discardPile: [],
    }
  },
  moves: {
    drawCard: ({G, playerId}, id) => {
      //
    }
  }
};