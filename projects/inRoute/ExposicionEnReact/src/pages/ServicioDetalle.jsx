import { useParams } from "react-router-dom";
export function ServicioDetalle({ servicios }) {
  const { id } = useParams();

  const servicio = servicios.find((servicio) => servicio.id.toString() === id);

  return (
    <section>
      <h1>Detalle del Servicio</h1>
      <h2>{servicio.nombre}</h2>
      <h2>{servicio.id}</h2>
      <h2>{servicio.precio}</h2>
    </section>
  );
}
