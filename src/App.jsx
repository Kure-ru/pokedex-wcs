import PokemonCard from "./components/PokemonCard";
import "./App.css";
import NavBar from "./components/NavBar";
import { useState } from "react";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleNext = () => {
    setPokemonIndex(pokemonIndex + 1);
  };
  const handlePrevious = () => {
    setPokemonIndex(pokemonIndex - 1);
  };

  const showPrevious = pokemonIndex > 0;
  const showNext = pokemonIndex < pokemonList.length - 1;

  return (
    <>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar
        handleNext={handleNext}
        handlePrevious={handlePrevious}
        showPrevious={showPrevious}
        showNext={showNext}
      />
    </>
  );
}

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];

export default App;
