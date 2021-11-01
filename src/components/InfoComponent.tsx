import { Pokemon } from "../types";
import AbilityComponent from "./AbilityComponent";
import StatComponent from "./StatComponent";
import "./InfoComponent.css";
import MoveComponent from "./MoveComponent";

interface Props {
  pokemon: Pokemon;
}

/**
 *
 * Renders several different aspects of a pokemon.
 */
const InfoComponent: React.FunctionComponent<Props> = ({ pokemon }) => {
  return (
    <div className="info-container">
      <hr />
      <StatComponent stats={pokemon.stats} />
      <hr />
      <AbilityComponent abilities={pokemon.abilities} />
      <hr />
      <MoveComponent moves={pokemon.moves} />
    </div>
  );
};

export default InfoComponent;
