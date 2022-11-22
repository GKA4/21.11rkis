class Employee {
    age;
    name;
    salary;
    check(name, salary) {
		  return name + ', salary: ' + salary;
	  }
}

let employee = new Employee;
employee.age = 28;
employee.name = 'Logan';
employee.salary = 36000;

console.log(employee.check(employee.name, employee.salary));