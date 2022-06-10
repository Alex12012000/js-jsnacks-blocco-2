// variabile che utilizzo per trovare la somma
let sum = 0;

// **** CICLO FOR ****

// // Chiedo all'utente 5 volte di darmi un numero
// for ( let i = 0; i < 5; i++) {
//     // Chiedo all'utente di darmi un numero
//     let userInput = prompt('Dammi un numero');
//     // Transformo l'input dell'utente in un numero
//     const userNumb = parseInt(userInput);
//     // Faccio la somma dei numeri
//     sum += userNumb;
// }

// **** CICLO WHILE ****

let i = 0;
// Chiedo all'utente 5 volte di darmi un numero
while ( i < 5) {
    // Chiedo all'utente di darmi un numero
    let userInput = prompt('Dammi un numero');
    // Transformo l'input dell'utente in un numero
    const userNumb = parseInt(userInput);
    // Faccio la somma dei numeri
    sum += userNumb;
    // Aumento di 1 l'i ad ogni interazione
    i++;
}


// Stampo la somma dei numeri
console.log(sum)

