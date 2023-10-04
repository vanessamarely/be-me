# 📍 Enrutamiento React

{% embed url="https://docs.google.com/presentation/d/1WT1HWWZgLnROZ98rc1jgFQmTCoM5wHfaUoaIF0YJTVo/edit?usp=sharing" %}



## SPA - Single Page Application

Una SPA (Single Page Application), tiene la característica de permitirnos crear una aplicación dinámica que no necesite recargarse para permitirnos navegar por los diferentes elementos de nuestra aplicación.

## Routing - Enrutamiento

\
El React Router nos permite navegar entre componentes.

Para el enrutamiento se hace uso de una librería que nos permite la navegación.

El React Router tiene varios componentes necesarios para el enrutamiento, entre los más usados están: BrowserRouter, Switch, y Route.

### Beneficios

* Nos permite crear rutas
* Realizar redirecciones
* Podemos acceder al historial de navegación
* Manejamos rutas con parámetros
* Manejo de errores

### BrowserRouter

Envuelve a la aplicación, para lograr una sincronización de la URL.

```jsx
<BrowserRouter>
…
</BrowserRouter>
```

### Switch

Se encarga de renderizar solo al primer hijo Route o Redirect, ruta que coincide, en lugar de todas las rutas coincidentes.\


```jsx
<Switch>
    ...
</Switch>
```

En la ultima versión es:



```jsx
<Routes>
    ...
</Routes>
```

### Route

Es un componente que nos permite crear nuestras rutas.

```jsx
<Route />
```

### Link

Es un componente que se usa en lugar de los anchor tags \<a>\</a>.

```jsx
<Link>
…
</Link>
```

### Usar Routing

Necesitamos instalar react-router-dom

```sh
npm install --save react-router-dom
```

\
