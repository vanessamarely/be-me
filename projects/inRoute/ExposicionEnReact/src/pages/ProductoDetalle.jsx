import { useParams, useNavigate } from "react-router-dom";
export function ProductoDetalle({ productos }) {
  const { id } = useParams();

  const navigate = useNavigate();
  const producto = productos.find((producto) => producto.id.toString() === id);

  function handleGoBack() {
    navigate(-1);
  }
  return (
    <section>
      <h1>Detalle del Producto</h1>
      <h2>{producto.nombre}</h2>
      <h2>{producto.id}</h2>
      <h2>{producto.precio}</h2>
      <button onClick={handleGoBack}>Regresar</button>
    </section>
  );
}
