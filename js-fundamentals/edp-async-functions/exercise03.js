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

async function gun(array){
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


async function app(){
    let result = fun(numbers);
    console.log(result);
    console.log("before");
    result = await gun(numbers);
    console.log(`after: ${result}`);
}

app().then(()=>{console.log("done")})