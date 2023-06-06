console.log('JS odd-even OK');


//* Funzione per randomizzare un numero da 1 a 5 per la CPU
function randomNumber(min, max){
    const number = Math.floor(Math.random() * 5) + 1;
    return number;
}
const cpuNumber = randomNumber();
console.log(cpuNumber);