# Library API

## Caracteristicas

**1.** API para una biblioteca.

**2.** La biblioteca tiene libros un ejemplar de cada libro.

**3.** Usuarios prestan libros.

**4.** Se lleva el registro de esos prestamos.

**5.** CRUD de usuarios y de libros.

**6.** Base de datos manejada con MongoDB.

## Aplicaciones a utilizar:

Estas aplicaciones se instalan para poder ejecutar y testear la aplicacion.

- Postman (https://www.postman.com/downloads/)

- MongoDB Compass Community (https://www.mongodb.com/try/download/compass)

- Visual Studio code o editro de codigo deseado. (https://code.visualstudio.com/downloa)

- NodeJS. (https://nodejs.org/en/download/)

## Instalacion

* Se debe clonar el repositorio para tener el codigo de manera local.
* Descomprimir la carpeta del proyecto.
* Abrir carpeta proyecto con editor de texto deseado.
* Abrir la terminal y asegurarse de estar el la ruta del proyecto.
* Ejecutar el siguiente comando en la consola.
> $ npm instal
* Asi se instalaran los paquetes necesarios para el proyecto.
* Ejecutar el siguiente comando en la consola.
> $ npm start
* En la terminal se visualizara asi:

```
 library@1.0.0 start
 nodemon index.js

 [nodemon] 2.0.6
 [nodemon] to restart at any time, enter `rs`
 [nodemon] watching path(s): *.*
 [nodemon] watching extensions: js,mjs,json
 [nodemon] starting `node index.js`

 server ready at port: 3000
 Connection successful to database
```

## Endpoints a manejar:

### CRUD Uusarios

Este es el modelo de documento a manejar para este CRUD:

```
{
    "_id": "5fbf2fb3220d5a30d87540bd"
    "firstName" : "Juan",
    "lastName" : "Gomez",
    "dni": "1056986236",
    "phone": "4000102",
    "email": "example@domain.co", 
    "password": "xwr45hy862b"
}
```

### GET Request

Listar todos los usuarios( https://localhost/3000/users ).

Resultado esperado:

```
[
    {
        "_id": "5fbf2fb3220d5a30d87540bc",
        "firstName": "Javier",
        "lastName": "Santos",
        "dni": "10002223456",
        "email": "javi@example.com",
        "phone": "4563738",
        "password": "xdbghj65ug",
        "__v": 0
    },
    {
        "_id": "5fbf2fc2220d5a30d87540bd",
        "firstName": "Roberto",
        "lastName": "Ruiz",
        "dni": "1000789765",
        "email": "rob@example.com",
        "phone": "4251678",
        "password": "m7jh9d5r",
        "__v": 0
    }
]
```

* HTTP response 200.
* Array con todos objetos de usuario disponibles.

### POST Request

Crear usuario( https://localhost/3000/users ).

Requerimientos:

```
{
        "firstName": "string",
        "lastName": "string",
        "dni": "string",
        "email": "string",
        "phone": "string",
        "password": "string"        
    }
```

* Dentro del body request se envia un objeto JSON como el expuesto arriba, con todas sus propiedades asignadas.
* Las propiedades dni y email son unicas(indices), no puede haber mas de un usuario con un mismo valor en cualquiera de estos dos campos.
* Todas las propiedades del modelo son requeridas.

Resultado esperado:

```
{
        "_id": "5fbf4fb3220d5a30d87540bd",
        "firstName": "Carolina",
        "lastName": "Jaimes",
        "dni": "10002223456",
        "email": "car@example.com",
        "phone": "4356789",
        "password": "pijk86f5sre",
        "__v": 0
    }
```

* HTTP response 200.
* Objeto con usuario creado.

### GET Request por id

Listar un usuario por id( https://localhost/3000/users/:idUser ).

Requerimientos:

> https://localhost/3000/users/8gbf4fb3220d5a30d87540bd

* Id del documento de usuario solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

```
{
        "_id": "8gbf4fb3220d5a30d87540bd",
        "firstName": "Fabio",
        "lastName": "Ramirez",
        "dni": "94567843",
        "email": "fab@example.com",
        "phone": "3456782",
        "password": "gt56re43sd",
        "__v": 0
    }
```

* HTTP response 200.
* Objeto con usuario solicitado.

```
"User not found"
```

* HTTP response 400.
* Respuesta JSON con mensaje usuario no encontrado.

### PUT Request
4. Modificar un usuario por id( https://localhost/3000/users/:idUser ).

Requerimientos:
* Id del documento del usuario solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* HTTP response 200.
* Objecto con usuario modificado.

* HTTP response 400.
* Respuesta JSON con mensaje usuario no encontrado.

DELETE Request
5. Remover un usuario por id( https://localhost/3000/users/:idUser ).

Requerimientos:
* Id del documento del usuario solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* HTTP response 204.
* Mensaje No content..

* HTTP response 400.
* Respuesta JSON con mensaje usuario no encontrado.

CRUD LIBROS

Este es el modelo de documento a manejar para este CRUD.

{
"_id": "6g007im032123"
"name" : "Libro 1",
"author" : "Ivan Gomez",
"genre": "Novela"
}

GET Request
1. Listar todos los libros( https://localhost/3000/books ).

Resultado esperado:

* HTTP response 200.
* Array con todos objetos de libro disponibles.

POST Request
2. Crear libro( https://localhost/3000/books ).

Requerimientos:
* Dentro del body request se envia un objeto JSON como se muestra a continuacion, con todas sus propiedades asignadas.

{
"name" : "string",
"author" : "string",
"genre": "string"
}

* Las propiedad name es unica(indice), no puede haber mas de un libro con un mismo nombre.
* Todas las propiedades del modelo son requeridas.

Resultado esperado:

* HTTP response 200.
* Objeto con libro creado.

GET Request
3. Listar un libro por id( https://localhost/3000/users/:idBook ).

Requerimientos:
* Id del documento del libro solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* HTTP response 200.
* Objeto con el libro solicitado.

* HTTP response 400.
* Respuesta JSON con el mensaje libro no encontrado.

PUT Request
4. Modificar un libro por id( https://localhost/3000/users/:idBook ).

Requerimientos:
* Id del documento del libro solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* HTTP response 200.
* Objecto con el libro modificado.

* HTTP response 400.
* Respuesta JSON con el mensaje libro no encontrado.

DELETE Request
5. Remover un libro por id( https://localhost/3000/users/:idBook ).

Requerimientos:
* Id del documento del libro solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* Request con status 204.
* Mensaje No content..

* Request con status 400.
* Respuesta JSON con el mensaje libro no encontrado.

CRUD PRESTAMOS

Este es el modelo de documento a manejar para este CRUD.

{
"_id": "7h118jn143234"
"book" : "Libro 1",
"dateLoan" : "Dec 23 2012 19:13:19",
"user": "Roberto Velez",
"dateBack": null
}

GET Request
1. Listar todos los registros( https://localhost/3000/loans ).

Resultado esperado:

* Request con status 200.
* Array con todos objetos de prestamos disponibles.

POST Request
2. Crear registro( https://localhost/3000/loans ).

Requerimientos:

* Dentro del body request se envia un objeto JSON como se muestra a continuacion, con todas sus propiedades asignadas.

{
"book" : "IdObject",
"dateLoan" : "Date",
"user": "IdObject",
"dateBack": "Date" 
}

Nota: El campo "_id": "Es auto generado por la base de datos" por esta razon no se incluye al momento de crear un nuevo documento.(ponerlo a nivel global en casa)

* Todas las propiedades del modelo son requeridas.
* Las propiedad name es unica(indice), no puede haber mas de un libro con un mismo nombre.
* El campo "dateBack": "Tiene un valor por defecto de null".
* Las propiedades "book" y "user" son de tipo id object y hacen referencia a los modelos books y users respectivamente.

Resultado esperado:

* HTTP response status 200.
* Objeto con registro creado.

PUT Request
4. Modificar un registro por id( https://localhost/3000/users/:idBook ).

Requerimientos:
* Id del documento del libro solicitado es enviado como parametro requerido en la url del endpoint.
*Dentro del body request se envia un objeto JSON como se muestra a continuacion, con la fecha de entrega del libro.

{
"dateBack": "Nov 25 2018 07:18:25" 
}

* Objeto pre modificacion.

{
"_id": "7h118jn143234"
"book" : "Libro 2",
"dateLoan" : "Nov 23 2018 19:13:19",
"user": "Roberto Velez",
"dateBack": null
}

Resultado esperado:

* HTTP response status 200.
* Objecto con el registro modificado.

{
"_id": "7h118jn143234"
"book" : "Libro 2",
"dateLoan" : "Nov 23 2018 19:13:19",
"user": "Roberto Velez",
"dateBack": "Nov 25 2018 07:18:25" 
}

* HTTP response status 400.
* Respuesta JSON con el mensaje libro no encontrado.