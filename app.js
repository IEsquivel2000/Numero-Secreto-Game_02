//let gameSet = 0;
var intentos = 1; //Intentos del jugador
let intentosMax = 5;// Numero de intentos maximo


//console.log('Este es intentos antes ' + intentos);

let numSecret = incialCondition(intentos);

//console.log('Este es intentos despues ' + intentos);

function incialCondition(intentos){
    let gameSet = parseInt(prompt('Bienvenido, primero, introduce el valor maximo con el que quieres jugar "Adivina el numero"'));
    //numSecret = numSecretGenerator(gameSet);
    //Secret = numSecretGenerator();
    let secret = numSecretGenerator(gameSet);
    asignTextElement('text_Title','Juego del numero secreto');
    asignTextElement('text_Instruction',`Introduzca un valor entre 0 - ${gameSet}:`);
    asignTextElement('text_Hint','');
    return secret;
}

function asignTextElement(element, text){
    let elementHTML = document.getElementById(element);
    elementHTML.innerHTML = text;
}

function numSecretGenerator(set) {
    //let gameSet = prompt('Bienvenido. Primero, introduce el valor maximo con el que quieres jugar "Adivina el numero"');
    return Math.floor(Math.random() * set) + 1; // Returns a random integer from 1 to 10:
}

function btn_newGame() {
    //Limpiar la caja
    clearBox();

    //Indicar mensaje de inicio
    incialCondition(intentos);

    //Generar el numero aleatorio
    //let numSecret = numSecretGenerator(gameSet);

    //Desabilitar el boton de reiniciar
    document.getElementById('reiniciar').setAttribute('disabled','disabled');    

    intentos = 1;
    console.log('Este es intentos despues del btn new game ' + intentos);
}

function btn_userVerificarIntento(){
    try{
        console.log('Este es intentos despues ' + intentos);

        let numUser = parseInt(document.getElementById('userValue').value);
        //console.log(numUser);

        if(numUser === numSecret & !isNaN(numUser) && numUser != null && numUser != "") {
            //Se cumplio la condicion
            alert(`Numero correcto!, el numero fue: ${numSecret}. Se utilizo una cantidad de ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
            correct = true;
            document.getElementById('reiniciar').removeAttribute('disabled');
        }else if(numUser > 10 | numUser < 0){
            asignTextElement('text_Hint','Valor ingresado no es valido, intenta nuevamente');
            correct = false;
        }else{

            if(numUser > numSecret){
                //No se cumplio la condicion
                asignTextElement('text_Hint','El numero ingresado es muy alto, intenta nuevamente');
            }else{
                //No se cumplio la condicion
                asignTextElement('text_Hint','El numero ingresado es muy bajo, intenta nuevamente');
            }
            asignTextElement('text_attemp',`Tienes ${intentosMax-intentos} intentos restantes`);
            intentos++;
            correct = false;
        }
        if(intentos > intentosMax){
            asignTextElement('text_attemp','Llegaste al maximo de intentos posibles');
        }
        clearBox();
    
    }catch(error){
        console.error(error);
    }
    return;
}



function clearBox(){
    document.querySelector('#userValue').value = '';
}




