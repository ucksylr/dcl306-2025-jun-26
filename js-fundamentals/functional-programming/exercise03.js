let employees = [
    {full_name: "jack bauer", salary: 100_000, department: "IT", full_time: true},
    {full_name: "kate austen", salary: 200_000, department: "SALES", full_time: false},
    {full_name: "jack shephard", salary: 300_000, department: "FINANCE", full_time: true},
    {full_name: "ben linus", salary: 150_000, department: "IT", full_time: false},
    {full_name: "james sawyer", salary: 250_000, department: "IT", full_time: true},
    {full_name: "hurley", salary: 175_000, department: "HR", full_time: false},
    {full_name: "donald trump", salary: 220_000, department: "SALES", full_time: true},
]
// generator function
function* filter(predicate_fun,array){
    for (let element of array) {
        if (predicate_fun(element)) {
            console.log("[filter] yielding...")
            yield element;
        }
    }
}

function* map(map_fun,array){
    for (let element of array) {
        console.log("[map] yielding...")
         yield map_fun(element);
    }
}
let to_salary = employee => employee.salary;
let if_it_employee = employee => employee.department === "IT";
let if_fulltime = employee => employee.full_time;
let sum = (array) => array.reduce((acc,salary) => acc + salary, 0);
// lazy
generator = map(to_salary,filter(if_it_employee,filter(if_fulltime,employees)));
let result;
do{
    result = generator.next();
    console.log(result.value);
} while(!result.done);
// console.log(sum(map(to_salary,filter(if_it_employee,filter(if_fulltime,employees)))));
