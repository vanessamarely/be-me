import React from "react";
import "./index.css";
import Contador from "./components/Contador";

function App() {
  return (
    <>
      <header className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4">
        <h1 className="text-4xl font-extrabold text-white">
          ¿Qué son los Hooks en React?
        </h1>
      </header>

      <main className="bg-gray-100 min-h-screen p-8">
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-800 mb-4">
            Los hooks en React son funciones especiales que te permiten
            "enganchar" o acceder a características de React en componentes de
            función. Antes de la introducción de hooks, las características de
            React, como el estado o el ciclo de vida, solo estaban disponibles
            en componentes de clase. Los hooks permiten que los componentes de
            función tengan estas características, lo que hace que el código sea
            más reutilizable y fácil de entender.
          </p>

          <div className="bg-purple-100 p-4 rounded-md mb-4">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-2">
              useState:
            </h2>
            <p className="text-gray-800">
              Permite agregar estado a componentes de función, lo que permite
              que los componentes gestionen su propio estado interno.
            </p>
          </div>

          <div className="bg-blue-100 p-4 rounded-md mb-4">
            <h2 className="text-2xl font-semibold text-blue-800 mb-2">
              useEffect:
            </h2>
            <p className="text-gray-800">
              Se utiliza para realizar efectos secundarios en componentes de
              función, como hacer llamadas a API, suscripciones a eventos o
              manipulación del DOM, después de que el componente se renderice.
            </p>
          </div>

          <div className="bg-green-100 p-4 rounded-md mb-4">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">
              useRef:
            </h2>
            <p className="text-gray-800">
              Permite crear y acceder a referencias a elementos DOM en
              componentes de función, lo que es útil para realizar tareas como
              enfoque de elementos y medición de elementos.
            </p>
          </div>

          

          <Contador />
          

        </div>
      </main>

      <footer className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 text-white">
        <p className="text-center">&copy; 2023 Women Who Code</p>
      </footer>
    </>
  );
}

export default App;
