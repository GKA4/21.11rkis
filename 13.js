class Employee {
	#name;
	#age;
	#salary;
	
	  constructor(name, age, salary) {
		  this.#name = name;
		  this.#age = age;
		  this.#salary = salary;
	  }
	  show() {
		  return this.#name + ', ' + this.#age + ' years old, salary: ' + this.#salary;
	  }
  }
  
  let employee = new Employee('Bob', 23, 16000);
  
  console.log(employee.show());