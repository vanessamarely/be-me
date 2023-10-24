# Actividad: Anidamiento de rutas con el paso de paràmetros

1. Cree una variable de estado similar a la de productos, usando el useState y pasando como estado inicial un array de servicios.
2. Vamos al componente ServiciosLista (recuerde pasarle como prop los servicios) y a partir de un map a los servicios creamos una lista. La lista la realizamos con una etiqueta li y dentro una etiqueta Link (similar a como se realizo en el componente Productos).
3. Cree un componente en pages llamado ServicioDetalle
4. En ServicioDetalle cree el detalle de cada servicio similar a como se hizo en ProductoDetalle (puede obviar el boton de Regresar)
5. En App.jsx cree la Route donde pase como atributos:
   path=":id"
   element={
   <>
   <ServiciosLista servicios={servicios} />
   <ServicioDetalle servicios={servicios}></ServicioDetalle>
   </>
   }
   y asi renderice la lista de servicios con el detalle de cada uno de ellos
