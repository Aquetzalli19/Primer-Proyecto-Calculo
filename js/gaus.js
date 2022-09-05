const formulario = document.querySelector('form');
const d1 = document.querySelector('.r1');
const d2 = document.querySelector('.r2');
const d3 = document.querySelector('.r3');


//Liesteners
cargarEventListeners();

function cargarEventListeners(){
    formulario.addEventListener('submit', capturarFormulario);
}

//Capturar datos formulario
function capturarFormulario(e){
    e.preventDefault()
        data = Object.fromEntries(
            new FormData(e.target)
        )
        convertToArray(data);

}

//Almacenar en un arreglo los valores
function convertToArray(data){
    let valores = []
    for(x in data){

        valores.push(parseFloat(data[x]))
    }
    
    CapEcuaciones(valores);

}

//Capturar Ecuaciones
function CapEcuaciones(array){
    let ec1 = array.slice(0,4);
    let ec2 = array.slice(4, 8);
    let ec3 = array.slice(8, 12);

    let nec1 = obtenerUno(ec1);
    nec1.splice(0, 4);


    ec2=primerPivoteDos(nec1, ec2)
    ec3=primerPivoteTres(nec1, ec3)
    ec2.splice(0, 4);
    ec3.splice(0,4);


    let nec2 = obtenerUno2(ec2);
    nec2.splice(0, 4);


    nec1=SegundoPivoteUno(nec1, nec2)
    ec3=SegundoPivoteTres(ec3, nec2)
    nec1.splice(0, 4);
    ec3.splice(0,4);

    console.log(nec1);
    console.log(nec2);
    console.log(ec3);

    let nec3 = obtenerUno3(ec3);
    nec3.splice(0, 4);


    nec1=tercerPivoteUno(nec1, nec3)    
    nec2=tercerPivoteDos(nec2, nec3)
    nec1.splice(0, 4);
    nec2.splice(0, 4);

    imprimirDatos(nec1[3], nec2[3], nec3[3]);



    // console.log(nec2);
    // console.log(nec3);


}

//Obtener uno
function obtenerUno(ecuacion) {
    ecuacion.map(x =>{
        let nvalor = x / ecuacion[0]
        ecuacion.push(nvalor)
    })
    return ecuacion
}

//Convertimos en cero las demas filas con el primer pivote
function primerPivoteDos(nec1, ec2){
    let nvalor
    for(let i = 0; i < 4; i++){
        nvalor = (nec1[i]*-(ec2[0]))+ec2[i]
        ec2.push(nvalor)
    }
    return ec2
}

function primerPivoteTres(nec1, ec3){
    for(let i = 0; i < 4; i++){
        let nvalor=(nec1[i]*-(ec3[0]))+ec3[i]
        ec3.push(nvalor)
    }
    return ec3
}

//Obtener uno de R2
function obtenerUno2(ecuacion) { 
    ecuacion.map(x =>{
        let nvalor = x / ecuacion[1]
        ecuacion.push(nvalor)
    })
    return ecuacion
}

//Convertimos en cero las demas filas con el segundo pivote
function SegundoPivoteUno(nec1, nec2){
    let nvalor
    for(let i = 0; i < 4; i++){
        nvalor = (nec2[i]*-(nec1[1]))+nec1[i]
        nec1.push(nvalor)
    }
    return nec1
}

function SegundoPivoteTres(ec3, nec2){
    for(let i = 0; i < 4; i++){
        let nvalor=(nec2[i]*-(ec3[1]))+ec3[i]
        ec3.push(nvalor)
    }
    return ec3
}

function obtenerUno3(ecuacion) {
    ecuacion.map(x =>{
        let nvalor = x / ecuacion[2]
        ecuacion.push(nvalor)
    })
    return ecuacion
}
//Convertimos en cero las demas filas con el primer pivote
function tercerPivoteUno(nec1, nec3){
    let nvalor
    for(let i = 0; i < 4; i++){
        nvalor=(nec3[i]*-(nec1[2]))+nec1[i]
        nec1.push(nvalor)
    }
    return nec1
}

function tercerPivoteDos(nec2, nec3){
    for(let i = 0; i < 4; i++){
        nvalor=(nec3[i]*-(nec2[2]))+nec2[i]
        nec2.push(nvalor)
    }
    return nec2
}

function imprimirDatos(a1, a2, a3){
    d1.innerHTML = a1;
    d2.innerHTML = a2;
    d3.innerHTML = a3;
}