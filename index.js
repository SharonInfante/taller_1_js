/*Ejercicio 1: Crear función que reciba como parámetros dos números 
y que devuelva la suma de ellos.*/

function suma_numeros(number1 , number2){
    let suma = number1 + number2
    console.log(suma)
    return number1 + number2;
}

suma_numeros(4,5)

// Ejercicio 2: Crear función que determine si un número es par o impar.

function par_o_impar (num1){
    if (num1 % 2 == 0){    
        console.log("El número es par");
    }
    else{
        console.log("El número es impar");
    }
}
   
/*Ejercicio 3: Crear un objeto carro haciendo la abstracción de sus atributos 
y un objeto anidado*/

let carro = {
    marca: "audi",
    modelo: "q8",
    color: "gris",
    puertas: "4",
    otros_datos:{
        año: "2006",
        autonomia: "575km",
        potencia_de_carga: "170kW",
    }
}

console.log(carro)

// Ejercicio 4: Crear una función que devuelva la marca del carro.

function marca_carro(){
    console.log(carro.marca)
    return carro.marca;
    
}

marca_carro()

// Ejercicio 5: Crear una función que devuelva la cantidad de puertas que tiene el carro.

function num_puertas(){
    console.log(carro.puertas)
    return carro.puertas;
}

num_puertas();


// Ejercicio 6: Crear una función que devuelva un atributo del objeto anidado.

function atributo_obj(){
    console.log(carro.otros_datos.año)
    return carro.otros_datos.año;
}

atributo_obj()


// Ejercicio 7: Crear un array de 10 números

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numeros)

/*Ejercicio 8: Crear una función que imprima en consola todos los 
números de un array */

function imprimir_numeros(){
    for(let inicial = 0; inicial<numeros.length; inicial++){
        const numeros_2 = numeros[inicial];
        console.log(numeros_2);
    }   
}
imprimir_numeros();

numeros.forEach(function (numero){
    console.log(numero)
})

// Ejercicio 9: Crear una función que elimine los números pares de ese array.


function eliminar_pares(){
    for(let inicial = 0; inicial<numeros.length; inicial++){
        if(numeros[inicial] % 2 == 0){
            numeros.splice(inicial,1);  
        }          
    }
    console.log(numeros)
}

eliminar_pares();

// Ejercicio 10: Crear una función que devuelva el número mayor de un array.

function numero_mayor(){
    let max = 0

    for ( inicial = 1; inicial< numeros.length; inicial++){
            if (numeros[inicial] > max){
                max=numeros[inicial];
        }
    }
    console.log(max);
}    

numero_mayor()

// Ejercicio 11: Crear una función que devuelva el número menos de un array.

function numero_menor(){
    let min = 9 

    for ( inicial = 0; inicial< numeros.length; inicial++){
            if (numeros[inicial] < min){
                min=numeros[inicial];
        }
    }
    console.log(min);
}

numero_menor()

/*Ejercicio 12: Crear un función que convierta en minúsculas todas las
letras de un texto*/

function minuscula_a_mayuscula(texto){
    let saludo = texto
    console.log(saludo.toLowerCase());
}

minuscula_a_mayuscula("SHARON")

/*Ejercicio 13: una función que convierta en mayúsculas todas 
las letras de un texto.*/

function mayuscula_a_minuscula(texto_1){
    let texto_minus = texto_1
    console.log(texto_minus.toUpperCase());
}

mayuscula_a_minuscula("sharon")

/*Ejercicio 14: -	Crear una función que reciba un array de nombres y 
que convierta la primera letra de cada nombre en mayúscula*/

function array_nombres_mayusculas(){
    let array_nombres = ["sharon", "tania", "pedro", "adria"]
    
    for ( let i = 0; i < array_nombres.length; i++){
        (array_nombres[i] = array_nombres[i][0].toUpperCase() + array_nombres[i].substr(1))
    }
    console.log(array_nombres);
}    

array_nombres_mayusculas()

//Ejercicio 15: Crear un array de 10 nombres.

let array_diez_nombres = ["tania", "sharon", "manuela", "gaby", "albany", "samuel", "alicia", "javiera", "daniela", "alejandro"]

console.log(array_diez_nombres)

/*Ejercicio 16: Crear una función que imprima en pantalla una lista 
con los nombres del array de nombres.*/

function imprimir_nombres(){
    for(let i = 0; i <array_diez_nombres.length; i++){
        const nombres_array = array_diez_nombres[i];
        console.log(nombres_array);
    }   
}
imprimir_nombres();

//Ejercicio 17: Crear un array de números.

let array_numeros = [10, 5, 8, 12, 25, 18, 31]
console.log(array_numeros);

/* Ejercicio 18: Crear una función que pinte en pantalla cuántos 
números tiene el array de números.*/

function pintar_cantidad_array(){
   
    let pintar_numeros = array_numeros.length 
    console.log (pintar_numeros)
     
}
pintar_cantidad_array(); 


/*//Ejercicio 19
//fieldset

let formulario = document.createElement('form');
let contenido_formulario = document.createElement('label');
let texto_contenido_formulario = document.createTextNode('Telefono');
let seleccion = document.createElement('select');
let opcion = document.createElement('option')

formulario.appendChild(contenido_formulario);
contenido_formulario.appendChild(texto_contenido_formulario);
contenido_formulario.appendChild(seleccion);
seleccion.appendChild(opcion);


document.getElementById('formulario').appendChild(formulario);*/