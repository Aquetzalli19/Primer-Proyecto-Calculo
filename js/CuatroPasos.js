const formulario = document.querySelector('form');
const primerPaso = document.querySelector('.primer-paso');
const segundoPaso = document.querySelector('.segundo-paso');
const tercerPaso = document.querySelector('.tercer-paso');
const cuartoPaso = document.querySelector('.cuarto-paso');


let valorIndependiente;
let ecuacionRemplazada = [];
let divisionEcuacion = [];
let BN = "" 
let bnArray
let bnArrayFilter

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

//Separa la ecuacion en un arreglo
function separarEcuacion(ecuacion){
    divisionEcuacion = ecuacion.split(" ");
    antesEcuacion = divisionEcuacion.length;

    console.log(divisionEcuacion);
    RemplazoX(divisionEcuacion)
}

//Remplazar x por (x + h)
function RemplazoX(ecuacion){
    
    ecuacion.map( e => {
        let remplazo = e.replace("x", "(x+h)");
        ecuacionRemplazada.push(remplazo);
        // ecuacionRemplazada.push(e);
    })

    console.log(ecuacionRemplazada);
    primerPaso.innerHTML = ecuacionRemplazada
    ecuacionRemplazada.map(e => {
        BN = BN + BinomioNewton(e[8], e[3], e[1]) 
    });
    
    console.log(BN)
    segundoTexto = `
        <p>${BN}</p>
    `;
    segundoPaso.innerHTML = segundoTexto;
    bnArray = BN.split(" ");
    console.log();


    tercerPaso.innerHTML = EliminarEcuacion(divisionEcuacion)
    // document.write(EliminarH(bnArrayFilter))
    cuartoPaso.innerHTML = EliminarH(bnArrayFilter)
    limpiarMemoria()

   
}

//Aplica binomio de Newton
function BinomioNewton(potencia, incognita, constanteNatural){
    parseInt(constanteNatural)
    let texto = "";
    let constante = 1;
    for(let  i = 0; i <= potencia + 1; i++){
        //Si la primera se hace 
        if(i == 0){
            texto = `+${texto}${constante * parseInt(constanteNatural)}${incognita}^${potencia} `;
            constante = constante * potencia;
        }else{
            //Ultima ejecucion
            if(i == potencia){
                texto = `${texto}+${constante * parseInt(constanteNatural)}h^${potencia} `
                return texto
            }else{
                //Caso general
                texto = `${texto}+${constante * parseInt(constanteNatural)}${incognita}^${potencia-i}h^${i} `
                constante = (constante * (potencia-i))/(i+1)
            }
            
        }
    }
}

function EliminarEcuacion(normal){
    bnArrayFilter = bnArray.filter((item) => !normal.includes(item))
    
    return bnArrayFilter;
}

function EliminarH(bn){
    let eliminado
    let derivada = []
    for(let i = 0; i < bn.length; i++){

        let tamaño = bn[i].length
        if(bn[i][tamaño - 1] == 1){
            eliminado = bn[i].slice(0,  tamaño-3);
            derivada.push(eliminado)
        }

    }
    return derivada
}

function limpiarMemoria(){
    ecuacionRemplazada = [];
    divisionEcuacion = [];
    BN = ""
    bnArray = []
    bnArrayFilter = []
}