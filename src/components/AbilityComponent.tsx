import { Ability } from "../types";

interface Props {
  abilities: Ability[];
}

/**
 *
 * Renders a list of pokemon abilities.
 */
const AbilityComponent: React.FunctionComponent<Props> = ({ abilities }) => {
  return (
    <div className="abilities">
      <b> Abilities </b>
      <div className="row">
        {abilities.map((ability) => {
          return (
            <div className="col" key={ability.ability.name}>
              ⬥ {ability.ability.name}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AbilityComponent;
