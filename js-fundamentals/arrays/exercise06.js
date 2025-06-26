let numbers = [1, 2, 3, 4, 5];
let [first,second,...rest] = numbers;
console.log(first); // 1
console.log(second); // 2
console.log(rest); // [3,4,5]