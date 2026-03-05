// 1. IF Statements---

let Age : number =20;
if(Age>=18)
{
    console.log("You are eligible to vote");
}


// 2. IF-Else Statements ---

let num : number = 20;
if(num%2==0)
{
    console.log("Even Number");
}
else
{
    console.log("Odd Number");
}

//3. Nested If Else Statements ---

let  marks : number =80;

if(marks>=90 && marks <=100)
{
    console.log("Grade A");
}
else if(marks>=70 && marks <=90)
{
    console.log("Grade B");
}
else if(marks>=60 && marks <=70)
{
    console.log("Grade C");
}
else
{
    console.log("Fail");
}

// 4. Switch Case Statements ---

let day : number =6;
switch(day)
{
    case 1 :
        console.log("Monday");
        break;
        case 2 :
        console.log("Tuesday");
        break;
        case 3 :
        console.log("Wednesda");
        break;
        case 4 :
        console.log("Thursday");
        break;
        case 5 :
        console.log("Friday");
        break;
        case 6 :
        console.log("Saturday");
        break;
        case 7 :
        console.log("Sunday");
        break;
        default : console.log("Invalid Day");
}

