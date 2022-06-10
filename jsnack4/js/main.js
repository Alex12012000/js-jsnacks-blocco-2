// Creo due array con un numero diverso di elementi
// al loro interno
const firstArray = [1, 2, 3, 4, 10, 5];
const secondArray = [5, 6];

// Finche il secondo array non avrà tanti elementi quanto
// quelli nel primo array
// continuo a generare numeri casuali che successivamente
// inserisco all'interno del secondo array
while (secondArray.length < firstArray.length) {
    // variabile che contiene i numeri random generati
    let newNumber = Math.floor(Math.random() * 10);
    // Inserisco all'interno del secondo array i numeri
    // generati precedentemente 
    secondArray.push(newNumber);

}

// Stampo il secondo array
console.log(secondArray)