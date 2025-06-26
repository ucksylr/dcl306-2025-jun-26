async function fun(n=100) {
    return Math.floor(Math.random() * n);
}
let numbers = [
    fun(60),
    fun(100),
    fun(200)
];
Promise.all(numbers).then( (result) => {
    for (let number of result) {
        console.log(number);
    }
});
