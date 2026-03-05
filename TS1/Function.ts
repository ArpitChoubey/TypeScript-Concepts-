// Named Function with No parameter and No return type
function display(): void {
    console.log("Hello World");
}

display();

// Named Function with parameter and return type
function add_number(a: number, b: number): number {
    return a + b;
}

let res: number = add_number(10,20);
console.log(res);
console.log(add_number(10,20));


// Named Function with Rest Parameter
function Add_Numbers(...num: number[]) {

    let sum: number = 0;

    for(let i = 0; i < num.length; i++) {
        sum = sum + num[i];
    }

    console.log("Sum of number is " + sum);
}

Add_Numbers(1,2);
Add_Numbers(1,2,3);

// Named Function with Rest Parameter -- Multiple Types 

function findElements(...elements :(number |String)[]):number {
    return elements.length;
}

console.log(findElements(3,"John",21,"Scott"));
console.log(findElements(10,20,30,40,50,60));
console.log(findElements("abc","xyz"));

// Named Function with Optional Parameter 

function displayDetails(id:number,name :string,mailId?:string):void{
    console.log("Id :", id);
    console.log("Name :", name);
    console.log("Mail Id :", mailId);
}
displayDetails(123,"Scott","scott@gmail.com");
displayDetails(123,"Scott");

// Named Function with Default Parameter
function CalculateDiscount(price: number, rate: number = 0.50): void {
    let discount: number = price * rate;
    console.log("Discount Amount :", discount);
}

CalculateDiscount(1000, 0.30);
CalculateDiscount(1000);




