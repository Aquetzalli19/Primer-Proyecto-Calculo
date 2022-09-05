const formulario = document.querySelector('form');
const tabla = document.querySelector('#raizesTable')

let constantes = [];
let potencias = [];
let raizesPositivas = [];
let raizesNegativa = [];
let raixesComplejas = [];
let valorIndependiente;
let potenciaMayor;

//Cargar eventos
cargarEventListeners();

function cargarEventListeners(){
    formulario.addEventListener('submit', capturarFormulario);
}

function capturarFormulario(e){
    e.preventDefault()
        data = Object.fromEntries(
            new FormData(e.target)
        )
        variables(data);

}

//Almacenar Valores en una variable
function variables(data){
    valorIndependiente = parseFloat(data.valorSolo);
    potenciaMayor = data.PotenciaMayor;
    let Ecuacion = data.Ecuacion;

    separarEcuacion(Ecuacion);
}

//Se separa la ecuacion de un array
function separarEcuacion(ecuacion){

    let divisionEcuacion = ecuacion.split(" ");
    antesEcuacion = divisionEcuacion.length;

    console.log(divisionEcuacion);
    quitarRestantes(divisionEcuacion);
    divisionEcuacion.splice(0, antesEcuacion);
    console.log(divisionEcuacion);
    addConstantes(divisionEcuacion);
    addPotencias(divisionEcuacion);
    console.log(constantes);
    console.log(potencias);
    let pos = Positivo(constantes, valorIndependiente);
    let neg = Negativo(constantes, valorIndependiente, potencias);
    registarDatos(pos, neg, potenciaMayor);
    console.log(raizesPositivas);
    console.log(raizesNegativa);
    console.log(raixesComplejas);
    imprimirDatos(raizesPositivas, raizesNegativa, raixesComplejas);
}

//Quitar la X y ^
function quitarRestantes(ecuacion){
    ecuacion.map( e => {
        let separador = e.split("x^");
        ecuacion.push(separador);
    })
}

//Agregar constantes y potencias
function addConstantes(arr){
    arr.forEach( e => {
        constantes.push(parseFloat(e[0]))
    })
}

function addPotencias(arr){
    arr.forEach( e => {
        potencias.push(e[1])
    })
}

//Contar positivos

function Positivo(constantes, solo){
    let num = 0
    for(let i = 0; i < constantes.length; i++){
        if(constantes[i] < 0 && constantes[i + 1] > 0){
            num++
        }else if(constantes[i] > 0 && constantes[i + 1] < 0){
            num ++
        }
    }
    if(constantes[constantes.length-1] < 0 && solo > 0){
        num++
    }else if(constantes[constantes.length-1] > 0 && solo < 0){
        num++
    }

    return num
}

function Negativo(constantes, solo, potencias){
    let num = 0
    for(let i = 0; i < constantes.length; i++){
        if(constantes[i]* Math.pow(-1, potencias[i]) < 0 && constantes[i + 1] * Math.pow(-1, potencias[i + 1]) > 0){
            num++
        }else if(constantes[i]* Math.pow(-1, potencias[i]) > 0 && constantes[i + 1] * Math.pow(-1, potencias[i + 1])< 0){
            num ++
        }
    }
    if(constantes[constantes.length-1] * Math.pow(-1, potencias[potencias.length-1]) < 0 && solo > 0){
        num++
    }else if(constantes[constantes.length-1] * Math.pow(-1, potencias[potencias.length-1]) > 0 && solo < 0){
        num++
    }

    return num
}

function registarDatos(pos, neg, potenciaMayor){
    if(pos > 0){
        if(neg >= 1){
            for(let i = 0; pos - i >= 0; i++, i++){
                for(let j = 0; neg -j >= 0; j++, j++){
                    raizesPositivas.push(pos-i);
                    raizesNegativa.push(neg-j);
                    raixesComplejas.push(potenciaMayor - ((pos-i) + (neg-j)))
                }
            }
        }else{
            for(let i = 0; pos - i >= 0; i++, i++){
                
                raizesPositivas.push(pos-i);
                raizesNegativa.push(0);
                raixesComplejas.push(potenciaMayor - ((pos-i)))
                
            }
        }
    }
    else{
        for(let j = 0; neg -j >= 0; j++, j++){
            raizesPositivas.push(0);
            raizesNegativa.push(neg-j);
            raixesComplejas.push(potenciaMayor - ((neg-j)))
        }
    }
}

//Imprimir datos en HTML
function imprimirDatos(positivos, negativos, complejos){
    
    for(let i = 0; i < positivos.length; i++){
        const newRow = document.createElement('tr');

        const newPos = document.createElement('th');
        const newNeg = document.createElement('th');
        const newCom = document.createElement('th');

        newPos.innerText = positivos[i];
        newNeg.innerText = negativos[i];
        newCom.innerText = complejos[i];

        newRow.appendChild(newPos);
        newRow.appendChild(newNeg);
        newRow.appendChild(newCom);
        
        tabla.appendChild(newRow);

    }
        

}