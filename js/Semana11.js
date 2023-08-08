/* Objetos 
25/07/2023*/

"Use strict"
/* saludar = "Hola";*/
/* 2. Crear objeto de base a Object()*/

var auto = new Object();
auto.marca = "Toyota";
auto.modelo = "RAV4";
auto.estilo  = "4x4";
auto.infoGeneral = () =>{
   return    $(auto.marca)    | $(auto.modelo)    |$(aunto.estilo);

}

/*3. Crear objetos de una base de una sola funcion*/
function Persona(nombre,apellido,direccion) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
}

Persona.prototype.nombrecompleto = function() {
    return $(this.nombre)   | $(this.apellido) ;
}

var miPersona =  newPersona("Pedro","Perez","Pz")

/*4 Crear objetos en base clase*/
class Persona2{
    constructor(nombre,apellido,direccion){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
    }
   
nombrecompleto(){
    return $(this.nombre) $(this.apellido);
}
}
var otraPersona = newPersona2("Ana", "Perez", "San Jose")