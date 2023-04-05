// Game.ts
import type { Ctx, Game, Move } from "boardgame.io";
import { Ability, Camp, Card, Person, Player } from "./types";
import { sniper } from "./cards";

// The game state passed to any handlers
export interface GameState {
  players: Player[];
  deck: Card[];
  discardPile: Card[];
}

function setupPlayer(first?: boolean): Player {
  return {
    hand: [],
    people: [[], [], []],
    camps: [],
    eventQueue: [],
    remainingWater: first ? 1 : 3,
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
      players: [setupPlayer(true), setupPlayer()],
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
    useAbility: (
      { G, ctx, playerID },
      attacker: Person | Camp,
      ability: Ability,
      target: string
    ) => {
      //check that they have the cost
      const player = getPlayer(G, ctx);
      handlePayment(player, ability.waterCost);
      //how is the target selected?
      //is it a valid target?

      //complete the effect

      //after effects
      attacker.isReady = false;
    },
  },
};

function getPlayer(G: GameState, ctx: Ctx) {
  return G.players[ctx.playOrderPos];
}

function getOpponent(G: GameState, ctx: Ctx) {
  return G.players[ctx.playOrderPos + 1];
}

function handlePayment(player: Player, cost: number): boolean {
  if (player.remainingWater < cost) {
    return false;
  } else {
    player.remainingWater -= cost;
    return true;
  }
}
