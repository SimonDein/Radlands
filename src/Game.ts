// Game.ts
import type { Game, Move } from "boardgame.io";
import { Card, Player } from "./types";
import { sniper } from "./cards";

// The game state passed to any handlers
export interface GameState {
  players: Player[];
  deck: Card[];
  discardPile: Card[];
}

function setupPlayer(): Player {
  return {
    hand: [sniper, sniper],
    people: [[], [], []],
    camps: [],
    eventQueue: [],
    remainingWater: 3,
    isRaidersAvailable: true,
    isWaterSiloAvailable: true,
  };
}

function setupDeck(): Card[] {
  return Array(60).fill(sniper);
}

export const Radlands: Game<GameState> = {
  setup: function () {
    return {
      players: [setupPlayer(), setupPlayer()],
      deck: setupDeck(),
      discardPile: [],
    };
  },
  moves: {
    drawCard: ({ G, playerId, ctx, events }) => {
      const currentPlayer = G.players[ctx.playOrderPos];
      const drawedCard = G.deck.pop();

      if (drawedCard == undefined) {
        G.deck = setupDeck();
      } else {
        currentPlayer.hand.push(drawedCard);
      }
    },
    reShuffle: ({ G, playerId, ctx }, id) => {
      G.deck = setupDeck();
    },
  },
};
