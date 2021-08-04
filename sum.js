const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
// console.log(sum);

function arrayTotal(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

const total = arrayTotal([32, 45, 67]);
console.log('array total', total)