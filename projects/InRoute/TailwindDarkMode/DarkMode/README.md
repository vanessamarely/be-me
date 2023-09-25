#Pasos para crear Boton con DarkMode

1. Borrar todo lo de App.jsx. Luego escribir:
function App(){
return(
  <div>App</div>
)
}
export default App

2. Borrar todo lo del index.css y del App.css
3. Instalar Tailwind:
   npm install -D tailwindcss
   npx tailwindcss init
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   En el archivo config.js:
   content: [
   "./index.html",
   "./src/**/*.{js,ts,jsx,tsx}",
   ],
   En el archivo index.css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   En la terminal:
   npm run dev
4. En el archivo App.jsx dentro del return escribo los estilos que quiero para la div ayudandome de un className
   Por ej:
   className="h-screen
   flex
   justify-center
   items-center"
5. Creo un <button> con el texto "Change Theme" y la siguiente clase:
   className="bg-slate-200
   px-4
   py-2
   rounded
   hover:bg-slate-300
6. El darkMode en Tailwind funciona utilizando una clase Dark. El navegador ya de por si tiene una configuracion de color llamada "prefers-color-scheme", y esa configuracion nos dice si nuestro computador esta utilizando el modo "dark" o "light". Las aplicaciones leen entonces ese prefers-color-scheme y lo respetan.
   Por lo tanto, vamos al archivo config.js y escribimos:
   darkMode: "class",
7. Ahora vamos al archivo de app.jsx y añadimos dentro del className de la div los estilos cuando se aplique la clase "dark", asi:
   dark:bg-neutral-900"
8. Hacemos el paso 7 para el boton pero con los estilos:
   dark:bg-slate-950
   dark:text-white
   dark:hover:bg-slate-900
9. Ahora vamos a crear un estado que guarde el tema:
   import { useState } from "react";
   function App() {
   const [theme, setTheme] = useState("light");
   ...
   }
10. Añadimos el evento onClick al boton
    onClick={handleChangeTheme}
11. Añadimos la funcion flecha handleChangeTheme que va a manejas el evento del boton al actualizar el estado:
    const handleChangeTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
    };
12. Ahora vamos a hacer un useEffect, que va a hacer una accion al cambiar el estado
    useEffect(() => {
    if (theme === "dark") {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    }
    }, [theme]);
13. Finalmente actualizaso el useState para su valor inicial
    const [theme, setTheme] = useState(() => {
    /_ if (localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "light");
    } _/
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
    }
    return "light";
    });
