//Variables
let p,q,x1,x2;
let botonCalcular = document.querySelector(".boton-calcular")
const formulario = document.querySelector('.form');
const resultados = document.querySelector(".resultados")

//Función que almacena los valores de P y Q
function onInput() {
    p = document.querySelector(".p").value;
    q = document.querySelector(".q").value;
}

//Proceso al hacer clic en el boton "Calcular"
botonCalcular.addEventListener("click", ()=>{
    x1 = 1;
    x2 = 1;

    let input = document.createElement("DIV");
        input.innerHTML = `Posibles raíces de "P"`;
        resultados.appendChild(input);

//Posibles raíces de P
    while(x1 <= p){
        if(p % x1 == 0){
            input = document.createElement("DIV");
            input.innerHTML = `Una posible raíz de P es: ${x1}`;
            resultados.appendChild(input);
        }
        x1 = x1+1;
    }

//Posibles raíces de Q
    input = document.createElement("DIV");
        input.innerHTML = `Posibles raíces de "Q"`;
        resultados.appendChild(input);

    while(x2 <= q){
        if(q % x2 == 0){
            let input = document.createElement("DIV");
            input.innerHTML = `Una posible raíz de Q es: ${x2}`;
            resultados.appendChild(input);
        }
        x2 = x2+1;
    }
});
