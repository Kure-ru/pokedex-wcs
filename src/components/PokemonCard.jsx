function PokemonCard(props) {
  const { name, imgSrc } = props.pokemon;

  return (
    <figure>
      {imgSrc ? <img src={imgSrc} alt="" /> : <p>???</p>}
      <figcaption>{name}</figcaption>
    </figure>
  );
}

export default PokemonCard;
