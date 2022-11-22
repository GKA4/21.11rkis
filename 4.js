class Employee {
    age;
    name;
    salary;
}

let employee1 = new Employee;
let employee2 = new Employee;
let employee3 = new Employee;
let sum = 0;

employee1.age = 28;
employee1.name = 'Logan';
employee1.salary = 36000;

employee2.age = 47;
employee2.name = 'Bob';
employee2.salary = 16000;

employee3.age = 63;
employee3.name = 'Anna';
employee3.salary = 32000;

sum += employee1.salary + employee2.salary + employee3.salary;

console.log(sum);