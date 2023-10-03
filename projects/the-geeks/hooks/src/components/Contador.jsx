import React, { useState, useEffect, useRef } from "react";
import ImgPoke from "./ImgPoke";

function Contador() {
  const [contador, setContador] = useState(1);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (contador === 16) {
      alert("¡El Pokémon está evolucionando!");
      if (buttonRef.current) {
        buttonRef.current.disabled = true;
      }
    }
  }, [contador]);

  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="bg-blue-200 rounded-lg shadow-lg p-4 mb-4">
      <div className="mb-4">
        <h1 className="text-2xl font-semibold text-blue-800 mb-2">Contador</h1>
        <p className="text-gray-700">Nivel del Pokémon: {contador}</p>
      </div>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
          onClick={aumentarContador}
          ref={buttonRef}
        >
          Subir de Nivel
        </button>
      </div>
      <div>
        <ImgPoke contador={contador} />
      </div>
    </div>
  );
}

export default Contador;
