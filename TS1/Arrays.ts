let names : string[] = [];

names[0] = "Ram";
names[1] = "Ramesh";
names[2] = "Shyam";
names[3] = "Govinda";

// let names : string[] = ['Ram', "Ramesh","Shyam", "Govinda"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

// Iterating over an array using a traditional for Loop 
console.log("Size of an Array :", names.length);

console.log("Employees Names ...");
for(let i =0; i<names.length;i++){
    console.log(names[i]);
}

// Iterating using the "for .... in " Loop (Indexes)

let empid:number[] = [101,102,103,104];

console.log("Employee ids...");

for(let i in empid){
    console.log(empid[i]);
}

// Iterating using the 'for ---of ' Loop (values)
let data:any[] = [101,"Arpit",true,45000];

console.log("Mixed Data ...");

for(let value of data){
    console.log(value);
}
