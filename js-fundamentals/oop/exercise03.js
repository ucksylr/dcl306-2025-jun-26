class Employee {
    constructor(fullname) {
        this.fullname = fullname;
        // this.sayHello = this.sayHello.bind(this);
    }

    sayHello = ()=> {
        console.log(this);
        console.log(`Hello, ${this.fullname}!`);
    }
}

let jack = new Employee("Jack Bauer");
jack.sayHello(); // sayHello(jack)
setInterval(jack.sayHello, 3_000);