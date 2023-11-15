# Ejercicio Practico

## Ejercicio Practico

### Crea tu primera App en React con Stackblitz

### 🛠️ Herramientas

Para este taller vamos a usar [`Stackblitz`](https://stackblitz.com/), y tu cuenta de [`Github`](https://github.com/) para que te puedas hacer login o 'sign in' en ella, al usar el editor online.

Si aún no tienes tu cuenta de Github y deseas saber como crearla puedes ver la guía aquí.

{% embed url="https://app.gitbook.com/s/-LVsT1Ma_vwr-w-uljBc/guias-utiles/github" %}

### 🌟 Iniciemos a crear nuestra App

Para este taller usaremos el IDE online llamado stackblitz.

Así que siguiendo el paso a paso de la guía de IDE. Crearemos nuestro proyecto en React javascript.

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-08%20at%204.12.21%20PM.png" alt=""><figcaption><p>Hela Mundo en stackblitz</p></figcaption></figure>

#### 🔍 Explorando el Hola Mundo, generado por stackblitz

En la estructura de carpetas podrás apreciar en los Files, que se ha creado una carpeta public y una carpeta `src`

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-08%20at%204.32.09%20PM.png" alt=""><figcaption><p>Estructura de carpetas</p></figcaption></figure>

Toda aplicación parte de un documento HTML. En la carpeta public al seleccionar el `index.html`, se puede encontrar el contenedor de nuestra aplicación.

{% code lineNumbers="true" %}
```html
// Contenedor de la App

<div id="root"></div>
```
{% endcode %}

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-08%20at%204.38.17%20PM.png" alt=""><figcaption><p>index.html</p></figcaption></figure>

{% hint style="info" %}
Si vamos a los conceptos del HTML. Un documento HTML es compuesto por etiquetas. Entre esas etiquetas existe una muy general llamada div -> `<div></div>`

Las etiquetas tienen atributos que dan características a la etiqueta. En este caso se va a hacer uso del id y se le asigna el valor de root.

Este atributo puede ser usado en el css, como un selector de identificación y usado en javascript, haciendo uso del objeto document o el window.
{% endhint %}

Explorando nuestra carpeta `src`, encontramos tres archivos: **`App.js`**, **`index.js`**, y **`style.css`**

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-08%20at%204.45.35%20PM.png" alt=""><figcaption><p>carpeta src</p></figcaption></figure>

**`App.js`**, es el archivo donde se crea nuestro primer componente de React.

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-08%20at%204.53.27%20PM.png" alt=""><figcaption></figcaption></figure>

En nuestro proyecto como estamos usando un IDE online, este internamente tiene integrado diferentes herramientas, que permiten manejar diferentes paquetes o librerías.

Las primeras lineas de javascript son **`imports`**, que nos permiten importar el primero la librería y el segundo nuestra hoja de estilos

{% hint style="info" %}
**import**, es una palabra reservada de javascript o por decirlo de otra forma es un termino que se usa, para importar funciones que han sido exportados desde otro **modulos** (otras funciones).
{% endhint %}

En la linea 4, encontramos una función de javascript declarada con el nombre App, que esta siendo exportada por defecto haciendo uso del **`export`**.

{% hint style="info" %}
**export**, es una palabra reservada o termino para referirse a un modulo que se crea, que exporta funciones, que pueden ser usadas en otros archivos, mediante el **import**.
{% endhint %}

Hablando de **`App`**, es una función o componente. Esta función esta retornando, mediante la palabra reservada return, nuestros elementos HTML. La sintaxis del HTML dentro del javascript es lo que se conoce como JSX.

**`index.js`**, es el archivo donde se hace uso del identificador, declarado en el HTML. Y haciendo uso de las funciones de React, se create el elemento contenedor de nuestro componente, para pasarlo al documento, haciendo uso del DOM (Document Object Model).

{% hint style="info" %}
DOM (Document Object Model) o modelo de objetos del documento. El DOM nos permite la manipulación de las etiquetas del documento, por medio de javascript.
{% endhint %}

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-10%20at%204.25.09%20PM.png" alt=""><figcaption></figcaption></figure>

En la primera linea del **`index.js`** se importa la libreria de React y el `StrictMode`.

En la segunda linea se importa el **`react-dom`**, librería necesaria al igual que la primera para trabajar con los elementos del DOM de React.

En la linea 4, se importa el componente `App`, el componente general de nuestra aplicación.

En la linea 6 y 7 se crean dos constantes. La primera es la que obtiene del HTML el identificador. La segunda constante crea un elemento de React, que se encargara de indicarle a React, que crearemos un elemento el cual haciendo uso del identificador, mostrara todo lo que contenga la función render, del elemento root; que serán las lineas del 9 al 14.

Dentro del render, tenemos las etiquetas **`StrictMode`**, cuya función es ejecutar javascript en modo estricto. Esta nos indica que se van a comprobar los elementos que se usen para evitar posibles errores al hacer el código. Y dentro del **`StrictMode`**, tenemos el componente App.

**`style.css`**, es la hoja de estilos de nuestro documento. En ella crearemos todo el formato que deseemos crear a nuestro proyecto de forma general. Como por ejemplo, incluir una fuente, crear variables, etc.

La hoja de estilos contiene por defecto algunos selectores de etiqueta como el **`h1`** y el **`p`**, a los cuales se les esta especificando un tipo de fuente.

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-10%20at%204.33.41%20PM.png" alt=""><figcaption></figcaption></figure>

## Creando una App de React con Vite

Existen varios ejemplos prácticos que podemos seguir para practicar los conocimientos que vamos adquiriendo en React.

En esta sección crearemos proyectos con Vite.

[Vite](https://vitejs.dev/), es una herramienta de desarrollo que nos permite automatizar proyectos y nos facilita la creación de un servidor y compilar nuestras aplicaciones.

Para crear una app de React en vite, debemos ejecutar en nuestra terminal los siguientes comandos:

```sh
npm create vite@latest
cd vite-project
npm install
npm run dev

```

Una vez creado nuestro proyecto, tendremos la apliacion inicial con vite asi:

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-15%20at%201.54.07%20PM.png" alt=""><figcaption><p>Hola mundo en Vite</p></figcaption></figure>

Siguiendo el paso a paso del proyecto que hicimos en stackblitz:[ 'Crea tu primera App en React'](https://vanessa-aristizabal.gitbook.io/react-notes/talleres/crea-tu-primera-app-en-react), adicional esta este video para que lo sigas, obtendremos la misma aplicacion, pero localmente en nuestras maquinas.

<figure><img src="../../../../.gitbook/assets/Screenshot%202023-03-15%20at%201.56.52%20PM.png" alt=""><figcaption></figcaption></figure>
