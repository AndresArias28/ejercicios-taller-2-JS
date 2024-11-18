/*
17.	Filtrar por una propiedad en un arreglo de objetos: Crea una función que devuelva todos los objetos en un arreglo que tengan una propiedad específica.

*/

let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Maria", edad: 30 },
    { nombre: "Pedro", edad: 40 },
    { nombre: "Pedro", edad: 10 }
];

function filtrarPorPropiedad(personas, propiedad, valor) {
    let resultado = [];
    for (let i = 0; i < personas.length; i++) {
        if (personas[i][propiedad] == valor) {
            resultado.push(personas[i]);
        }
    }
    return resultado;
}
//console.log(filtrarPorPropiedad(personas, "nombre", "Pedro"));


/*
18.	Crear un objeto desde un arreglo de pares clave-valor: Crea una función que reciba un arreglo de pares clave-valor y devuelva un objeto.
*/
function crearObjeto(pares) {
    let objeto = {};
    for (let i = 0; i < pares.length; i++) {
        objeto[pares[i][0]] = pares[i][1];
    }
    return objeto;
}
//pares = [["clave1", "valor1"], ["clave2", "valor2"], ["clave3", "valor3"]];
//console.log(crearObjeto(pares));

/*
19.	Ordenar un arreglo de objetos por una propiedad: Crea una función que ordene un arreglo de objetos en base a una propiedad específica, como la edad
 */
function ordenarPorPropiedad(personas, propiedad) {
    for (let i = 0; i < personas.length; i++) {
        for (let j = i + 1; j < personas.length; j++) {
            if (personas[i][propiedad] > personas[j][propiedad]) {
                let aux = personas[i];
                personas[i] = personas[j];
                personas[j] = aux;
            }
        }
    }
    return personas;
}
//console.log(ordenarPorPropiedad(personas, "edad"));

/*
20.	Agrupar elementos de un arreglo por propiedad: Crea una función que agrupe los objetos en un arreglo de acuerdo con una propiedad, como "edad", devolviendo un objeto donde las claves sean las propiedades y los valores, arreglos de los objetos que correspondan.
*/
function agruparPorPropiedad(personas, propiedad) {
    let agrupados = {};
    for (let i = 0; i < personas.length; i++) {
        if (agrupados[personas[i][propiedad]]) {
            agrupados[personas[i][propiedad]].push(personas[i]);
        } else {
            agrupados[personas[i][propiedad]] = [personas[i]];
        }
    }
    return agrupados;
}
console.log(agruparPorPropiedad(personas, "edad"));