/**
 * 1.	Imprimir los números del 1 al 100: Crea una función que imprima los números del 1 al 100 usando un bucle for
 */
function  imprimirArraya100( ){
    for (let i = 0; i < 100; i++) {
        console.log(i);
    }
}
//imprimirArraya100();


/*
2.	Contar números pares en un arreglo: Crea una función que cuente cuántos números pares existen en un arreglo de números.
*/
function contarPares(array){
    let pares = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0){
            pares++
        }
    }
    return pares
}
let array = [1,2,3,4,5,6,7,8,9,10]

//console.log(contarPares(array));

/*
3.	Sumar valores de un arreglo: Crea una función que reciba un arreglo de números y devuelva la suma de todos sus valores.
*/

function sumarValores(array){
    let suma = 0
    for (let i = 0; i < array.length; i++) {
        suma += array[i]
    }
    return suma
}
//console.log(sumarValores(array));

/*
4.	Encontrar el número más grande en un arreglo: Crea una función que devuelva el número más grande de un arreglo de números.
*/ 

function numeroMasGrande(array){
    let max = array[0]
    for (let i = 0; i < array.length; i++) {
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}
// console.log(numeroMasGrande(array));

/**
 * 5.	Verificar si un elemento está en el arreglo: Crea una función que determine si un número dado está presente en un arreglo.
 */

function encontrarElemento(array, elemento){
    for (let i = 0; i < array.length; i++) {
        if(array[i] == elemento){
            return true
        }
    }
    return false
}
// console.log(encontrarElemento(array, 5));

// 6.	Contar palabras en una cadena: Crea una función que cuente cuántas palabras hay en una cadena de texto.
function contarPalabras(cadena){
    let palabras = cadena.split(" ")
    return palabras.length
}
// console.log(contarPalabras("hola mundo"))


function listarArr(){
    let vocales = ['a','b','c','d','e']
    vocales.forEach((vocal, index, arreglo) =>{
        console.log(arreglo);
    })
}
// listarArr();

function listaNombres(){//tarea mostrar solo 1 arreglo
    nuevoArr = [];
    let nombres = ['antonia','augusto','andres','arteaga'];
    nombres.forEach((elem) =>{
        nuevoArr.push(elem);


    })
    console.log(nuevoArr);
}
// listaNombres();


let boton = document.querySelector('#ok');
boton.addEventListener('click', () => {
    let inicio = document.querySelector('#inicio').value;
    let fin = document.querySelector('#fin').value;
    llenarArreglo(inicio,fin)
})
function llenarArreglo(inicio,fin) {
    let numeros = [];
    for (let i = inicio; i <= fin; i++){
        numeros.push(i);//numeros[i]=i
    }
    recorrerArreglo(numeros);
}
function recorrerArreglo(numeros) {
    numeros.forEach(numero => {
        console.log(numero);
    })
}
// llenarArreglo();

