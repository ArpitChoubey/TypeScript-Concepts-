class Vehicle {

    drive(): void {
        console.log("Vehicle is driving");
    }

}

class Honda extends Vehicle {

    drive(): void {
        console.log("Honda car is driving smoothly");
    }
 
}

let car = new Honda();

car.drive();