import { Card } from "../types";

export function Deck({ deck }: { deck: Card[] }) {
  return (
    <div className="border border-solid w-full">
      <span>{deck.length}</span> cards in deck
    </div>
  );
}
