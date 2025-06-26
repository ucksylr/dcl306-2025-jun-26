let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// imperative approach
let total = 0;
for (let number of numbers) {
    if (number % 2 === 0) {
        let cubed = number ** 3;
        total += cubed;
    }
}
console.log(`total: ${total}`);
let if_even = number => number % 2 === 0;
let to_cube = number => number ** 3;
let accumulate = (total, cubed) => total + cubed;
total =
numbers.filter(if_even)
       .map(to_cube)
       .reduce( accumulate, 0);
console.log(`total: ${total}`);
