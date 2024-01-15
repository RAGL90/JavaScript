// //--- !!!!!!!!!!!!!JAVASCRIPT ASINCRONO!!!!!!!!!!!!!!

// /*
// Se hace con funciones callbacks.
// Es cuando le pasamos una función a otra función,
// */

// //Leer por orden los comentarios
// const sayHello = (userName) => { //4º Se ejecuta la función con el valor del tercer paso de la vble "userName"
//   console.log(`Hello ${userName}`);
// };

// const getUserName = (callback) => { //2º Se ejecuta y JS observa que callback equivale a sayHello, por sigue el código
//   let userName = prompt("Pls, enter your name");
//   callback(userName); //3º Como sabe que la función comodin "callback", es "sayHello" llama a la función pasándole el parámetro userName
// };

// // getUserName(sayHello); //1º Llamamos a la función "getUserName" con parámetro "SayHello"

// // Mezclamos codigo sincrono con asincrono

// const countDown = () => {
//     console.log("Are you ready?");
//     let start = 0, end = 0, count = 3;
//     for (let index = 5; index >= 0; index--, count++) {
//         start = new Date().getTime();
//         console.log(start);
//         setTimeout(() =>{
//             end = new Date().getTime();
//             console.log(index == 0 ? "Go!":index); //Operador ternario, si se cumple se muestra "Go", si no, muestra index.
//             console.log(count);
//             console.log(end - start," ms");
//         }, count * 1000);
//     }
// };
// countDown();
// console.log("Steady");

/* Se ejecuta la función, y el bucle for porque ambos son Síncronos, pero cuando
llega al setTimeout deja de serlo y es asíncrono, mientras espera JS ejecuta el resto 
del código síncrono. En este caso sigue leyendo fuera de la función*/

//MiniHelp de llamadas asíncrona: LAS PROMESAS

//Ejemplo básico de un "lío" asíncrono
const countDownHell = () => {
  let start = 5;
  setTimeout(() => {
    console.log(start--);
    setTimeout(() => {
      console.log(start--);
      setTimeout(() => {
        console.log(start--);
        setTimeout(() => {
          console.log(start--);
          setTimeout(() => {
            console.log(start--);
            setTimeout(() => {
              console.log("Running!!!");
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};
// countDownHell(); //Llamada al lío de Asíncrono o pila de tareas

/* < Promesas: Indica si el proceso ha finalizado sea exitoso o erróneo, son resultados excluyentes,
pero se cumplen. > */

// const doingSomething = (done) => {
//   new Promise((resolve, reject) => {
//     if (done) {
//         resolve(console.log("success"));
//     } else {
//         reject(err.message);
//     }
//   });
// };
// doingSomething(true);

// Recordamos que una promesa es siempre un objeto

// const onResolved = (id) => {
//   setTimeout(console.log, 0, id, "resolved");
// };
// const onRejected = (id) => {
//   setTimeout(console.log, 0, id, "rejected");
//   //Explicación => 0: / id:
// };

// let promise = fetch("/API/movies"); //GET = Obtener - Fetch = hacer peticiones HTTP - Post = Insertar
// let promise2 = promise.then(onResolved);
// let promise3 = promise2.then(onResolved);

// let promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000);
// });
// let promise2 = new Promise((resolve, reject) => {
//   setTimeout(reject, 2000);
// });

// promise1.then(
//   () => onResolved ("promise1"),
//   () => onRejected ("promise2")
// );
// promise2.then(
//   () => onResolved ("promise1"),
//   () => onRejected ("promise2")
// );

// ********************** Start Promesa

// let promise = new Promise ((resolve, reject)=>{
//   setTimeout(reject(new Error("catching the error")),1000);
// });

// promise.then(() => {
//   alert("Promise solved");
// })
// .catch((error)=> console.log(error.message));
//****************** End Promesa

/* Las promesas se practicarán cuando llegue el momento, ahora veremos las sintaxis edulcorada (Sugar Syntax)*/

// Async / Await - Se escriben promesas como si fuesen códigos síncronos.

//*********Primera Forma
// Lanzamiento de Async / Await
// async function getNumber (number) {
//   console.log(number);
// }

//*********Segunda Forma
// const getNumber = async function (number){
//   console.log(number);
// }

//*********Tercera Forma: La que usaremos
// const getNumber = async (number) => { //Async es un indicador de que puede contener información asíncrona
//   console.log(number);
//   await Promise.reject(3); //Await es el que envía la frecuencia asíncrona.
//   // return 3; //Con "async" se devuelve siempre un objeto "promise"
//   // Una promesa rechazada no puede ser capturada directamente. Para esta captura sirve: await
// };

// getNumber(1).catch(console.log); //Metodo then recibe el objeto sin tener que hacer el paso de declaración let promise = getNumber(1) 
// console.log(2);

//* Por que sale 1, 2, y 3?
// En la llamada a la funcion le pasamos "1"
// En la promesa se ejecuta un 2 

// ************* 

const count = async () => {
  console.log(2);
  await null; //Pausa la ejecución, y añade el resto de tareas al final de la pila de tareas
  console.log(4);
}

console.log(1);
count();
console.log(3);