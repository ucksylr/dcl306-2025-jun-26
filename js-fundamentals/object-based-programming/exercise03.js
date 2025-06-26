let x = 0;
let y = 0;
let radius = 10;
let circle = {
    x,
    y,
    radius,
    area: function () {
        return Math.PI * this.radius * this.radius;
    },
    circumference: function () {
        return 2 * Math.PI * this.radius;
    }
}
