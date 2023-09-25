# sessionStorage

Permite conservar los datos por sesión, mientras el navegador esté abierto los conserva.

Para el almacenamiento y obtención de los datos se hace uso del objeto Storage.

\
La cuota es de 5MB hasta 12Mb.

### Guardar datos en el storage.

Se puede guardar la información de dos maneras:

```javascript
sessionStorage.setItem(key, value)
sessionStorage.setItem('name', 'John Doe')

sessionStorage.key = value
sessionStorage.name = 'John Doe'
```

### Obtener los datos del storage.

Para obtener la información almacenada, se puede hacer de dos maneras:

```javascript
// sessionStorage.getItem(key)
const name = sessionStorage.getItem('name')
console.log(`Hola, mi nombre es ${name}`)

sessionStorage.key
console.log(`Hola, mi nombre es ${sessionStorage.name}`)
```

### Eliminar  datos del storage.

\
Para eliminar un dato del storage, se puede hacer de la siguiente manera:

```javascript
sessionStorage.removeItem(key)
sessionStorage.removeItem(name)
```

### Limpiar el storage.

Cuando deseemos que nuestro storage quede limpio:

```javascript
sessionStorage.clear()
```





