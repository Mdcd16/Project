
/*Funciones en JS
10/07/2023
*/
/*1. Funciones tradicionales*/
function saludar(){
    return "Hola Mundo desde Js"

}
function multiplicar(param1, param2 = 5){
    return param1 * param2
}
console.log(multiplicar(2,3));

/*Parametro= "Variable" esa funcion -UTILIZA
Argumento = Valor del que toma el parametro se ejecuta la funcion.
*/

/* Funciones anonimas*/
var dividir = function (param1,param2){
    return param1/param2
}
console.log(dividir(10,5))

/* 3. Funciones de CALLBACK */

function saludo(nombre){
    console.log("Hola"+nombre);
}

saludo("Maridyn")

function procesarSaludo(parametro){
    let nombre = "Pedro";
    parametro(nombre);
}
procesarSaludo(saludo);

/* FUNCIONES DE FLECHA --> SUSTITUIR PALABRAS X SIMBOLOS*/

var sumar =(p1,p2) => p1 +p2;

var sumar1 = p1 => p1 +3;

console.log(sumar1(10));

/**** ARREGLOS ******/
var miArreglo =[1,2,3, "Pedro","Ana",{},null,[],true];
console.log(miArreglo);
var numeros =[55,13,78,26,34,10,3,61,8,13];
var frutas = ["Manza", "Uva", "Sandia"];

/* 1. COMO LEER EL ARREGLO*/

for (let index =  0; index < frutas.length; index++){
    console.log(frutas[index]);
}
frutas.forEach(function(valor){
    console.log(valor);
})
frutas.forEach(valor=> console.log(valor));

/* 2. ARREGLAR/ELIMINAR VALORES => PUSH,POP*/
/*frutas.push("Banano","Naranja", "Pera","Mango");
frutas.pop();frutas.pop();frutas.pop()*/


/* SPLICE => array.splice(indice,banders,?valores)
indice = indice del arregloe
bandera = 0: No Elimina/agrega
?valores = Depende de la bandera
*/
frutas.splice(2,0,"Banano","Naranja", "Pera","Mango" );
// frutas.splice(4,3);
frutas.forEach((valor, indice) => console.log(valor, indice));

/* 3. Diferentes funciones de los arreglos => clonar el arreglo */
console.log(frutas.reverse());
console.log(frutas.sort());
console.log(frutas.sort().reverse());
console.log(numeros.sort((a,b) => a - b));
console.log(numeros.filter(numero => numero > 11));
console.log(frutas.filter(fruta => fruta.length > 4));
console.log(frutas.find(valor => valor == "Pera"));
console.log(frutas.findIndex(valor => valor == "Pera"));
console.log(frutas.join("-"));
console.log(frutas.toString());
console.log(frutas.map(valor => `<div>${valor}</div>`));
console.log(numeros.map (numero => numero *100));
console.log(frutas.values());

const iterador = frutas.values();
for (const valor of iterador){
    console.log(valor);
}

/* Practica*/


var nummayor = [22,30,88,70,100]
var mayor = Math.

var suma = [77,50,88,39,100]

