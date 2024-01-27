//Variables
let numeroMaximoPosible = 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroDeUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

//bucle
while (numeroDeUsuario != numeroSecreto) {
    numeroDeUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor`));

    console.log(typeof(numeroDeUsuario));
    if (numeroDeUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el numero es: ${numeroDeUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
    } else{
        if (numeroDeUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta 
        intentos++;

        if (intentos > maximosIntentos) {
            alert('Llegaste al numero maximo de intentos');
            break;
        }
        //La condicion no se cumplio
        //alert('Lo siento no acestaste el numero'):
    }
}