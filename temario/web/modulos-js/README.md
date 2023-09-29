# Modulos JS

## Módulos de JS

### &#x20;Historia

En nuestras aplicaciones o páginas web, podemos crear los archivos que queramos y necesitemos.&#x20;

Antes creabamos un solo archivo de Javascript, que contiene toda la lógica, terminando con un archivo de demasiadas líneas.

Después procedimos a crear diferentes archivos de js y para incluirlos en el documento lo hacíamos usando etiquetas \<scripts>.

Al incluirse varios archivos con la etiqueta \<script>, propios o de terceros, no había una interacción que se lograra mantener con el código. Entre las desventajas estaba el bloqueo de la carga, haciendo nuestra app lenta.

De la problemática surgieron librerías:

- [Commonjs](https://wiki.commonjs.org/wiki/Modules/1.1): sistema de módulos adaptado
- [AMD](https://es.wikipedia.org/wiki/Asynchronous_module_definition): sistema de módulos, como requirejs.

También algunos sistemas de módulos que habilitan el sistema de módulos, como:

[RequireJS](https://requirejs.org/)

[Webpack](https://webpack.js.org/)

[Babel](https://babeljs.io/)

### &#x20;¿Qué son los Módulos?

A partir del ECMAScript ES2015, surgieron los módulos en Javascript, denominados Módulos ES (ESM).

Los módulos permiten la interacción de porciones de código entre diferentes archivos.&#x20;

Eliminando la desventaja que había antes de la no flexibilidad de código.

### &#x20;Cómo declararlos

\
Para trabajar con los módulos es necesario usar las siguientes palabras reservadas:

- export: permite exportar diferentes elementos como por ejemplo variables, funciones, a otros archivos.
- import: permite importar elementos de otros archivos.

#### Export

La palabra reservada export, nos permite crear un módulo de exportación.

Podemos exportar diferentes elementos de un archivo a otro.\

```javascript
export const greeting = 'Good morning!'
```

Es una técnica usada para exportar código anonimamente (namelessly).

```javascript
const example = 'Your Code'

// Export the example variable as a default export:
export default example
```

#### import

La palabra reservada import, nos permite importar el elemento del módulo que hemos exportado.

Para usar ese elemento en nuestro archivo actual.

```javascript
import { greeting } from 'main.js'

console.log(greeting) //Good morning!
```

#### import default export

Se puede usar el default as en la sintaxis

```javascript
import { default as newName } from 'main.js'
//another example

export default 'Your Code'

import { default as favoriteCode } from './module.js'
const bestCode = favoriteCode + ' ' + 'is my best!.'
console.log(bestCode)
```

#### Renombrar import y export

Para renombrarlos se puede usar el keyword as dentro de las llaves.

```javascript
// dentro de module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName }

// dentro de main.js
import { newFunctionName, anotherNewFunctionName } from './modules/module.js'

// dentro de module.js
export { function1, function2 }

// dentro de main.js
import { function1 as newFunctionName, function2 as anotherNewFunctionName } from './module.js'
```

#### Import maps o mapas de importación

Nos permiten especificar módulos más breves y cortos, permitiendo mejorar la legibilidad y mantenibilidad del código.

Los mapas de importación y bare import specifiers o especificadores de importación básicos, permiten especificar un mapa entre los módulos y sus rutas.&#x20;

El mapa de importación se debe escribir en formato [JSON](https://es.wikipedia.org/wiki/JSON), (notación de objeto de JavaScript) es un formato de texto sencillo para el intercambio de datos.)

Para crear el JSON se debe hacer dentro de las etiquetas, y dentro del atributo type si incluye el valor importmap.

```javascript
<script type="importmap">
  {
    "imports": {
      "constants": "./constants.js",
      "functions": "./functions.js"
    }
  }
</script>

```

Debajo del importmap se incluye el módulo, y se pueden usar los keys creados en el JSON en el import.

```javascript
<script type="module">
  import {anyVariable} from "constants" import {doSomething} from "functions"
</script>
```

Sin usar el mapa de importación, la forma tradicional sería:

```javascript
<script type="module">
  import {anyVariable} from "./constants.js" import {doSomething} from "./functions.js"
</script>
```

\

\
