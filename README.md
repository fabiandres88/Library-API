# Library API
APLICACIONES A UTILIZAR:

-POSTMAN (https://www.postman.com/)
-MONGODB COMPASS (https://www.mongodb.com/try/download/compass)

ENDPOINTS A MANEJAR:

CRUD USUARIOS

Este es el modelo de documento a manejar para este CRUD.

{
"_id": "5f996hl921012"
"firstName" : "Juan",
"lastName" : "Gomez",
"dni": "1056986236",
"phone": "4000102",
"email": "example@domain.co", 
"password": "xwr45hy862b"
}

GET Request
1. Listar todos los usuarios( https://localhost/3000/users ).

Resultado esperado:

* HTTP response 200.
* Array con todos objetos de usuario disponibles.

POST Request
2. Crear usuario( https://localhost/3000/users ).

Requerimientos:
* Dentro del body request se envia un objeto JSON como el expuesto en el modelo, con todas sus propiedades asignadas a un valor string.
* Las propiedades dni y email son unicas(indices), no puede haber mas de un usuario con un mismo valor en cualquiera de estos dos campos.
* Todas las propiedades del modelo son requeridas.

Resultado esperado:

* HTTP response 200.
* Objeto con usuario creado.

GET Request
3. Listar un usuario por id( https://localhost/3000/users/:idUser ).

Requerimientos:
* Id del documento de usuario solicitado es enviado como parametro requerido en la url del endpoint.

Resultado esperado:

* HTTP response 200.
* Objeto con usuario solicitado.

* HTTP response 400.
* Respuesta JSON con mensaje usuario no encontrado.

PUT Request
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