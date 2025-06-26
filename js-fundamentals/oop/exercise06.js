class Circle {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }

    circumference() {
        return 2 * Math.PI * this.radius;
    }

}
let circle = new Circle(0, 0, 10);
for (let field in circle){
    console.log(`${field}: ${circle[field]}`);
}