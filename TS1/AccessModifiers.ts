class Person {

    public name: string;
    protected age: number;
    private ssn: number;

    constructor(name: string, age: number, ssn: number) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    displayInfo(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("SSN:", this.ssn);
    }
}

let person1 = new Person("John", 30, 123456789);

person1.displayInfo();

console.log(person1.name);

// console.log(person.age); // Error (protected)
// console.log(person.ssn); // Error (private)

