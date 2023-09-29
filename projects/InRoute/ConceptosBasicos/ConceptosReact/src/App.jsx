import "./App.css";
import Navbar from "./Navbar.jsx";
import Home from "./Home.jsx";

function App() {
  return (
    <>
      <div className="app">
        <Navbar />
        <div className="content">
          <Home></Home>
        </div>
        <h1>App Component</h1>
      </div>
    </>
  );
}

export default App;
