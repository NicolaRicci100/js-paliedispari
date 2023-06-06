console.log('JS palindome OK');
//* Richiamo le variabili dell'input e del bottone
const inputWord = document.getElementById('input-word');
const checkButton = document.getElementById('check-button');

//* Funzione per girare una stringa e dire se è o no palindroma
function isPalindrome(userWord){
    let reverseWord = '';
    for (let i = userWord.length - 1; i >= 0; i--){
        reverseWord += userWord[i];
    }
    if(reverseWord === userWord){
        reverseWord = 'La parola è palindroma'
    } else{
        reverseWord = 'La parola non è palindroma'
    }
    return reverseWord;
}
//* Bottone di verifica
checkButton.addEventListener('click', function(){
    const answer = isPalindrome(inputWord.value);
    console.log(answer);
    document.getElementById('answer').innerHTML = answer;
})
