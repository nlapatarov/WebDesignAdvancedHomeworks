let sumEvenNumbers = 0;

function countEvenNumbers(args) {
    for (let i = 0; i < args.length; i++) {
        const element = args[i];
        if (element % 2 === 0) {
            sumEvenNumbers += 1;
        }
    }
    return sumEvenNumbers;
}
let evenCount = countEvenNumbers( [1,4,2,3,5] );
console.log( evenCount );