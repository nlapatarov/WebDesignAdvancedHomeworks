function generateRandomNumber(start, end) {
    return Math.floor(Math.random() * (end - start + 1) + start);
}
let randomNumber = generateRandomNumber(1, 100);
console.log (randomNumber);