import { BoardProps } from "boardgame.io/react";
import { GameState } from "../Game";
import { Deck } from "./Deck";
import { PlayerArea } from "./PlayerArea";
import { DiscardPile } from "./DiscardPile";
import "./Board.css";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";

export function Board({ G, ctx, moves }: BoardProps<GameState>) {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="board">
        <div className="board__player-areas">
          <PlayerArea player={G.players[(ctx.playOrderPos + 1) % 2]} />
          <PlayerArea player={G.players[ctx.playOrderPos]} />
        </div>

        <div className="flex flex-col gap-4 justify-between">
          <div>3 Water</div>

          <div className="flex gap-4 flex-col">
            <div className="flex gap-4">
              <Deck deck={G.deck} moves={moves} />
              <DiscardPile discardPile={G.discardPile} />
            </div>
            <button
                className="rounded-md bg-indigo-500 py-4 text-white w-full"
                onClick={() => console.log("not supported yet!")}
            >
              End turn
            </button>
          </div>

          <div>3 Water</div>
        </div>
      </div>
    </DndProvider>
  );
}
