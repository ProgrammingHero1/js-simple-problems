const number = 589.2356;
// Math.floor
// Math.ceil
// Math.round
/* 
const random = Math.random();
const between10 = random * 100;
const rounded = Math.round(between10);
console.log(rounded);
 */
const selected = []
for (let i = 0; i < 10; i++) {
    const random = Math.random() * 100;
    const picked = Math.round(random);
    if (selected.indexOf(picked) == -1) {
        selected.push(picked);
    }
    else {
        console.log('found duplicate', selected, picked)
    }
}
console.log(selected);