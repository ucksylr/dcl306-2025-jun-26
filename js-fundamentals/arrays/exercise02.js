let numbers1 = new Array(1, 2, 3, 4, 5);
let numbers2 = new Array(10);
let myArray = Array.from("jack bauer");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (let i in myArray) {
    console.log(myArray[i]);
}
for (let c of myArray) {
    console.log(c);
}
myArray.forEach(function (c){
    console.log(c);
})
myArray.forEach( (c) => {
    console.log(c);
})
myArray.forEach( (c,i,array) => console.log(c))
myArray.forEach( console.log )