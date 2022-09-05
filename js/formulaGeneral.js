const formulario = document.querySelector('form');


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
    
    CapEcuacion(valores);

}

function CapEcuacion(arr){
    a = arr[0];
    b = arr[1];
    c = arr[2]

    interiorRaiz = b**2-(4*a*c)
    if(interiorRaiz < 0){
        
    }
}