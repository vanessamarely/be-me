import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Acerca from "./pages/Acerca";
import Contacto from "./pages/Contacto";
import "./App.css";
import { Header } from "./components/Header";
import { Menu } from "./components/Menu";
import { Error404 } from "./components/Error404";
import { Productos } from "./pages/Productos";
import { ProductoDetalle } from "./pages/ProductoDetalle";
import { Servicios } from "./pages/Servicios";
import { useState } from "react";
import { ServiciosGarantias } from "./pages/ServiciosGarantia";
import { ServiciosLista } from "./pages/ServiciosLista";
import { ServiciosPoliticas } from "./pages/ServiciosPoliticas";
import { ServiciosHome } from "./pages/ServiciosHome";
import { ServicioDetalle } from "./pages/ServicioDetalle";

function App() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Producto 1", precio: 100 },
    { id: 2, nombre: "Producto 2", precio: 200 },
    { id: 3, nombre: "Producto 3", precio: 300 },
    { id: 4, nombre: "Producto 4", precio: 400 },
    { id: 5, nombre: "Producto 5", precio: 500 },
  ]);

  const [servicios, setServicios] = useState([
    { id: 1, nombre: "Servicio 1", precio: 1000 },
    { id: 2, nombre: "Servicio 2", precio: 2000 },
    { id: 3, nombre: "Servicio 3", precio: 3000 },
    { id: 4, nombre: "Servicio 4", precio: 4000 },
    { id: 5, nombre: "Servicio 5", precio: 5000 },
  ]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca" element={<Acerca />}></Route>
          <Route path="/about" element={<Navigate to="/acerca" />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route
            path="/productos"
            element={<Productos productos={productos} />}
          ></Route>
          <Route
            path="/productos/:id"
            element={<ProductoDetalle productos={productos} />}
          ></Route>
          <Route path="/servicios" element={<Servicios />}>
            <Route index element={<ServiciosHome />} />
            <Route path="garantia" element={<ServiciosGarantias />} />
            <Route
              path="lista"
              element={<ServiciosLista servicios={servicios} />}
            />
            <Route
              path=":id"
              element={
                <>
                  <ServiciosLista servicios={servicios} />
                  <ServicioDetalle servicios={servicios}></ServicioDetalle>
                </>
              }
            />

            <Route path="politicas" element={<ServiciosPoliticas />} />
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
