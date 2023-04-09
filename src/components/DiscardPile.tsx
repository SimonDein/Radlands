import {Card, CardType} from "../types";
import {useDrop} from "react-dnd";

export function DiscardPile({ discardPile }: { discardPile: Card[] }) {
  const [, drop] = useDrop(() => ({
    accept: [CardType.PUNK, CardType.PERSON, CardType.EVENT, CardType.DECK],
    canDrop: () => {
      //check that they are coming from the hand only?
      return true
    },
    drop: (card, ...rest) => {
      console.log("discarded card: ", card);
      if (card) {
        //moves.discardCard();
        //I would assume we do this through a move, instead of setState
      }
    }
  }))

  return (
    <div ref={drop}>
      <div className="border border-solid w-full h-40">
        {discardPile.length} cards in discard pile
      </div>
    </div>
  );
}