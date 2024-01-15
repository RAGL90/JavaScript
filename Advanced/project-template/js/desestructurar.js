//Desestructuración
let [num1,num2] = [1,2]; // num1 = 1 ; num2 = 2
[num1, num2] = [11]; //Num2 no tiene valor, y es undefined
//console.log(num1);

[num1,num2] = [1,6,9]; //Este si tiene sentido porque no cogemos parte de los valores. Como import y export

//Desestructurar el siguiente fragmento obteniendo el 6 en num1 y el 9 en num2 [4, 6, 7, 9].
[,num1,,num2] = [4, 6, 7, 9];
// console.log(num1);
// console.log(num2);

let num3;

//[num1,num2,...num3] = [1,2,3,4,5,6] // ... (operador de resto con los valores restantes), Tiene que ser el último
// console.log(num1);
// console.log(num2);
// console.log(num3);

//Desestructuración de Array dentro de Array. Almacenamos un valor de un doble array
let num4;
[num1,[,num2],num3,...num4]= [3,[2.5,9],6,7,8];
[num1,[num2],num3]= [3,[2.5,9],6,7,8]; 
// console.log(num1);
// console.log(num2);
// console.log(num3);
// console.log(num4);

//Desestructuración de STRINGS
let [start,,middle,...rest]="Hello";
console.log(start);
console.log(middle);
console.log(rest);


//Desestructuración de Objetos
let hero = {
  character: "Dr Strange",
  name: "Benedict Cumberbatch",
  powers: {
    artifacts: ["Agamotto's eye", "Book of Vishanti", "Agamotto's orb"],
    skills: ["Judo", "Magically conjured weapons"],
  },
};

let { name } = hero;
// console.log(name);
// let {powers: {artifacts, ...othersPowers} }= hero;
// console.log(artifacts);
// console.log(othersPowers);

/*Desestructura obteniendo el personaje, los poderes en dos variables independientes y el resto
 de objetos */
/*
let {character, powers:{artifacts,skills},...otherChar} = hero;

console.log(character);
console.log(artifacts);
console.log(skills);
console.log(otherChar);
*/

//Desestructurar el objeto para conseguir "Judo"
let { powers : {skills:[judo]}} = hero;
console.log(judo);
