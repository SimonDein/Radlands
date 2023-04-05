export interface Player {
  hand: Card[];
  people: (Person | Punk)[][];
  camps: Card[];
  eventQueue: Event[];
  remainingWater: number;
  isWaterSiloAvailable: boolean;
  isRaidersAvailable: boolean;
}

export enum CardType {
  PERSON,
  EVENT,
  CAMP,
  PUNK,
}

export enum Effect {
  RAID = "Raid",
  DAMAGE = "Damage",
  DESTROY = "Destroy",
  INJURE = "Injure",
  DRAW_CARD = "Draw card",
  RESTORE = "Restore",
  GAIN_WATER = "Gain water",
  GAIN_PUNK = "Gain punk",
}

export enum EventEffect {}

export interface Ability {
  waterCost: number;
  effect: Effect;
}

export interface Card {
  type: CardType;
  name: string;
  imageURL?: string;
}

export interface Person extends Card {
  abilities: Ability[];
  isReady: boolean;
  isInjured: boolean;
  junkEffect: Effect;
  traits: [];
  waterCost: number;
}

export interface Punk extends Card {
  // Just an empty interface to typing
}

export interface Event extends Card {
  effect: EventEffect;
  junkEffect: Effect;
  time: number; // which place it's played in queue
  waterCost: number;
}

export interface Camp extends Card {
  abilities: Ability[];
  isDestroyed: boolean;
  isReady: boolean;
  isInjured: boolean;
}
