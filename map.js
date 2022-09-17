const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = array.map(a => a * 2)
console.log(...result);

const result2 = array.find(a => a > 5);
console.log(result2)

const result3 = array.filter(a => a > 6)
console.log(result3)