import { Card } from "../types";

export function DiscardPile({ discardPile }: { discardPile: Card[] }) {
  return (
    <div className="border border-solid w-full h-40">
      {discardPile.length} cards in discard pile
    </div>
  );
}
