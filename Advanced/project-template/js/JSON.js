// Formato JSON JavaScript Object Notation
// Está JSON streamify y JSON Parse

let person = {
    id : 1,
    firstName: "Ricardo",
    lastName: "Garcia",
    email: "dragonblanco90@gmail.com",
};

//Serializamos este objeto, [lo preparamos para enviarlo]
let jsonText = JSON.stringify(person);
console.log(jsonText); //Texto en  JSON
console.log(typeof jsonText); //Formato de JSON


//Ahora recibimos los datos en el servidor.
let anotherPerson = JSON.parse(jsonText);
console.log(anotherPerson); //Texto recibido (transformado)
console.log(typeof anotherPerson); //Formato recibido

/* ---------------------- */
