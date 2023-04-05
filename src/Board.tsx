import { BoardProps } from "boardgame.io/react";
import { GameState } from "./Game";
import { Deck } from "./components/Deck";
import { PlayerArea } from "./components/PlayerArea";
import { DiscardPile } from "./components/DiscardPile";

export function Board({ G, ctx, moves }: BoardProps<GameState>) {
  return (
    <div className="flex flex-col h-full justify-between">
      <PlayerArea />

      <div className="flex">
        <Deck />
        <DiscardPile />
      </div>

      <PlayerArea />
    </div>
  );
}
