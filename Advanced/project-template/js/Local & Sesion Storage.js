/*
// local storage y sesion storage
let userName = prompt("What is your name?");

let phone = prompt("What is your number phone?")

localStorage.name = userName; //Nombre con el que se va a guardar la propiedad
localStorage.phone = phone;

console.log(localStorage.name);
console.log(localStorage.phone);

localStorage.clear(); //Limpiamos la información residual
// Se puede ver en el navegador con F12 > Aplicacion > Almacenamiento local > Servidor local
// ---*************

Borrar esta línea y la 1 para Ejecutar */

/* **************************************************** */
// let userName = prompt("What is your name?");
// let phone = prompt("What is your number phone?")

// let data = {
//     userName,
//     phone,
//     // Se busca en el código que ya exista declarado, por lo que no es necesario darle un valor y se puede escribir asi
// };

// No podemos almacenar el objeto así
// localStorage.data = data;
// Aparece: [Object object]

// Hay que convertirlo a JSON, porque localStorage almacena unicamente una cadena de caracteres
// localStorage.data = JSON.stringify(data);
// console.log(JSON.parse(localStorage.data)); //Para convertir el string de JSON en objeto y mostrarlo en consola

/* **************************************************** */

// Generar un token con el nombre y apellido.
localStorage.clear;

//En https://jwt.io/ usamos el codificador modificando el payload.

let token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJmaXJzdE5hbWUiOiJKb2huIiwibGFzdE5hbWUiOiJDb25ub3IiLCJlbWFpbCI6ImpvaG5AZ29vZ2xlLmNvbSJ9.0kq3XTU73tL7AxVhB2o5QBQ0NqOLyhLXjB6p8KgM4V4";

localStorage.setItem("token", token); //Damos nombre y contenido al setItem (para introdcur estos datos al local storage)
// console.log(localStorage.getItem("token")); //Mostramos los datos a la consola
localStorage.removeItem("token"); //Eliminamos la clave
// console.log(localStorage.getItem("token")); //Nos demuestra que no existe.

let date = new Date().toString(); //Para hacerlo string,porque Date es un objeto
localStorage.date = date; //No es necesario hacerlo JSON para este caso concreto, ya le asigna clave y valor.

// console.log(new Date(Date.parse(localStorage.date))); //Lo volvemos a transformar a objeto

/* Todos los datos que se almacenan en local storage, permanecen hasta que la aplicación o el usuario lo borre.

El sesion storage tiene el tiempo de vida de su ventana, hasta su cierre o recarga */

//Obtener hora de sesion
date = new Date();
let loginTime =
  date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

sessionStorage.setItem("logedAt", loginTime);
// console.log(sessionStorage.getItem("logedAt"));