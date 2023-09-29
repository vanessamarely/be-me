# Local Storage

Conserva los datos incluso si el navegador se cierra y se vuelve a abrir.&#x20;

El almacenamiento lo realiza hasta que se limpien los datos del navegador.

El almacenamiento es hasta 5MB.

### Guardar datos en el storage.

Se puede guardar la información de dos maneras:

```javascript
localStorage.getItem(key)
const name = localStorage.getItem('name')

localStorage.key
const name = localStorage.name
console.log(`Hola, mi nombre es ${name}`)
```

### Obtener los datos del storage.

Para obtener la información almacenada, se puede hacer de dos maneras:

```javascript
localStorage.getItem(key)
const name = localStorage.getItem('name')

localStorage.key
const name = localStorage.name
console.log(`Hola, mi nombre es ${name}`)
```

### Eliminar datos del storage.

\
Para eliminar un dato del storage, se puede hacer de la siguiente manera:

```javascript
localStorage.removeItem(key)
localStorage.removeItem(name)
```

### Limpiar el storage.

Cuando deseemos que nuestro storage quede limpio:

```javascript
localStorage.clear()
```
