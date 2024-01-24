let gameSet = prompt('Bienvenido, primero, introduce el valor maximo con el que quieres jugar "Adivina el numero"')
let numSecret = numSecretGenerator(gameSet);

let intentos = 1; //Intentos del jugador
let intentosMax = 5// Numero de intentos maximo

function asignTextElement(element, text){
    let elementHTML = document.getElementById(element);
    elementHTML.innerHTML = text;
}12

function btn_userVerificarIntento(){
    try{
        let numUser = parseInt(document.getElementById('userValue').value);
        console.log(numUser);

        if(numUser === numSecret & !isNaN(numUser) && numUser != null && numUser != "") {
            //Se cumplio la condicion
            alert(`Numero correcto!, el numero fue: ${numSecret}. Se utilizo una cantidad de ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
            correct = true;
        }else if(numUser > 10 | numUser < 0){
            asignTextElement('text_Hint','Valor ingresado no es valido, intenta nuevamente');
            correct = false;
        }else{
            if(numUser > numSecret){
                //No se cumplio la condicion
                asignTextElement('text_Hint','El numero introducido es muy alto, intenta nuevamente');
            }else{
                //No se cumplio la condicion
                asignTextElement('text_Hint','El numero introducido es muy bajo, intenta nuevamente');
            }
            asignTextElement('text_attemp',`Tienes ${intentosMax-intentos} intentos restantes`);
            intentos++;
            correct = false;
        }
        if(intentos > intentosMax){
            asignTextElement('text_attemp','Llegaste al maximo de intentos posibles');
        }
    
    }catch(error){
        console.error(error);
    }
    return;
}

function numSecretGenerator(set) {
    //let gameSet = prompt('Bienvenido, primero, introduce el valor maximo con el que quieres jugar "Adivina el numero"');
    return Math.floor(Math.random() * set) + 1; // Returns a random integer from 1 to 10:
}

asignTextElement('text_Title','Juego del numero secreto');
asignTextElement('text_Instruction',`Introduzca un valor entre 0 - ${gameSet}:`);
asignTextElement('text_Hint','');
