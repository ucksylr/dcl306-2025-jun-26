let circle = {}
circle.x = 0;
circle.y = 0;
circle.radius = 10;
circle.area = function () {
    return Math.PI * this.radius * this.radius;
};
circle.circumference = function () {
    return 2 * Math.PI * this.radius;
};
console.log(circle.area())
console.log(circle.circumference())
console.log(circle)
delete circle.area
console.log(circle.area())
