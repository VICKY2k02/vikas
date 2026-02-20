//LEVEL 1 – Array Methods Tasks
// Task 1 – forEach():-

let names = ["Arun", "Bala", "Charan", "David"]
    console.log("Names:-");
names.forEach((currentElement, Index, TotalArray)=>{
    console.log(Index + 1 + " - " + currentElement);    //Names:-
                                                        //1 - Arun
                                                        //2 - Bala
                                                       //3 - Charan
                                                       //4 - David
})

console.log("");        //gaps b/w outputs


//Task 2 – map():-

let Numbers = [2, 4, 6, 8]

// create new array with squares
let squares = Numbers.map(function(num) {
    return num * num;
});
console.log(squares);       // Output: [4, 16, 36, 64]

console.log("");


//Task 3 – filter()
let products = [
{ name: "Mobile", price: 15000},
{ name: "Laptop", price: 60000},
{ name: "Keyboard", price: 1000},
{ name: "Monitor", price: 12000}
];
// filter products with price > 10000
let filterVal = products.filter((c,i,t)=>{
    return c.price > 10000;
})
console.log(filterVal);             //{ name: "Mobile", price: 15000 },
                                    //   { name: "Laptop", price: 60000 },
                                    //   { name: "Monitor", price: 12000 }

console.log("");


// Task 4 – find()

// Using same products array,
let product = products.find((c,i,t)=>{
    return c.price > 10000;
})
console.log(product);           //{name: 'Mobile', price: 15000}

console.log("");

//Task 5 – reduce()
let Marks = [80, 75, 90, 60]
// Calculate total marks.
let Total = Marks.reduce((sum, mark)=> sum + mark, 0)
console.log("Total marks",Total);

// Calculate average marks.
let average = Total / Marks.length;
console.log("Average Marks:-", average);        //Average Marks:- 76.25

console.log("");

//Task 6 – some()
let Ages = [12, 15, 17, 22]
// Check if any person is above 18.
let isAbove18 = Ages.some(age => age > 18);
console.log("Any person above 18:", isAbove18);         //Any person above 18: true

console.log("");

// Task 7 – every()
let Scores = [60, 70, 80, 90]
// Check if all students passed (pass mark = 35).
let allPassed = Scores.every(score => score >= 35)
console.log("All students passed:-", allPassed);            //All students passed: true

console.log("")

// Task 8 – sort()
let Prices = [200, 40, 1000, 5, 75]
// Sort ascending.
let ascending = Prices.sort((a,b)=>{
    return(a-b);
})
console.log("Ascending order:-",ascending);       // Ascending order:-[5, 40, 75, 200, 1000]

// Sort descending.
let descending = Prices.sort((a,b)=> {
    return(b - a);
})
console.log("Descending order:-",descending);       //Descending order:- [1000, 200, 75, 40, 5]


console.log("");

// LEVEL 2 – String Method Tasks
// Task 9 – Capitalize First Letter
let Name = "naveen"
// Convert to: Naveen
// (Use only slice + toUpperCase)
let Capitalized = Name.slice(0,1).toUpperCase() + Name.slice(1);
console.log("Capitalize First Letter:-",Capitalized);           //Capitalize First Letter:- Naveen

console.log("");

// Task 10 – Count Letter
let Text = "javascript"
// Count how many times letter "a" appears.
// (Use split)

let count = Text.split("a").length - 1;
console.log("Total no of a letters:-",count);           //Total no of a letters:- 2

console.log("");

//Task 11 – Clean Input
let UserInput = " Hello World "
// Remove extra spaces.
let trimVal = UserInput.trim()
console.log("Removed extra spaces:-",trimVal);            //Removed extra spaces:- Hello World

// Convert to uppercase.
let uppercase = UserInput.toUpperCase()
console.log("Uppercase:-",uppercase);       //Uppercase:-  HELLO WORLD 


// Task 12 – Replace & Check
let Sentence = "I love python"
// Replace python with javascript.
let replaceVal = Sentence.replace("python", "javascript")    
console.log(replaceVal);            //  // I love javascript

// Check if sentence starts with "I".
let start1 = Sentence.startsWith("I")
console.log(start1);        //true

// Check if sentence ends with "javascript".
let end = replaceVal.endsWith("javascript")
console.log(end);        //true


// BONUS – Real World Challenge (Employee Salary System)
let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 60000 }
];
// 1. Get employees salary > 30000.
let highSalary = employees.filter(emp => emp.salary > 30000);
console.log(highSalary);                         // 0: {name: 'B', salary: 40000}
                                                // 1: {name: 'D', salary: 60000}
                                                // length: 2
                                            
// 2. Find first employee salary > 30000.
let firstHighSalary = employees.find(emp => emp.salary > 30000);
console.log(firstHighSalary);                       //name: 'B', salary: 40000

// 3. Calculate total salary.           
let totalSalary = employees.reduce(
  (total, emp) => total + emp.salary,
  0
);
console.log(totalSalary);           //140000

// 4. Check if any employee salary < 20000.
let  lowSalaryExists = employees.some(emp => emp.salary < 20000);
console.log(lowSalaryExists);                                   //true

// 5. Check if all employees salary > 10000.
let allAbove10k = employees.every(emp => emp.salary > 10000);
console.log(allAbove10k);                               //true





