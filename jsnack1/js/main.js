// Array vuoto
const numbArray = [];
// variabile che utilizzo per trovare la somma
let somma = 0;

// finche la somma è inferiore a 50 continuo
// a chiedere all'utente di darmi un numero
while ( somma < 50) {
    let userInput = prompt('Dammi un numero');
    const userNumb = parseInt(userInput);
    // inserisco i numeri nell'array
    numbArray.push(userNumb);
    somma += userNumb;
}

// Alert in caso l'utente inserisse un numero superiore a 50
if (somma > 50) {
    alert('Hai superato il limite')
}

// Stampo la somma
console.log(somma)
