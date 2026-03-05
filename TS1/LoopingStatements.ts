// 1. While Loop ----

let i : number = 2;
while(i<6)
{
 console.log(i);
 i++;
}

console.log("---------------------------");

let a : number =1;
while(a<=10)
{
    console.log(a);
    a+=2;
}

console.log("---------------------------");

let b : number = 10;
while(b<=20)
{
    if(b%2==0)
    {
        console.log(b);
    }
    b++;
}

// 2. Do While Loop -----------------

let j : number =1;
do
{
    console.log(j);
    j++;
    
}
while(j<=5);

console.log("---------------------------");

//3. For Loop -------------------

let k : number;
for(let k =1;k<=10;k++)
    console.log(k);


console.log("---------------------------");


// 4. Break and Continue Statements ---------------------

for(let n =1; n<=19; n++)
{
    if(n==8)
    {
        break;
    }
   console.log(n);
}

console.log("---------------------------");


for(let n =1; n<=19; n++)
{
    if(n==7)
    {
        continue;
    }
   console.log(n);

console.log("---------------------------");

for(let m =1; m<=19; m++)
{
    if(m==7|| m==5 || m==10)
    {
        continue;
    }
   console.log(m);
}
}