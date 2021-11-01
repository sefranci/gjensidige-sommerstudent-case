import { Stat } from "../types";

interface Props {
  stats: Stat[];
}

/**
 *
 * Renders a list of pokemon stats
 */
const StatComponent: React.FunctionComponent<Props> = ({ stats }) => {
  return (
    <div className="stats">
      <b> Stats </b>
      <div className="row">
        {stats.map((stat) => {
          return (
            <div className="col" key={stat.stat.name}>
              ⬥ {stat.stat.name}: {stat.base_stat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatComponent;
