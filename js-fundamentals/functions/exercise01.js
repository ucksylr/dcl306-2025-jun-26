function fun(x, y, z) {
    return x + y * z;
}

let gun = function (x, y, z) {
    return x + y * z;
}

fun(1, 2, 3)
gun(3, 2, 1)

console.log(fun())
console.log(fun(42))
console.log(fun(42,10))
console.log(fun(42,10,100))
console.log(fun(42,10,100,549))
