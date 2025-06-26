let numbers1 = [1, 2, ["jack", "kate", "james"], 3, 4, 5];
let numbers2 = [...numbers1]; // shallow cloning
numbers2[2] = [...numbers2[2]];
console.log(numbers1);
numbers2[2].push("john");
console.log(numbers1);
console.log(numbers2);
