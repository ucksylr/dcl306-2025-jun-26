let circle = {
    x: 0,
    y: 0,
    radius: 10,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    circumference: function () {
        return 2 * Math.PI * this.radius;
    }
}
console.log(circle.area())
console.log(circle.circumference())
