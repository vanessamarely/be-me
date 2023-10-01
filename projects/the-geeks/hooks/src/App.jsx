import { useState, useEffect, useRef } from "react";
import "./App.css";
import "./index.css";

const App = () => {
  const [contador, cambiarContador] = useState(0); //Estableciendo el estado a un valor de 0
  const nombre = useRef("Mariana"); //Variable que no se va a perder entre cambios de estado
  const cuentaRenderizado = useRef(0); //Cuantas veces se ha renderizado la página

  useEffect(() => {
    if (cuentaRenderizado.current === 0) {
      cuentaRenderizado.current = cuentaRenderizado.current + 1;
      return;
    }

    console.log(`El contador se actualizó. El nuevo número es ${contador}`); //No es lo correcto
    //Importamos use effect
  }, [contador]); //dependencia. El mensaje cambia cuando cambia el contador

  const cambiarNombre = () => {
    nombre.current = "Juangui";
    console.log(`Tu nuevo nombre es ${nombre.current}`);
  };

  return (
    //renderizando
    <div className="bg-rose-300 w-scren h-screen">
      <div>
      <h1>Clase de Hooks</h1>
      <p>
        Los hooks en React son funciones especiales que te permiten "enganchar"
        o acceder a características de React en componentes de función. Antes de
        la introducción de hooks, las características de React, como el estado o
        el ciclo de vida, solo estaban disponibles en componentes de clase. Los
        hooks permiten que los componentes de función tengan estas
        características, lo que hace que el código sea más reutilizable y fácil
        de entender.
      </p>

      <h2>Algunos de los hooks más comunes son:</h2>
      <p>
        useState: Permite agregar estado a componentes de función, lo que
        permite que los componentes gestionen su propio estado interno.
      </p>
      <p>
        useEffect: Se utiliza para realizar efectos secundarios en componentes
        de función, como hacer llamadas a API, suscripciones a eventos o
        manipulación del DOM, después de que el componente se renderice.
      </p>
      </div>
      <div className="py-8 px-6 bg-white rounded-xl max-w-sm mt-3">
        <p>Contador: {contador}</p>
        <button onClick={() => cambiarContador(contador + 1)}>Añadir 1</button>
        <h1>Nombre: {nombre.current}</h1>
        <button onClick={cambiarNombre}>Cambiar Nombre</button>
      </div>


    </div>
  );
};
/*function App() {
  return (
    <>
      <main className="bg-rose-300 w-scren h-screen">
        <h1>Clase de Hooks</h1>
        <p>Los hooks en React son funciones especiales que te permiten "enganchar" o acceder a características de React en componentes de función. Antes de la introducción de hooks, las características de React, como el estado o el ciclo de vida, solo estaban disponibles en componentes de clase. Los hooks permiten que los componentes de función tengan estas características, lo que hace que el código sea más reutilizable y fácil de entender.</p>

        <h2>Algunos de los hooks más comunes son:</h2>
        <p>useState: Permite agregar estado a componentes de función, lo que permite que los componentes gestionen su propio estado interno.</p>
        <p>useEffect: Se utiliza para realizar efectos secundarios en componentes de función, como hacer llamadas a API, suscripciones a eventos o manipulación del DOM, después de que el componente se renderice.</p>
        <p>useRef: Permite crear y acceder a referencias a elementos DOM en componentes de función, lo que es útil para realizar tareas como enfoque de elementos y medición de elementos.</p>
      </main>
    </>
  );
}
*/
export default App;
