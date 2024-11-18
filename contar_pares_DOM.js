
let boton1 = document.querySelector('#bttn'); 
boton1.addEventListener('click', () => {
    let vector = document.getElementById('vector').value;
    let vectorEntero = vector.split(",").map(Number);
    let conteo = contarPares(vectorEntero)
    document.getElementById("mensaje").innerHTML = conteo;
    //console.log(conteo);    
}) 
function contarPares(arr){
    contador = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            contador = contador + 1;
        }
    } 
    return contador;
}