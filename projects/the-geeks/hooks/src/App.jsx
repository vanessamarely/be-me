import { useState } from 'react'
import './App.css'
import './index.css'

function App() {

  return (
    <>
      <main className='w-screen h-screen bg-blue-800'>
        <h1 className="text-3xl bg-blue-400 font-bold underline">what son los Hooks</h1>
        <p className='bg-blue-500'>Los hooks en React son funciones especiales que te permiten "enganchar" o acceder a características de React en componentes de función. Antes de la introducción de hooks, las características de React, como el estado o el ciclo de vida, solo estaban disponibles en componentes de clase. Los hooks permiten que los componentes de función tengan estas características, lo que hace que el código sea más reutilizable y fácil de entender.</p>

        <h2>Algunos de los hooks más comunes en React son:</h2>
        <p><b>useState:</b> Permite agregar estado a componentes de función, lo que permite que los componentes gestionen su propio estado interno.</p>
        <p><b>useEffect:</b>  Se utiliza para realizar efectos secundarios en componentes de función, como hacer llamadas a API, suscripciones a eventos o manipulación del DOM, después de que el componente se renderice.</p>
        <p><b>useRef:</b> Permite crear y acceder a referencias a elementos DOM en componentes de función, lo que es útil para realizar tareas como enfoque de elementos y medición de elementos.</p>
      </main>

      <h1 className="text-3xl bg-blue-400 font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
