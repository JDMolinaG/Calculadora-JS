// let numero1 = document.getElementById('numero1').value
// let numero2 = document.getElementById('numero2').value
// let calcular = document.getElementById('calcular')
// let mostrarResultado = document.getElementById('mostrarResultado')
// calcular.addEventListener('click', calcularSuma);

// function calcularSuma() {


    
//     let resultado = parseInt(numero1) + parseInt(numero2);

//     mostrarResultado.innerHTML = resultado;
//     calcular.style.background="green"


// }

let resultado = document.getElementById('resultado')
let operandoa,
    operandob,
    operacion;



// numeros
let uno = document.getElementById('uno')
let dos = document.getElementById('dos')
let tres = document.getElementById('tres')
let cuatro = document.getElementById('cuatro')
let cinco = document.getElementById('cinco')
let seis = document.getElementById('seis')
let siete = document.getElementById('siete')
let ocho = document.getElementById('ocho')
let nueve = document.getElementById('nueve')
let cero = document.getElementById('cero')

// botones
let suma = document.getElementById('suma')
let resta = document.getElementById('resta')
let multiplicacion = document.getElementById('multiplicacion')
let division = document.getElementById('division')
let borrar = document.getElementById('borrar')
let igual = document.getElementById('igual')

// eventos
uno.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "1";
})

dos.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "2";
})

tres.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "3";
})

cuatro.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "4";
})
   
cinco.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "5";
})

seis.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "6";
})

siete.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "7";
})

ocho.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "8";
})

nueve.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "9";
})

cero.addEventListener('click',function(){
    resultado.textContent = resultado.textContent + "0";
})

suma.addEventListener('click', function(e){
    operandoa = resultado.textContent
    operacion = '+'
    limpiar()
})
resta.addEventListener('click', function(e){
    operandoa = resultado.textContent
    operacion = '-'
    limpiar()
})
multiplicacion.addEventListener('click', function(e){
    operandoa = resultado.textContent
    operacion = '*'
    limpiar()
})
division.addEventListener('click', function(e){
    operandoa = resultado.textContent
    operacion = '/'
    limpiar()
})