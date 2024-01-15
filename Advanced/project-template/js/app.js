// Networking. Peticiones HTTP y HTTPS
// ------- Instalaremos Thunder como plugins de VSCode
/* Es una herramienta de testeo de API con la que podemoscomprobar que una 
API funciona correctamente.

Hay API que son publicas para trabajar con ellas.

En Ract usaremos mucho el tema de API
  Aplication
  Program
  Interface
Un nexo entre componentes de software: Un área intermedia entre dos códigos distintos
que interactúan, comunicándose entre sí, pero sin afectarse.

Siguen una reglas predefinida que ambos códigos conocen y deben ajustarse para establecer la comunicación.

Nosotros utilizaremos el formato: Patch

Es una tecnología importante en el intercambio de datos. Una API Web (hay diferente tipos), e intercambia datos por
HTTP, siendo datos XML o JSON, estos últimos sin más fácil de comprender

Rest => Transferencia de Estado Representacional => Es una arquitectura de Datos.
En RestFull
Hay un cliente-servidor, el cliente maneja la información en lugar de que el servidor conozca si está logueado o no.
El almacenamiento en caché reduce la cantidad de peticiones al servidor.
Está dividido en capas.

Ni el cliente ni el servidor, saben si están hablando entre ellos directamente o con un intermediario.
No les hace falta, lo único que necesitan es que a sus solicitudes tengan una respuesta.

El único nexo que hay en las capas intermedia que hay entre el Frontend y el Backend es la URL.

Todas las solicitudes deben de tener el mismo aspecto sin importar la forma

Los EndPoints - El nexo que contiene la URL del recurso que se está solicitando, y a la acción qeu se quiere realizar
Eso es "Get, post, patch, delete etc..."

URL => Uniform Resource Locator
URI => Uniform Resource Identifier

*Crub, en un entorno Rest, son los métodos: 
> Get = Lectura
> Post = Escritura
> Patch = Actualización
> Delete = Borrado
> Put = Si existe la cambia, si no existe la crea, sin importar los anteriores, si solo pones el nombre, se pierde telefono, apellidos, etc.
> Patch = Solicita que aplique cambios enviados, respetando el resto


Códigos de respuesta HTTP más comunes:
[developer.mozilla.org/es/docs/web/http/status]

Informativos: 100-199
Satisfactoria: 200-299
Redirecciones: 300-399
Errores de Clientes: 400-451
Errores de Servidor: 500-5XX

Testeo de EndPoints con API
RapidApi - El conjunto de API's más grande del mundo
Apipheny.io -

API para crear usuarios random:
https://randomuser.me/api/

Servidor JSON de prácticas
https://jsonplaceholder.typicode.com/
*/

window.addEventListener("load", () => {
  //Obtener todos los posts (lectura)
  //Sitio Web de JSON server: https://jsonplaceholder.typicode.com/
  //La URL o EndPoint de los posts: https://jsonplaceholder.typicode.com/posts
  //Hacemos una petición
  let URL = "https://jsonplaceholder.typicode.com/posts";
  // fetch(URL)
  //   .then((response) => response.json())
  //   .then((json) => console.log("Trying GET: ", json));

  // Obtener una lectura específico
  // fetch(URL + "/2")
  //   .then((response) => response.json())
  //   .then((json) => console.log("Trying GET: ", json));
  // //INSERTAR UN NUEVO POST
  // fetch(URL, {
  //   method: "POST",
  //   body: JSON.stringify({
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log("Trying POST: ", json));

  // //Actualizar un post (PUT)
  // fetch(URL+ "/1", {
  //   method: "PUT",
  //   body: JSON.stringify({
  //     id: 1,
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   }),
  //   headers: {
  //     "Content-type": "application/json; charset=UTF-8",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log("Trying PUT: ", json));

  // //Eliminar un post (DELETE)
  // fetch(URL+ "/1", {
  //   method: "DELETE",
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log("Trying DELETE: ", json));

  fetch(URL + "/1")
    .then((response) => {
      if (
        response.ok &&
        response.headers.get("Content-type") ===
          "application/json; charset=utf-8"
      ) {
        return response.json();
      } else {
        console.log(response.headers.get("Content-type"));
        throw new Error(`Unexpected status ${response.status} Content type`);
      }
    })
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
