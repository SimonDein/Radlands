import {Card, CardType} from "../types";
import {useDrag} from "react-dnd";


export function Deck({ deck, moves }: { deck: Card[], moves: Record<string, (...args: any[]) => void>; }) {
  const top = deck[deck.length-1];
  const [{opacity}, dragRef] = useDrag(() => (
      {
        type: CardType.DECK,
        item: top,
        collect: (monitor) => ({
          opacity: monitor.isDragging() ? 0.5 : 1
        }),
        end: (item, monitor) => {
          if (monitor.didDrop()) {
            moves.drawCard()
          }
        }
      }
  ))
  return <div ref={dragRef} style={{opacity}}>
    <div className="border border-solid w-full">
      <span>{deck.length}</span> cards in deck
    </div>
  </div>
}