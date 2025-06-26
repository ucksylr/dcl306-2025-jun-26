let circle = {
    x: 0,
    y: 0,
    radius: 10,
    pencil: {
        color: "red",
        style: {
            width: 10,
            value: "dotted"
        }
    }
};
let anotherCircle = {...circle}; // shallow cloning
anotherCircle.pencil = {...circle.pencil};
console.log(circle.pencil.color);
anotherCircle.pencil.color= "blue";
console.log(circle.pencil.color);
console.log(anotherCircle.pencil.color);