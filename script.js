//complete this code
class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	// Getter for name
	get name() {
		return this._name;
	}

	// Getter for age
	get age() {
		return this._age;
	}

	// Setter for age (Fixed: Now accepts a parameter)
	set age(newAge) {
		if (typeof newAge === "number" && newAge > 0) {
			this._age = newAge;
		} else {
			console.log("Please enter a valid age.");
		}
	}
}

// Student class inherits from Person
class Student extends Person {
	study() {
		console.log(`${this.name} is studying`); // Using getter instead of _name
	}
}

// Teacher class inherits from Person
class Teacher extends Person {
	teach() {
		console.log(`${this.name} is teaching`); // Using getter instead of _name
	}
}

// Example Usage
const person = new Person("John", 25);
console.log(person.name); // Output: John

person.age = 30; // Using the setter to update age
console.log(person.age); // Output: 30

const student = new Student("Alice", 22);
student.study(); // Output: Alice is studying

const teacher = new Teacher("Bob", 40);
teacher.teach(); // Output: Bob is teaching

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
