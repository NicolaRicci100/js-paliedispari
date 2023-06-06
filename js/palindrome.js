console.log('JS palindome OK');

//* Funzione per girare una stringa
function isPalindrome(userWord){
    let reverseWord = '';
    for (let i = userWord.length - 1; i >= 0; i--){
        reverseWord += userWord[i];
    }
    return reverseWord;
}
console.log(isPalindrome('asd'));
