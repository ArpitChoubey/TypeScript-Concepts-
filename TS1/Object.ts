// Object Type 

let employee  ={name:"Rammohan",age :45,salary : 56987889, job :"Software Engineer",getDetails:function(){
    return `${this.name} ${this.age} ${this.salary} ${this.job}`
}};
console.log(employee.name,employee.salary);
console.log(employee.getDetails());

console.log(employee["name"]);
console.log(employee["name"],employee["salary"],employee["job"],employee["age"]);
console.log(employee["getDetails"]());


// Inline Type :--

let student:{
    name:string,
    age: number,
    grade: string,
    getSummary: ()=>string
} =
{
    name:"Scott",
    age:15,
    grade:"A",
    getSummary: function()
    {
        return `${this.name} is ${this.age} years old and scored grade ${this.grade}`;
    }
}

console.log(student.getSummary());


// Alias Type :--

type Product = {
    name: string,
    price: number,
    getInfo: () => string
};

let book1: Product = {
    name: "Learn Java",
    price: 300,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
};

let book2: Product = {
    name: "Learn Javascript",
    price: 600,
    getInfo: function () {
        return `${this.name} costs ${this.price}`;
    }
};

console.log(book1.getInfo());
console.log(book2.getInfo());

// Example : Intersection Types

type Personal = {
    name: string,
    age: number
};

type Contact = {
    email: string,
    phone: number
};

type Candidate = Personal & Contact & {
    getContactInfo(): string;
};

let candidate = {
  name: "John",
  age: 78,
  email: "abc@gmail.com",
  phone: 899090780,
  getContactInfo: function () {
    return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
  }
};

console.log(candidate.getContactInfo());

// 4. Using the classes (JS ES16/TS)

class Person {
    ssn: string;
    firstName: string;
    lastName: string;

    constructor(ssn: string, firstName: string, lastName: string) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails(): string {
        return `SSN: ${this.ssn}, Name: ${this.getFullName()}`;
    }
}

// object creation
let person1 = new Person('112123333', 'John', 'Kenedy');
console.log(person1.getDetails());

let person2 = new Person('112123333', 'Rana', 'Daggula');
console.log(person2.getDetails());
