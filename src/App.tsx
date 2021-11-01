import React, { useEffect, useState } from "react";
import { fetchPokemon } from "./utils";
import { Pokemon } from "./types";

import CardContainer from "./components/CardComponent";

import "./App.css";
import SearchComponent from "./components/SearchComponent";

const App = () => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [pokemonName, setPokemonName] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    fetchPokemon("charmander")
      .then((res) => setPokemon(res))
      .catch((err) => {
        setPokemon(undefined);
      });
  }, []);

  const updateName = (e: React.FormEvent<HTMLInputElement>): void => {
    if (e.currentTarget.value) {
      setPokemonName(e.currentTarget.value);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setIsSearching(true);
    if (pokemonName) {
      await fetchPokemon(pokemonName.toLowerCase())
        .then((res) => setPokemon(res))
        .catch((err) => {
          setPokemon(undefined);
        });
    }
    setIsSearching(false);
  };

  return (
    <div className="div-container">
      <SearchComponent updateName={updateName} handleSubmit={handleSubmit} />
      <div className="card">
        {isSearching ? (
          "Searching... "
        ) : pokemon ? (
          <CardContainer pokemon={pokemon} />
        ) : (
          "Could not find pokemon"
        )}
      </div>
    </div>
  );
};

export default App;
