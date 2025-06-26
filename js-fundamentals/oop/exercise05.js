
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
class ColorfulCircle extends Circle {
    #color;
    constructor(x, y, radius, color) {
        super(x, y, radius);
        this.#color = color;
    }
    get color() {
        return this.#color;
    }
    set color(new_color) {
        this.#color = new_color;
    }
}
let circle = new ColorfulCircle(0, 0, 10,"green");
console.log(circle.color)
console.log(circle.area())
console.log(circle.circumference())