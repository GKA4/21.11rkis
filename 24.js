class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('Mark', 6500),
  new Employee('Bob', 4500),
  new Employee('Robin', 2400),
  new Employee('Viktor', 4800)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}