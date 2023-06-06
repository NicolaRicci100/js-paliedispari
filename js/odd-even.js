console.log('JS odd-even OK');


//* Funzione per randomizzare un numero da 1 a 5 per la CPU
function randomNumber(min, max){
    const number = Math.floor(Math.random() * 5) + 1;
    return number;
}

//* Funzione per stabilire se un numero è pari o dispari
function isEven(sum){
    if(sum % 2 == 0) {
        console.log('Il risultato è pari');
    }else{
        console.log('Il risultato è dispari');
    }
}

//* Prendo i bottoni dal dom
const inputOdd = document.getElementById('odd');
const inputEven = document.getElementById('even');

inputEven.addEventListener('click', function(){
    let choice = prompt ('scegli un numero da 1 a 5', '4'); //faccio scegliere un numero all'utente
    console.log('il numero scelto è ' + choice);
    const random = randomNumber(); //assegno una costante alla funzione randomNumber
    console.log('il numero casuale della CPU è ' + random);
    let sum = parseInt(choice) + random; //sommo il numero generato casualemnte dalla cpu a quello dell'utente
    console.log('la somma è ' + sum);
    isEven(sum); //dichiaro il risultato finale
    if(sum % 2 == 0) {
        console.log('Hai vinto');
    }else{
        console.log('Hai perso');
    }
})
//! tantissima ripetizione di codice inutile - cercare altra soluzione
inputOdd.addEventListener('click', function(){
    let choice = prompt ('scegli un numero da 1 a 5', '2'); //faccio scegliere un numero all'utente
    console.log('il numero scelto è ' + choice);
    const random = randomNumber(); //assegno una costante alla funzione randomNumber
    console.log('il numero casuale della CPU è ' + random);
    let sum = parseInt(choice) + random; //sommo il numero generato casualemnte dalla cpu a quello dell'utente
    console.log('la somma è ' + sum);
    isEven(sum); //dichiaro il risultato finale
    if(sum % 2 == 0) {
        console.log('Hai perso');
    }else{
        console.log('Hai vinto');
    }
})
