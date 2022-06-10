// Somma = 0
let sum = 0;

// Scorro i numeri da 1 a 10
for (let i = 1; i <= 10; i++) {
    let numbers = i;
    console.log(numbers)
    // Faccio la somma dei numeri
    sum += numbers;
}

// Calcolo la media della somma dei numeri
const media = sum / 10;

// Stampo somma e media
console.log(sum);
console.log(media);