import { Move } from "../types";

interface Props {
  moves: Move[];
}

/**
 *
 * Renders a list of pokemon moves. Renders a maximum of 10 moves.
 */
const MoveComponent: React.FunctionComponent<Props> = ({ moves }) => {
  return (
    <div className="moves">
      <b> Moves </b>
      <div className="row">
        {moves.slice(0, 10).map((move) => {
          return (
            <div className="col" key={move.move.name}>
              ⬥{move.move.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoveComponent;
