class Employee {
    name;
    salary;
    check() {
		  console.log(this.name);
		  console.log(this.salary);
	  }
}

let employee = new Employee;
employee.name = 'Logan';
employee.salary = 36000;

employee.check();