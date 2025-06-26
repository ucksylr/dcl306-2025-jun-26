function fun(x, y, z) {
    console.log(`fun: ${arguments.length}`);
    return x + y * z;
}

function gun({x, y, z}) {
    console.log(`gun: ${arguments.length}`);
    return x + y * z;
}

console.log(fun(3,5,10))
console.log(gun({
    x: 3,
    y: 5,
    //z: 10,
    m: 20,
    r: 100
}))

o = {
    x: 3,
    y: 5,
    z: 10,
    m: 20,
    r: 100
}

let {x,y,z} = o;
console.log(x,y,z)

x = 0 / 0
console.log(x === x)
console.log(Number.isNaN(x))