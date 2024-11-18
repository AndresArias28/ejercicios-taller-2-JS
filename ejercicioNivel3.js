/*
buscar por objtos- 13.	Búsqueda en un arreglo de objetos: Crea una función que busque una persona por nombre en un arreglo de objetos que contiene personas y sus edades.
*/
class Persona {
    constructor (nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    //getter
    getNombre() {
        return this.nombre;
    }
    getApellido() {
        return this.apellido;
    }
    getEdad() {
        return this.edad;
    }
    //setter
    setEdad(edad) {
        this.edad = edad;
    }
    //metodo
    toString() {
        return `${this.getNombre()} ${this.getApellido()} ${this.getEdad()}`;
    }
}

let personas = [
    new Persona("Juan", "Perez", 15),
    new Persona("Maria", "Gonzalez", 30),
    new Persona("Pedro", "Lopez", 40),
    new Persona("Pedro", "Anacona", 10),
    new Persona("Monica", "Fernanda", 10),
    new Persona("Felipe", "Chacon", 34),
    new Persona("David", "Perez", 10),
    new Persona("Diego", "Armando", 17),
    new Persona("Myke", "Bahia", 31),
    new Persona("Walter", "Fernandez", 26),
];

function obtenerPersonas(per){
    for(var i=0; i<personas.length; i ++){
    }
}

function buscarPersonaPorNombre(personas, nombre) {
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].getNombre() == nombre) {
            return personas[i];
        }
    }
    return "no existe esa persona";
}
//console.log(buscarPersonaPorNombre(personas, "Pedro"));
/*
14.	Eliminar un objeto de un arreglo: Crea una función que elimine una persona por nombre de un arreglo de objetos.
*/
function eliminarPersonaPorNombre(personas, nombre) {
    for(let i = 0; i < personas.length; i++) {
        if (personas[i].getNombre() == nombre) {
            personas.splice(i, 1);
        }
    }
    return personas;
}
//console.log(eliminarPersonaPorNombre(personas, "Pedro"));

/*
15.	Filtrar mayores de edad: Crea una función que reciba un arreglo de personas y devuelva solo aquellas que sean mayores de 18 años.
*/
function filtrarMayoresDeEdad(personas) {
    let mayores = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i].getEdad() >= 18) {
            mayores.push(personas[i]);
        }
    }
    return mayores;
}
//console.log(filtrarMayoresDeEdad(personas));  

/*
16.	Agregar un objeto a un arreglo de objetos: Crea una función que agregue un nuevo objeto (persona) a un arreglo de personas.
*/

function agregarPersona(personas, persona) {    
    personas.push(persona);
    return personas;
}
let nuevaPersona = new Persona("Ana", "Gomez", 25);
//console.log(agregarPersona(personas, nuevaPersona));