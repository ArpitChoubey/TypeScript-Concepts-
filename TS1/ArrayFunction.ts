// for each 
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, name: "Arpit", isActive: true },
  { id: 2, name: "Rahul", isActive: false },
  { id: 3, name: "Priya", isActive: true }
];

users.forEach((user: User, index: number) => {
  console.log(`${index + 1}. ${user.name} - Active: ${user.isActive}`);
});

// map

const users2 = [
  { id: 1, name: "Arpit", salary: 50000 },
  { id: 2, name: "Rahul", salary: 60000 },
  { id: 3, name: "Priya", salary: 55000 }
];

const names2: string[] = users2.map(user => user.name);

console.log(names2);

// filter 

type User3 = {
  id: number;
  name: string;
  isActive: boolean;
};

const users3: User[] = [
  { id: 1, name: "Arpit", isActive: true },
  { id: 2, name: "Rahul", isActive: false },
  { id: 3, name: "Priya", isActive: true }
];

const activeUsers = users3.filter(user => user.isActive);

console.log(activeUsers);

// reduce 

const salaries: number[] = [50000, 60000, 55000];

const totalSalary = salaries.reduce(
  (total: number, current: number) => total + current,
  0
);

console.log("Total Salary:", totalSalary);

// some 

const users4 = [
  { name: "Arpit", active: true },
  { name: "Rahul", active: false },
  { name: "Priya", active: true }
];

const hasInactiveUser = users4.some(user => !user.active);

console.log("Has inactive user:", hasInactiveUser);

// every 

const users5 = [
  { name: "Arpit", active: true },
  { name: "Rahul", active: true },
  { name: "Priya", active: true }
];

const allActive = users5.every(user => user.active);

console.log("All users active:", allActive);