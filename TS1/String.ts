let str1 : string = "Hello This is Typescript";
console.log(str1);
console.log("Length of str1 is:" +str1.length);

console.log("Uppercase :", str1.toUpperCase());
console.log("Lowercase :", str1.toLowerCase());


console.log(str1.charAt(6));
console.log(str1.indexOf("is"));

console.log(str1.substring(6,16));

console.log(str1.includes("Typescript"));
console.log(str1.includes("abc"));
console.log(str1.includes("is"));

console.log(str1.endsWith("Typescript"));
console.log(str1.startsWith("Hello"));


console.log(str1.replace("Typescript", "MyWorld"));

let MyWorld: string = "We1@gmail.com,xyzabc";
let abc = MyWorld.split(",");

console.log("password:", abc[1]);
console.log("email:", abc[0]);



console.log("-----------------------------------------------------------------------------------------------");


let String2 = "          Welcome to West Indies Champion                ";
console.log("Original String2:",String2);
console.log("Original String2:",String2.trim());
console.log("Original String2:",String2.trimStart());
console.log("Original String2:",String2.trimEnd());


console.log("-----------------------------------------------------------------------------------------------");

let str3 = "Welcome";
let str4 = "Indian";
let str5 = "Ocean";

console.log("After concatination:", str3.concat(str4).concat(str5));
console.log("After concatination:", str3.concat(str4));

console.log("-----------------------------------------------------------------------------------------------");

let MultiLine:string = `You don't have cards  
                       You are playing with life
                       That is not a good
                       job`;
                       
    console.log(MultiLine);