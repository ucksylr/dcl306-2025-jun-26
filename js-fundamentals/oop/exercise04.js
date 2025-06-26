class Circle {
    #x;
    #radius;
    constructor(x, y, radius) {
        this.#x = x;
        this.#x = y;
        this.#radius = radius;
    }

    get x(){
        console.log("property x called")
      return this.#x;
    }

    set x(new_x){
        console.log("property setter called")
        if (new_x < 0)
            throw new Error("x cannot be negative");
        this.#x = new_x;
    }
    area() {
        return Math.PI * this.#radius * this.#radius;
    }

    circumference() {
        return 2 * Math.PI * this.#radius;
    }

}

let circle = new Circle(0, 0, 10);
circle.x = 10;
console.log(circle.x)
console.log(circle.area())
console.log(circle.circumference())