# 💾 Almacenamiento Web

## API de almacenamiento Web

{% embed url="https://docs.google.com/presentation/d/1K2geuGvPtBur-PNboV5j9FHNddwDpwjmSGU-lj6mAFM/edit?usp=sharing" %}

La API de almacenamiento Web, permite almacenar datos dado un nombre y permite recuperarlos fácilmente.&#x20;

### ¿Qué es una API?

Las Interfaces de Programación de Aplicaciones son construcciones disponibles, que permiten a los desarrolladores crear funcionalidades complejas de una manera simple.&#x20;

### &#x20;¿Para qué se necesita el almacenamiento?

- Personalizar preferencias de la página.
- Incrementar la experiencia de usuario.
- Persistencia
- Guardar datos para que la página sea más rápida.
- Incrementar el rendimiento (performance)
- Soporte sin conexión a red.

### ¿Cómo funciona?

- Usando javascript se almacena y devuelve la data que es almacenada localmente, en el dispositivo del usuario.
- Los navegadores administran la implementación y los detalles de seguridad.
- La información puede persistir entre sesiones de navegación.
- No se requiere permisos del usuario para el almacenamiento.
- La información no se comparte con el servidor o otras webapps.

### Tipos de almacenamiento Web

- Cookies
- Web storage: localStorage - sessionStorage
- WebSQL: está deprecada.
- Application cache: está deprecada.
- IndexedDB: proporciona un sistema de base de datos, para almacenar datos complejos.
- API de caché: almacena respuestas HTTP y puede almacenar la info sin conexión para un posterior uso a la conexión de red.
- FileSystem Access API. sistema de archivos real.

#### &#x20;Cookies

Es el almacenamiento vieja escuela, que permite una persistencia de la data entre el server y el cliente. Las cookies se envían en las cabeceras HTTP.

```
//crear la cookie
document.cookie="name=value";
//obtener data
const cookiesValue = document.cookie;
//eliminar la cookie
document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
```
