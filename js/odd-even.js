console.log('JS odd-even OK');


//* Funzione per randomizzare un numero da 1 a 5 per la CPU
function randomNumber(min, max){
    const number = Math.floor(Math.random() * 5) + 1;
    return number;
}
const cpuNumber = randomNumber();
console.log(cpuNumber);

//* Funzione per stabilire se un numero è pari o dispari
function isEven(sum){
    if(sum % 2 == 0) {
        console.log('Il risultato è pari');
    }else{
    console.log('Il risultato è dispari');
    }
}
const result = isEven(4);
console.log(result);