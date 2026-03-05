class Person {

    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    showPerson(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}

class Employee extends Person {

    employeeId: number;

    constructor(name: string, age: number, employeeId: number) {
        super(name, age);
        this.employeeId = employeeId;
    }

    showEmployee(): void {
        console.log("Employee ID:", this.employeeId);
    }
}

let emp = new Employee("Alice", 28, 101);

emp.showPerson();
emp.showEmployee();