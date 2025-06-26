let circle = {
    x: 0,
    y: 0,
    radius: 10,
    color: "red",
    thickness: 4
};

let {x,y,radius,...rest}  = circle;
console.log(x);
console.log(y);
console.log(radius);
console.log(rest);