/*
Fundamentos de JS
11/2/23*/

/*Primer tema Variables  --> VAR> ! LET*/
var miVariable= "Hola Mundo desde Js";

console.log("Hola Mundo");

/*2 CONSTANTE -->CONST*/
const P1_NUMERO = 3.14

/*3 tipos de datos*/
var miNombre="Maridyn";
var miEdad= 21;
var esAlta= true;
var otraVariable;
var otraNula= null;
var miObjeto= {};
var miArregalo={};

console.log(typeof miNombre,
 typeof miEdad,
typeof esAlta,
typeof otraVariable,
typeof otraNula,
typeof miObjeto,
typeof miArregalo,);


/* 4. OPERADORES ARITMETICOS *,-*/
var numero1 = 15;
var numero2= "15";

console.log(numero1++);//16
console.log(++numero2);//5
console.log(numero1);

/* 5- OPERADORE DE ASIGNACIONES*/

numero1=15;
numero2=5;

console.log(numero1===numero2);

/*6- Sentencia de if,else*/

if(numero1 == numero2){
    respuesta =true

}else{
    respuesta = false;
}
console.log(respuesta);

var numero3= 1

switch(numero3){
    case 1:
        respuesta="SI"
        break;

    case 2:
        respuesta="NO"
        break;
    default:
        respuesta="N/A"
        break;
}
/* FOR*/
for(let index = 0; index<5; index++){
    console.log(index)
}

/*WHILE*/
var y = 0;
while( y < 5){
    console.log("y"+y)
    y++;
}

/*DO WHILE*/
var x = 0;
do{
    console.log("x =" + x)
    x++;
    
}while(x< 5);

/*SUMAR TODOS LOS NUMEROS PARE PARES ENTRE N Y M*/
var m = 8;
var m = 16;

if(m>n){
    for( let index = n1; index <= n2; index++){
        if( index % 2==0){
            console.log(index);
          sumar += index
        }
    }
}
console.log("Total"+sumar);

 /* FUNCIONES*/
 function saludar() {
    console.log("Hola"+param)
 }

 saludar("Mari");
 saludar("Ariana");
 saludar("Jaylon")

var sumar = (p1, p2 = 3)
    return p1 + p2;{

}


console.log(sumar(10,12));

/* FUNCIONES CALLBACK*/
function procesarSaludo(otraFuncion){
    let Nombre = "Maral";
    CALLBACK(Nombre)
}
/* */
var restar = (p1,p2) => p1 / p2;

console.log(restar(10,5));
