# ⚛ React - Conceptos básicos

React es una biblioteca de JavaScript utilizada para construir interfaces de usuario (UI) interactivas y reactivas en aplicaciones web.

{% embed url="https://docs.google.com/presentation/d/1t66dTXXlolpHRRVK9cSXLUBNcQFxKiJby60wxu5_2DE/edit?usp=sharing" %}

### Conceptos Básicos

#### Componentes

Un componente es una pieza aislada de la interfaz de usuario que puede contener código JavaScript, HTML y CSS. Los componentes pueden ser reutilizados en toda la aplicación.

#### DOM (Modelo de objetos del Documento)

El DOM es el árbol de objetos, de los elementos que se encuentran en el documento HTML.

Tengo un articulo en [`medium`](https://vanessamarely.medium.com/crp-critical-render-path-o-ruta-de-acceso-de-representaci%C3%B3n-cr%C3%ADtica-1f2ca78d2645) o en [dev.to](https://dev.to/vanessamarely/crp-critical-render-path-o-ruta-de-acceso-de-representacion-critica-31eh), donde puedes ampliar la información sobre el critical render path y conocer un poco más sobre el DOM y como se renderiza en los navegadores.

#### Virtual DOM

Es la copia del DOM en memoria, que analiza los cambios que se realizan en el DOM y los compara, para proceder solo a ejecutar o renderizar esos elementos en el DOM, sin tener que modificar todo el árbol.

#### JSX

Es una extension de la sintaxis de javascript, que produce elementos de React.

JSX permite hacer una separación de intereses, no tienes que crear un archivo de HTML aparte para manejar y uno de javascript. Para evitarte esa preocupación se integran el lenguaje de marcado con la lógica de javascript.&#x20;

No es obligatorio usar JSX, para crear los componentes de React, pero visualmente es mucho mas sencillo de manejar.

#### **Estado (State)**

El estado es un objeto que contiene datos que pueden cambiar con el tiempo y afectar la representación de un componente. Los componentes pueden tener estado, y cuando el estado cambia, React automáticamente vuelve a renderizar el componente para reflejar esos cambios.

#### Props

Las props son datos que se pasan de un componente padre a un componente hijo. Las props son inmutables, lo que significa que no se pueden modificar desde el componente hijo.

**Renderizado**

React utiliza un algoritmo de reconciliación virtual para determinar los cambios necesarios en el DOM (Document Object Model) cuando el estado de un componente cambia. En lugar de manipular directamente el DOM, React actualiza una representación virtual del mismo y luego lo compara con la versión anterior para aplicar solo los cambios necesarios.

#### Eventos

React permite manejar eventos del usuario, como clics de ratón, cambios de entrada y pulsaciones de teclas, utilizando controladores de eventos similares a JavaScript normal.

Manejar eventos es muy similar a como se realizaría en el DOM y en las etiquetas HTML. los eventos se debe usar en camelCase (palabras compuestas), en lugar de minúsculas. Ademas se debe pasar una función en el evento usando la interpolación.

{% hint style="info" %}
**camelCase**, con palabras compuestas de una o más palabras donde se puede iniciar en minúscula y las siguientes palabras deben comenzar con mayúscula inicial. Por ejemplo:

**variableCompuesta**
{% endhint %}

<pre class="language-javascript"><code class="lang-javascript">&#x3C;button onClick={handleClick>
<strong>    Click
</strong>&#x3C;/button>
</code></pre>

```javascript
const handleClick = () => console.log('click me')
```

#### Stateful & Stateless&#x20;

- **Stateless**, es llamado sin estado, son componentes de presentación o componentes que solo van a mostrar información. Son llamados componentes tontos
- **Stateful** son componentes con estado, en ellos va a ocurrir una mayor lógica, pueden ser componentes donde se van a hacer llamados al server o peticiones. Estos componentes llaman a los componentes Stateless. Son llamados también componentes smart.
