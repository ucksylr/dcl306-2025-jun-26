function fun(x, y, z) {
    if (arguments.length !== 3)
        throw new Error("You must provide 3 arguments!");
    return x + y * z;
}


//console.log(fun())
//console.log(fun(42))
//console.log(fun(42,10))
console.log(fun(42,10,100))
//console.log(fun(42,10,100,549))
