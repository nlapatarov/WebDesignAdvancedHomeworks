function sumEven2DimArrayElements() {
    let arr = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    let sumInTheFunction = 0;

    for (let i = 0; i < arr.length; i++) {
        const firstElement = arr[i];
        for (let j = 0; j < firstElement.length; j++) {
            const secondElement = firstElement[j];
            if (secondElement % 2 === 0) {
                sumInTheFunction += secondElement;
            }
        }
    }
    return sumInTheFunction;
}
let sum = sumEven2DimArrayElements();
console.log(sum);