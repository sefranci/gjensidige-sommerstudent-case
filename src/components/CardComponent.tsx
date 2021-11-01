import React from "react";
import { Pokemon } from "../types";
import "./CardComponent.css";
import InfoComponent from "./InfoComponent";

interface Props {
  pokemon?: Pokemon;
}

/**
 *
 * Renders a pokemon card.
 */
const CardComponent: React.FunctionComponent<Props> = ({ pokemon }) => {
  if (pokemon) {
    let typeString: string = "";
    for (var i = 0; i < pokemon.types.length; i++) {
      typeString += pokemon.types[i].type.name + "/";
    }
    typeString = typeString.slice(0, -1);
    return (
      <>
        <div className={`card-outer-container`}>
          <div className={`card-inner-container ${pokemon.types[0].type.name}`}>
            <div className={`image-container ${pokemon.types[0].type.name}`}>
              <p>
                {pokemon.name.substring(0, 1).toUpperCase() +
                  pokemon.name.substring(1) +
                  " "}
                [{typeString}]
              </p>
              <div className="image">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`${pokemon.name} illustration`}
                />
              </div>
              <p>
                NO: {pokemon.id}. HT: {pokemon.height}. WT: {pokemon.weight}{" "}
              </p>
            </div>
            <InfoComponent pokemon={pokemon} />
          </div>
        </div>
      </>
    );
  }
  return null;
};
export default CardComponent;
