//Variables
let poly, division;
let botonCalcular = document.querySelector(".boton-calcular")
const formulario = document.querySelector('.form');
const resultados = document.querySelector(".resultados")

//Función que almacena los valores de ecuación y divisor
function onInput() {
    poly = document.querySelector(".ecuacion").value;
    division = document.querySelector(".divisor").value;
}

function divisionSintetica(poly, division) {
	//Formatear las ecuaciones correctamente
	poly = poly.replace(/(--|\+\+)/g, "+");
	poly = poly.replace(/(-\+|\+-)/g, "-");
	poly = poly.replace(/^\+/g, "");
	poly = poly.replace(/\s/g, "");
	division = division.replace(/(--|\+\+)/g, "+");
	division = division.replace(/(-\+|\+-)/g, "-");
	division = division.replace(/^\+/g, "");
	division = division.replace(/\s/g, "");
	//Eliminar todas las x y potencias
	poly = poly.replace(/x\^?\d?/g, "");
	//Agregue espacios a la ecuación para separarla
	poly = poly.replace(/([+-])/g, " $1");
	//Dividir la ecuación en los espacios
	var equ = poly.split(" ");
	//Reorganizar la división para que sea igual a 0
	var divide = division.split("x")[0]
	if(divide==""){ divide="1"; }
	division = (~Number(division.split("x")[1])+1)/divide;
	//Empezar división
	var output = ""
	var lastTerm = "0"
	for(var i=0;i<equ.length-1;i++) {
		if(equ[i].split("x")=="+" || equ[i].split("x")=="-") { equ[i] = equ[i]+"1" }
		var dt = Number(Number(equ[i]) + Number(lastTerm));
		var x = (dt/divide);
		output += x + "x^" + (equ.length-i-2) + "+";
		lastTerm = dt * division;
	}
	//Salida
	output = output.replace(/\+([+-])/g, "$1");
	output = output.replace(/0x\^\d/g, "");
	output = output.replace(/(x\^0)?\+$/g, "");
	output = output.replace(/x\^1/g, "x");
	//Calcular resto
	output += " : Resto [" + String(Number(equ[equ.length-1]) + Number(lastTerm)) + "]";

    let input = document.createElement("DIV");
    input = document.createElement("DIV");
    input.innerHTML = `Resultado: ${output}`;
    resultados.appendChild(input);
}


botonCalcular.addEventListener("click", ()=>{
    divisionSintetica(poly, division);
})
