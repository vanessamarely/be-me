import "./App.css";
import logo from "./assets/logo-BeMe.jpeg";

function App() {
  return (
    <>
      <div>
        <a href="https://github.com/vanessamarely/be-me" target="_blank">
          <img src={logo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Hello World in React!!!</h1>
      <p className="read-the-docs">
        Be-Me siginifica Be my Mentor/Be my Mentee, es un espacio que será de
        ayuda en tu proceso de aprendizaje. En este espacio, varios mentores
        compartirán su conocimiento a través de diferentes tipos de reuniones.
        Los temas serán desde la Web, a temas tendencia en la actualidad.
      </p>
    </>
  );
}

export default App;
