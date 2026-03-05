class Parent {

    constructor() {
        console.log("Parent class constructor");
    }

    display(): void {
        console.log("Parent class display method");
    }

}

class Child extends Parent {

    constructor() {
        super(); // calling parent constructor
        console.log("Child class constructor");
    }

    show(): void {
        console.log("Child class show method");
    }

}

let obj = new Child();

obj.display();
obj.show();