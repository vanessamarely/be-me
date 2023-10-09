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

          <p className="text-gray-800">
            <h4></h4>
            Puedes consultar y hacer uso de{" "}
            <span className="text-indigo-800">localStorage</span> para almacenar
            datos de forma persistente en el navegador.
          </p>

          <Contador />
          <div className="absolute top-0 left-0 right-0 m-auto translate-x-[35%]" > //dentro de esta clase poner el mesnaje del useEffect
          <div
            id="toast-default"
            className="flex items-center w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
            role="alert"
          >
            <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
              <svg
                class="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.147 15.085a7.159 7.159 0 0 1-6.189 3.307A6.713 6.713 0 0 1 3.1 15.444c-2.679-4.513.287-8.737.888-9.548A4.373 4.373 0 0 0 5 1.608c1.287.953 6.445 3.218 5.537 10.5 1.5-1.122 2.706-3.01 2.853-6.14 1.433 1.049 3.993 5.395 1.757 9.117Z"
                />
              </svg>
              <span class="sr-only">Fire icon</span>
            </div>
            <div class="ml-3 text-sm font-normal">Set yourself free.</div>
            <button
              type="button"
              class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
              data-dismiss-target="#toast-default"
              aria-label="Close"
            >
              <span class="sr-only">Close</span>
              <svg
                class="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          </div>

        </div>
      </main>

      <footer className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-4 text-white">
        <p className="text-center">&copy; 2023 Women Who Code</p>
      </footer>
    </>
  );
}

export default App;
