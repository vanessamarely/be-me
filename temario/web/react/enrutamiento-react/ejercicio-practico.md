# Ejercicio Practico

Para crear routing con React y Vite, sigue estos pasos:

1. Crea un nuevo proyecto de React con Vite:

```shell
npx create-vite-app my-app --template react
```

2. Instala React Router DOM:

```sh
npm install react-router-dom
```

3. En el componente `App.js`. Incluye el routing.

```jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
```

4. Crea dos componentes más, `Home.js` y `About.js`, en el directorio `src/components/`. Estos componentes serán las páginas que se renderizarán cuando el usuario navegue a las rutas `/` y `/about`, respectivamente.

```jsx
import React from 'react';

const Home = () => {
  return <h1>Home</h1>;
};

const About = () => {
  return <h1>About</h1>;
};

export default Home;
```

4. Inicia Vite:

```sh
npm run dev
```

5. Ahora, puedes abrir tu navegador en http://localhost:3000/ y verás la página de inicio. Si navegas a http://localhost:3000/about, verás la página de about.

Este es un ejemplo básico de routing con React y Vite. Puedes agregar más rutas y componentes a tu aplicación según sea necesario.

