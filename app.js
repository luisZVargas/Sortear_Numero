let num = 0;
let intentos = 0;
let usados = [];
let numMax = 50;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function intento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === num) {
        asignarTextoElemento('p',`Acertaste al ${intentos} ${(intentos === 1) ? 'intento, Felicidades!!' : 'intento puedes mejorarlo!!'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroDeUsuario > num) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar() {
    document.querySelector('#valorUsuario').value = '';
}

function generarnum() {
    let numeroGenerado =  Math.floor(Math.random()*numMax)+1;

    console.log(numeroGenerado);
    console.log(usados);

    if (usados.length == numMax) {
        asignarTextoElemento('p','Ya no haymas numeros que adivinar');
    } else {
        if (usados.includes(numeroGenerado)) {
            return generarnum();
        } else {
            usados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Adivina el numero');
    asignarTextoElemento('p',`Indica un número del 1 al ${numMax}`);
    num = generarnum();
    intentos = 1;
    console.log(num);
}

function reiniciarJuego() {
    limpiar();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
condicionesIniciales();