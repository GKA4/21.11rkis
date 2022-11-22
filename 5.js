class Employee {
    age;
    name;
    salary;
    check() {
		  return "I'm work" ;
	  }
}

let employee = new Employee;
employee.age = 28;
employee.name = 'Logan';
employee.salary = 36000;

console.log(employee.check());