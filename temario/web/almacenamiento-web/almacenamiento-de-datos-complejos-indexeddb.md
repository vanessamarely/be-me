# Almacenamiento de datos complejos — IndexedDB

Se suele abreviar como IDB. Es un sistema de base de datos complejos relacionales, que no se limitan a cadenas y números.&#x20;

También permite almacenar archivos y blobs (Objeto grande binario, son datos que se almacenan de forma binaria).&#x20;

La API es asíncrona.

### &#x20;¿Cómo funciona?

\
Se abre una base de datos IDB con un nombre y una versión.

El navegador revisa si la BD existe.

Si no existe, se ejecuta un evento llamado upgrade. En este evento se crea el almacenamiento de la data. Se inicializa la BD, ya que no existe.

Después está lista para usarse.

Si la BD existe, se revisa la versión si la version es mayor y se ejecuta el evento upgrade. Si es igual, esta lista. Si es menor se dispara un error.

&#x20;

### Abriendo la BD

Para empezar a trabajar con IndexedDB, primero necesitamos conectarnos o “abrir” (open) una base de datos.

```javascript
let openRequest = indexedDB.open(name, version)
```

\
name – un string, el nombre de la base de datos.

versión – un entero positivo, predeterminado en 1.

```javascript
let openRequest = indexedDB.open('store', 1)

openRequest.onupgradeneeded = function () {
  // se dispara si el cliente no tiene la base de datos
  // ...ejecuta la inicialización...
}

openRequest.onerror = function () {
  console.error('Error', openRequest.error)
}

openRequest.onsuccess = function () {
  let db = openRequest.result
  // continúa trabajando con la base de datos usando el objeto db
}
```

### Borrar la BD

\
Para borrar una base de datos:

```javascript
let deleteRequest = indexedDB.deleteDatabase(name)
// deleteRequest.onsuccess/onerror rastrea el resultado
```

### Almacén de objetos, “store”

\
Cuando agregamos un valor al almacén podemos asignarle una clave, de forma similar a localStorage.

La sintaxis para crear un almacén de objetos u “object store”:

```javascript
db.createObjectStore(name[, keyOptions]);

// sin key
db.createObjectStore('books');

// con Keypath: la ruta a una propiedad del objeto que IndexedDB usará como clave
db.createObjectStore('books', {keyPath: 'id'});

//autoincremento:  si es true, la clave para el objeto nuevo que se almacene se generará automáticamente con un número autoincremental.
db.createObjectStore('books', {autoIncrement: true});
```

### Borrar un almacén de objetos

\
Para borrar un almacén de objetos:

```javascript
db.deleteObjectStore('books')
```

### Transacción

Una transacción es un grupo de operaciones cuyos resultados están vinculados: pueden ser exitosas o fallar.

\
Por ejemplo, cuando una persona compra algo:

\
Agregar el ítem a su inventario.

Procede a realizar el pago.

Se debita el dinero de la cuenta personal.

\
Para iniciar una transacción:

```javascript
db.transaction(store[, type]);
```

\
store – el nombre de almacén al que la transacción va a acceder, por ejemplo "books".&#x20;

type –&#x20;

readonly – solo puede leer (es el predeterminado).

readwrite – puede leer o escribir datos.

```javascript
let transaction = db.transaction("books", "readwrite");
// (1) // obtiene un almacén de objetos para operar con él
let books = transaction.objectStore("books");

// (2) let book = { id: 'js', price: 10, created: new Date() };
let request = books.add(book);

// (3) request.onsuccess = function() {
// (4) console.log("Libro agregado al almacén", request.result);
};

request.onerror = function() {
console.log("Error", request.error);
};

// nuevo valor/objeto
db.add(storeName, value);

// definir un valor en el store con un key
db.put(storeName, value, key);

// eliminar un valor
db.delete(storeName, key);

// eliminar todos los valores
db.clear(storeName);

// Contar los valores en un store
const count = db.count(storeName);

// obtener los valores en una store
const values = db.getAll(storeName);

// Obtener un valor por el key
const value = db.get(storeName, key);



```
