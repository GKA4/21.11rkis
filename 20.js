
// 1 -------------------------------
        	/*False*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 === emp2); 


// 2 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('mark');
let emp2 = new Employee('bob');

console.log(emp1 === emp1);


// 3 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('mark');
let emp2 = new Employee('mark');

console.log(emp1 === emp2);


// 4 -------------------------------
			/*False*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('mark');
let emp2 = new Employee('bob');

console.log(emp1 !== emp1);


// 5 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('mark');
let emp2 = emp1;

console.log(emp1 === emp2);


// 6 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = new Employee('eric');

console.log(emp1 !== emp2);


// 7 -------------------------------
			/*True*/
class Employee {
	constructor(name) {
		this.name = name;
	}
}

let emp1 = new Employee('john');
let emp2 = emp1;
emp2.name = 'eric';

console.log(emp1 === emp2);