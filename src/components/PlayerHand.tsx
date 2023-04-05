import { Card } from "../types";

export function PlayerHand({ hand }: { hand: Card[] }) {
  return (
    <div>
      {hand.map((card) => (
        <p>{card.name}</p>
      ))}
    </div>
  );
}
