import React from "react";
import charmanderImage from "../assets/Charmander.png";
import charmeleonImage from "../assets/Charmeleon.png";

function ImgPoke({ contador }) {
  const imagenPokemon = contador >= 16 ? charmeleonImage : charmanderImage;

  return (
    <img src={imagenPokemon} alt="Imagen del Pokémon" className="mx-auto my-4" />
  );
}

export default ImgPoke;
