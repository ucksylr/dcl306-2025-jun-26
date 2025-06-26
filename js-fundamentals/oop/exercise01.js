let Circle = function (x,y,radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
    }
    this.circumference = function () {
        return 2 * Math.PI * this.radius;
    }
};
let circle = new Circle(0,0,10);
console.log(circle)
console.log(circle.area())
console.log(circle.circumference())