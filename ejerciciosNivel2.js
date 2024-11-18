//	Invertir un arreglo: Crea una función que reciba un arreglo y lo devuelva invertido.
function invertir(arr) {
    let copia = [];
    for (let i = 0; i < arr.length; i++) {
        copia[i] = arr[arr.length - 1 - i];
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(copia[i]);
    }
}
let arr = [1, 2, 3, 4, 3, 3, 4,6, 5];
invertir(arr);

//8.	Remover duplicados en un arreglo: Crea una función que elimine los elementos duplicados de un arreglo.
function removerDuplicados(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                arr.splice(j, 1);
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//let arr3 = [1,6,2,3,3,4,6,7,5,1,2,3,34];
//removerDuplicados(arr3);

/**
 * 9.	Transformar todos los nombres a mayúsculas: Crea una función que reciba un arreglo de nombres y los devuelva todos en mayúsculas.
 */
function transformarMayusculas(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase();
    }
    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i]);
    }

}
//let arr2 = ["hola", "mundo"];
//transformarMayusculas(arr2);

/**
 * 10.	Buscar el índice de un valor en un arreglo: Crea una función que devuelva el índice de un valor específico en un arreglo.
 */
function buscarIndice(arr, valor) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == valor) {
            return i;
        }
    }
}
let arr4 = [1, 6, 2, 3, 3, 4, 6, 7, 5, 1, 2, 3, 34];
//let val = 34;
//console.log(buscarIndice(arr4, val));
/*
11.	Reemplazar elementos en un arreglo: Crea una función que reemplace un elemento específico en un arreglo con otro valor.
*/

function reemplazarElemntoEnVector(arr, indice, valor){
    
    boton.textContent = "Eliminar";
    boton.onclick = function Eliminar() {
        for (let i = 0; i < arr.length; i++) {
            if(i == indice){
                arr[i] = valor;
            }
        }
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }
}
//reemplazarElemntoEnVector(arr4, 3, 100);

/*
12.	Calcular el promedio de un arreglo de números: Crea una función que devuelva el promedio de los números en un arreglo.
*/
function promedioArreglo(arr) {
    let suma = 0
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i]
    }
    return suma / arr.length
}
//console.log(promedioArreglo(arr4));