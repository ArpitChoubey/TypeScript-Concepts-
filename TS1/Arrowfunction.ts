// Arrow Function with No parameter and No return type

let greet =():void =>{
    console.log("Hello Typescript");
}
greet();

// Arrow Function with  parameter and return type

let add1 = (a :number, b :number):number =>{
    return a + b;
}
console.log(add1(10,20));

// Arrow Function with Implicit Return 
let add = (a : number , b :number ) :number => a +b;
let multiply1= (a : number , b :number ) :number => a * b;

console.log(add(10,20));
console.log(multiply1(10,20));


// Arrow Function with Optional Parameter 

let displayDetails1 = (id : number,name :string, mailId?: string): void =>{
    console.log("Id :", id);
    console.log("Name :", name);
    if(mailId!= undefined){
        console.log("Mail Id :", mailId);
    }
}
displayDetails1(123, "Scott","scott@gmail.com");
displayDetails1(123, "Scott");
