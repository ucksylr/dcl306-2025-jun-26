function fun(x=1, y=2, z=3) {
    return x + y * z;
}

function gun(x, y, z) {
    x = x ?? 1;
    y = y ?? 2;
    z = z ?? 3;
    return x + y * z;
}

function sun(x, y, z) {
    x = x || 1;
    y = y || 2;
    z = z || 3;
    return x + y * z;
}
console.log(fun())
console.log(fun(42))
console.log(fun(42,10))
console.log(fun(42,10,100))
console.log(fun(42,10,100,549))
