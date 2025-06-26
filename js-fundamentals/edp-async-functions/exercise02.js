let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fun(array){
    let total = 0;
    if (array === null || array.length === 0)
        throw new Error("You must provide an array!");
    for (let number of numbers) {
        if (number % 2 === 0) {
            let cubed = number ** 3;
            total += cubed;
        }
    }
    return total;
}

function gun(array) {
    return new Promise( (resolve, reject) => {
        let total = 0;
        if (array === null || array.length === 0)
            reject(new Error("You must provide an array!"));
        for (let number of numbers) {
            if (number % 2 === 0) {
                let cubed = number ** 3;
                total += cubed;
            }
        }
        setTimeout( () => {resolve(total);}, 5_000)
    })
}

let result = fun(numbers);
console.log(result);
console.log("before");
gun(numbers).then( (result) => { console.log(result)})
            .catch( (error) => { console.log(error)})
            .finally( () => { console.log("done") })
console.log("after");
for (let i = 0; i < 1_000_000; i++) {
    console.log(i);
}