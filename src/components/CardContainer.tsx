import {useDrop} from "react-dnd";
import {useState} from "react";
import {CardComponent} from "./CardComponent";
import {Card, CardType} from "../types";
import "./CardContainer.css";

export function CardContainer({type, initialCard} : {type: CardType, initialCard?: Card}) {
    const [,drop] = useDrop(() => ({
        accept: type,
        canDrop: () => {
            //check stuff here, might not be needed if accept does what I suspect
            //then this card component can say it is EVENT and then only EVENT can be dropped
            return true
        },
        drop: (card, monitor) =>{
            //do a boardgameIO move instead of setState?
            if (card) {
                setCard(card as Card);
            }
        }
        })
    )

    //this should be done through a BoardgameIO move instead of setState?
    const [card, setCard] = useState(initialCard);

    return <div ref={drop} className="card__container border border-solid">
        {card ? <CardComponent card={card}/> : <>{type}</>}
    </div>
}