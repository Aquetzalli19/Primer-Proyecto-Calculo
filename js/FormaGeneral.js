//Variables
let a;
let b;
let c;

function onInput() {
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    c = document.getElementById("c").value;
}

let botonCalcular = document.querySelector(".boton-calcular")
let divResultados = document.querySelector(".resultados")

botonCalcular.addEventListener("click", ()=>{

let raiz = (b*b)+(-4*a*c);

if(raiz >= 0){
    raiz = Math.sqrt(raiz);
    let operacion1 = (-b + raiz)/(2*a);
    let operacion2 = (-b - raiz)/(2*a);
    let input = document.createElement("DIV");
    
    input.innerHTML = `El resultado de X1 es: ${operacion1} <br> El resultado de X2 es: ${operacion2}`;
    divResultados.appendChild(input);
    
}else{
    raiz=Math.abs(raiz);
    raiz = Math.sqrt(raiz)/2;

    let input = document.createElement("DIV");
    
    input.innerHTML = `El resultado de X1 es: ${-b/2} + ${raiz.toFixed(3)}i  <br> El resultado de X2 es: ${-b/2} - ${raiz.toFixed(3)}i `;
    divResultados.appendChild(input);

}

});
