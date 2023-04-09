import {CardType, Player} from "../types";
import "./PlayerArea.css";
import {CardContainer} from "./CardContainer";
import {sniper} from "../cards";

export function PlayerArea({player}: { player: Player }) {
  return (
    <div className="flex">
      <div className="player-area border border-solid">
        {Array(3)
          .fill(1)
          .map((_e, index) => {
            return <CardContainer type={CardType.EVENT}/>;
          })}

        {Array(3)
          .fill(1)
          .map((_e, index) => {
            return <CardContainer type={CardType.PERSON} initialCard={sniper}/>;
          })}

        {Array(3)
          .fill(1)
          .map((_e, index) => {
            return <CardContainer type={CardType.PERSON}/>;
          })}

        {Array(3)
          .fill(1)
          .map((_e, index) => {
            return <CardContainer type={CardType.PERSON}/>;
          })}

        {Array(3)
          .fill(1)
          .map((_e, index) => {
            return <CardContainer type={CardType.EVENT}/>;
          })}
      </div>
      <div className="player-hand">
        {player.hand.map((card) => <CardContainer initialCard={card} type={CardType.DECK}/>)}
      </div>
    </div>
  );
}
