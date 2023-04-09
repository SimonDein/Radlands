import {Card} from "../types";
import {useDrag} from "react-dnd";
import "./CardComponent.css";

export function CardComponent({card}: { card: Card }) {
  const [{opacity}, dragRef] = useDrag(() => (
    {
      type: card.type,
      item: card,
      collect: (monitor) => (
        {
          opacity: monitor.isDragging() ? 0.5 : 1
        }
      ),
      end: (item, monitor) => {
        if (monitor.didDrop()){
          console.log("We did drop it, now we have to delete it from where it was originally");
        }
      }

    }
  ))
  return <div ref={dragRef} style={{opacity}} className="card__component">
    <div>
      {card.name}
    </div>
  </div>
}