/*
1. Class
2. Read only Properties
3. Optional property
4. Static variables and methods
*/

class Student
{
    readonly studentId:number;   // Read-only property (can only be assigned once, inside constructor)
    name:string;                 // Regular property
    email?:string;               // Optional property (can be undefined)
    //schoolName:string;

    //Constructor
    constructor(sid:number, sname:string, email?:string)
    {
        this.studentId=sid;
        this.name=sname;
        this.email=email;   // If you dont pass email then it is undefined
    }
}
