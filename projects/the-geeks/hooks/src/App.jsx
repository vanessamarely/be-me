import { useState, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const [contador, cambiarContador] = useState(0); 
  const nombre = useRef("Mariana");
  const cuentaRenderizado = useRef(0);

  useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }

    console.log(`El contador se actualizó. El nuevo número es ${contador}`);
  }, [contador]);

  const cambiarNombre = () => {
    nombre.current = "Juangui";
    console.log(`Tu nuevo nombre es ${nombre.current}`);
  };

  return (
    <div className="bg-rose-300 min-h-screen items-center  flex justify-center">
      <div className="bg-white rounded-xl p-5">
        <h1 className="text-3xl font-bold mb-4">Clase de Hooks</h1>
        <p>
          Los hooks en React son funciones especiales que te permiten "enganchar"
          o acceder a características de React en componentes de función. Antes de
          la introducción de hooks, las características de React, como el estado o
          el ciclo de vida, solo estaban disponibles en componentes de clase. Los
          hooks permiten que los componentes de función tengan estas
          características, lo que hace que el código sea más reutilizable y fácil
          de entender.
        </p>

       <strong><h2 className="text-1xl mt-4">Algunos de los hooks más comunes son:</h2></strong> 
        <br />
        <ul className="list-disc pl-6">
          <li>
            <p className="mb-2">
              <strong>useState:</strong> Permite agregar estado a componentes de función, lo
              que permite que los componentes gestionen su propio estado interno.
            </p>
          </li>
          <li>
            <p className="mb-2">
              <strong>useEffect:</strong> Se utiliza para realizar efectos secundarios en componentes
              de función, como hacer llamadas a API, suscripciones a eventos o
              manipulación del DOM, después de que el componente se renderice.
            </p>
          </li>
          <li>
            <p className="mb-2">
              <strong>useRef:</strong> Permite crear y acceder a referencias a elementos DOM en componentes 
              de función, lo que es útil para realizar tareas como enfoque de elementos y medición de elementos. 
              Cuando usamos useRef, nos proporciona algo parecido a un contenedor que puede almacenar un valor. 
              Este contenedor tiene una propiedad especial llamada .current.
            </p>
          </li>
        </ul>

        <div className="mt-6">
          <p className="mb-2">Contador: {contador}</p>
          <button
            className="bg-rose-300 text-white px-4 py-2 rounded"
            onClick={() => cambiarContador(contador + 1)}
          >
            Añadir 1
          </button>
        </div>

        <div className="mt-4">
          <h1 className="mb-2">Nombre: {nombre.current}</h1>
          <button
            className="bg-rose-300 text-white px-4 py-2 rounded"
            onClick={cambiarNombre}
          >
            Cambiar Nombre
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
