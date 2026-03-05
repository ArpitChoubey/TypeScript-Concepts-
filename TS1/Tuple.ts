// Tuples with Two values 
let person : [string,number] = ["Arpit", 101];

console.log(person[0]);
console.log(person[1]);
console.log(person);

// Tuples with Multiple values 

let user : [number,string,boolean] = [101, "Ram",true];

console.log(user);

// Iterating over a Tuple using a traditional for Loop 

console.log("using a traditional for Loop....");

for(let i =0; i<user.length; i++){
    console.log(user[i]);
}

// Iterating using a for -- in loop (Index based Iteration)

console.log("using for.... in Loop....");

for(let i in user){
    console.log(user[i]);
}

// Iterating using a for -- of loop (Value based Iteration)

console.log("using for.... of Loop....");

for(let value of user){
    console.log(value);
}

// Tuples Array 

let employees : [number,string][] = [[101, "Ram"],[102, "Sita"],[103, "Ramesh"]];

console.log(employees.length);
console.log(employees[0]);

let tp = employees[0];
console.log(tp[0]);
console.log(tp[1]);

let to = employees[1];
console.log(to[0]);
console.log(to[1]);
