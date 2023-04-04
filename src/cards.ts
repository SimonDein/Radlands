import {Camp, CardType, Effect, Person} from "./types";

import sniperImgUrl from './assets/sniper.png';
import constructionCampUrl from './assets/contruction-yard.png';

export const sniper: Person = {
  name: "Sniper",
  imageURL: sniperImgUrl,
  waterCost: 0,
  junkEffect: Effect.INJURE,
  type: CardType.PERSON,
  abilities: [{
    waterCost: 2,
    effect: Effect.DAMAGE
  }],
  traits: [],
  isInjured: false,
  isReady: false,
};

export const constructionYard: Camp = {
  abilities: [],
  name: "Construction Yard",
  imageURL: constructionCampUrl,
  type: CardType.CAMP,
  isInjured: false,
  isReady: false,
  isDestroyed: false,
}

