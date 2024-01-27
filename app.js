let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}. FELICIDADES...`);
    } else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor. Vamos!.');
        } else {
            asignarTextoElemento('p','El número es mayor. Vamos!.');
        }
        intentos++;

    }
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*50)+1;
}

asignarTextoElemento('h1','Cual será el número secreto');
asignarTextoElemento('p','Adivina un numero entre el 1 y el 50')
