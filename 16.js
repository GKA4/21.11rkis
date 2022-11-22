class Employee {
	#name;
	#age;
	#salary;
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  
	  getName() {
		  return this.#name;
	  }
	  getAge(){
	    return this.#age;
	  }
	  getSalary() {
		  return this.#salary;
	  }
  }

let employee = new Employee('Bob', 55, 16000);

console.log(employee.getName());
console.log(employee.getAge());
console.log(employee.getSalary());