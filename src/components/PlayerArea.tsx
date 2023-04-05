import { Player } from "../types";
import "./PlayerArea.css";

export function PlayerArea({ player }: { player: Player }) {
  return (
    <div className="player-area border border-solid">
      {Array(3)
        .fill(1)
        .map((_e, index) => {
          return <div className="border border-solid"></div>;
        })}

      {Array(3)
        .fill(1)
        .map((_e, index) => {
          return <div className="border border-solid"></div>;
        })}

      {Array(3)
        .fill(1)
        .map((_e, index) => {
          return <div className="border border-solid"></div>;
        })}

      {Array(3)
        .fill(1)
        .map((_e, index) => {
          return <div className="border border-solid"></div>;
        })}

      {Array(3)
        .fill(1)
        .map((_e, index) => {
          return <div className="border border-solid"></div>;
        })}
    </div>
  );
}
