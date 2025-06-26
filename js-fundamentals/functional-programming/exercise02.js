let employees = [
    {full_name: "jack bauer", salary: 100_000, department: "IT", full_time: true},
    {full_name: "kate austen", salary: 200_000, department: "SALES", full_time: false},
    {full_name: "jack shephard", salary: 300_000, department: "FINANCE", full_time: true},
    {full_name: "ben linus", salary: 150_000, department: "IT", full_time: false},
    {full_name: "james sawyer", salary: 250_000, department: "IT", full_time: true},
    {full_name: "hurley", salary: 175_000, department: "HR", full_time: false},
    {full_name: "donald trump", salary: 220_000, department: "SALES", full_time: true},
]
let totalSalaryOfFulltimeITEmployees =
employees.filter(employee => employee.department === "IT")
         .filter(employee => employee.full_time)
         .map(employee => employee.salary)
         .reduce((acc,salary) => acc + salary, 0);
console.log(totalSalaryOfFulltimeITEmployees);