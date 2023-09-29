const NavBar = ({ pokemonList, handlePokemonChange }) => {
  console.log(pokemonList);
  return (
    <nav>
      {pokemonList.map((pokemon, index) => {
        return (
          <button onClick={handlePokemonChange} value={index} key={index}>
            {pokemon.name}
          </button>
        );
      })}
    </nav>
  );
};

export default NavBar;
