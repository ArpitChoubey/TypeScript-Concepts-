class Calculator {

    // Method Overloading
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    add(a: number, b: number, c?: number): number {

        if (c !== undefined) {
            return a + b + c;
        }

        return a + b;
    }

}

// Inheritance
class ScientificCalculator extends Calculator {

    square(n: number): number {
        return n * n;
    }

}

let calc = new ScientificCalculator();

console.log(calc.add(10, 20));
console.log(calc.add(10, 20, 30));
console.log("Square:", calc.square(5));


//

class Addition {

    // Method Signatures
    add(a: number, b: number): number;
    add(a: number, b: number, c: number): number;

    // Implementation
    add(a: number, b: number, c?: number): number {

        if (c !== undefined) {
            return a + b + c;
        }

        return a + b;
    }
}

// Usage
let calc2 = new Addition();

console.log("Adding 2 numbers:", calc2.add(10, 20));
console.log("Adding 3 numbers:", calc2.add(10, 20, 30));

