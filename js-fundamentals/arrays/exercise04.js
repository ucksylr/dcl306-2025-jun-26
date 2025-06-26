let numbers = [4, 8, 15, 16, 23, 42]
console.log(numbers)
numbers.sort(function(x,y){
    return y-x;
})
numbers.sort((x,y) => {
    return y-x;
})
numbers.sort((x,y) => y-x)
console.log(numbers)
