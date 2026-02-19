// 1■■ Employee Data Merge System:-

let teamA = [
{ name: "John", role: "Developer" },
{ name: "Arun", role: "Tester" }
];

let teamB = [
{ name: "Naveen", role: "Designer" },
{ name: "David", role: "Manager" }
];

// • Merge both teams using spread operator.

let mergedTeam = [...teamA , ...teamB]
console.log(mergedTeam);
 
// • Add one new employee manually.

let sample = [mergedTeam]
sample.push({name:"vikas", role:"Support"});
console.log(sample);

// • Clone the final array into backupTeam.

let backupTeam = [...mergedTeam];
console.log(backupTeam);

// • Remove last employee.

let sample2=[mergedTeam];
sample2.pop();
console.log(sample2);

// • Add new employee at first position.

let sample3 = [mergedTeam];
mergedTeam.unshift({name:"pavan", role:"Teamlead"});
console.log(sample3);

console.log("");


// 2■■ Salary Management (Object Spread)
let emp1 = { name: "John", salary: 30000 };
let emp2 = { name: "John", salary: 45000 };

// • Merge both objects
let mergedEmp = { ...emp1, ...emp2 };
console.log("merge data is : ",mergedEmp);          //merge data is : 
                                                    //{name: 'John', salary: 45000}
                                                    // name : "John"
                                                    // salary : 45000
//• Update salary to 50000

mergedEmp.salary = 50000
console.log("Updated Salary to 50k : ", mergedEmp);  //Updated Salary to 50k :
                                                    //{name: 'John', salary: 50000}

 // • Clone into new object
 let newEmp = { ...mergedEmp};           
 console.log("NewEmp:-",newEmp);        //NewEmp:- 
                                        //{name: 'John', salary: 50000}
                                        //name:  "John"
                                        // salary: 50000
                                        
 
// • Destructure name and salary
let { name, salary } = newEmp;
console.log(name,salary);               // john 50000


// • Print: "John earns 50000"
console.log(name + " earns " + salary);         //John earns 50000

console.log("");



// 3■■ Product Cart System
let cart = ["Laptop", "Phone", "Tablet", "Watch"];

// • Remove last product
cart.pop()
console.log("Removed last data:- ",cart);          //Removed last data:-
                                                 //['Laptop', 'Phone', 'Tablet']

// • Add two products at end
cart.push("watch","mobile")
console.log("Added product at end:-",cart);           //   Added product at end:- 
                                                    //['Laptop', 'Phone', 'Tablet', 'watch', 'mobile']

// • Add one product at beginning
cart.unshift("headphone")
console.log("Added data at beginning:-",cart);    //Added data at beginning:-
                                                //['headphone', 'Laptop', 'Phone', 'Tablet', 'watch', 'mobile]

// • Remove first product
cart.shift()
console.log("removed data at beginning:-",cart);    //removed data at beginning:-
                                                    // ['Laptop', 'Phone', 'Tablet', 'watch', 'mobile']

// • Replace "Tablet" with "Camera" using splice
let indexTablet = cart.indexOf("Tablet");
if (indexTablet !== -1) {
    cart.splice(indexTablet, 1, "Camera");
}
console.log("Replacing Tablet with Camera:-",cart); //Replacing Tablet with Camera:-
                                                    //['Laptop', 'Phone', 'Camera', 'watch', 'mobile']

// • Check if "Phone" exists
let hasPhone = cart.includes("Phone");
console.log("Phone exists:", hasPhone);

// • Find index of "Watch"
let watchIndex = cart.indexOf("Watch");
console.log("Index of Watch:", watchIndex);

console.log("");


//4■■ Student Marks Analyzer
let marks = [78, 90, 66, 84, 99, 45];

// • Sort marks (correct way using compare function)
let sortVal = marks.sort()
console.log(sortVal);       // [45, 66, 78, 84, 90, 99]

// • Reverse sorted marks
let ReverseVal = marks.reverse()
console.log(ReverseVal);            //[99, 90, 84, 78, 66, 45]

// • Slice top 3 marks
let top3 = marks.slice(0, 3);
console.log("Top 3 Marks:-", top3);      //Top 3 marks:-        
                                        //[99, 90, 84]

// • Find index of 84
let index84 = marks.indexOf(84);
console.log("Index of 84:-", index84);       //Index of 84:- 2

// • Replace 45 with 50 using splice
let index45 = marks.indexOf(45);
if (index45 !== -1) {
    marks.splice(index45, 1, 50);
}
 console.log(marks);
 
console.log("");



// 5■■ Nested Data Extractor
let company = ["Stackly",["Frontend", ["HTML", "CSS", ["JavaScript"]]]];

// • Extract "JavaScript" normally
let jsNormal = company[1][1][2][0];
console.log("Normal:", jsNormal);                   //Normal: JavaScript

// • Extract using destructuring
let [ companyName, [dept, [tech1, tech2, [jsDestruct]]]] = company;
console.log("Destructuring:", jsDestruct);                           //Destructuring: JavaScript

// • Flatten entire array
let flatArray = company.flat(Infinity);
console.log("Flattened:", flatArray);               // ['Stackly', 'Frontend', 'HTML', 'CSS', 'JavaScript']

// • Replace "CSS" with "Tailwind"

company[1][1][1] = "Tailwind";
console.log("Updated Company:", company);


// 6■■ Attendance System (Rest Operator)
function attendance(day, ...students) {

    // Print day
    console.log("Day:", day);       //Day: Monday

    // Print total students count
    console.log("Total Students:", students.length);        //Total Students: 4


    // Print first student
    console.log("First Student:", students[0]);         //First Student: John

    // Print last student
    console.log("Last Student:", students[students.length - 1]);    //Last Student: Naveen

    // Return all students
    return students;
}

// Function call
let allStudents = attendance(
    "Monday",
    "John",
    "Arun",
    "David",
    "Naveen"
);

console.log("");


//7■■ Inventory Management
let stock = [10, 20, 30, 40, 50];

// • Fill last two values with 0
stock.fill(0 , stock.length-2)
console.log(stock);             // [10, 20, 30, 0, 0]

// • Add 60 and 70 at end
stock.push("60","70")
console.log(stock);             //[10, 20, 30, 0, 0, '60', '70']

// • Remove first value
stock.shift()
console.log(stock);             //[20, 30, 0, 0, '60', '70']

// • Find if 30 exists
let has30 = stock.includes(30);
console.log("30 exists:", has30);   //30 exists: true

// • Get last index of 20
let lastIndexVal = stock.lastIndexOf(20)
console.log("Last Index 20:-" , lastIndexVal);       //Last Index of 20:-0

// • Reverse the stock
stock.reverse()
console.log(stock)                          //['70', '60', 0, 0, 30, 20]

console.log("");

// 8 User Profile System
let user = {
Name: "Naveen",
role: "Developer",
skills: ["HTML", "CSS", "JavaScript"]
};

// • Destructure name and role
let { Name, role } = user;
console.log("Name:-", Name);
console.log("Role:-", role);         //Name:- Naveen
                                     //Role:- Developer

// • Add one new skill usiNng spread
user.skills = [...user.skills, "React"];
console.log("Updated Skills:-", user.skills);       //Updated skills:- ['HTML', 'CSS', 'JavaScript', 'React']

// • Clone entire user object
let clonedUser = { ...user };
console.log("cloned data:-",clonedUser);


// • Merge with new object { experience: "2 Years" }
let updatedUser = { ...clonedUser, experience: "2 Years" };
console.log("Merged User:", updatedUser);           
                                            // Name: "Naveen"
                                            // role: "Developer"
                                            // skills: (4) ['HTML', 'CSS', 'JavaScript', 'React']


// • Print skills length
console.log("Skills Count:", updatedUser.skills.length);        //Skills Count: 4


// 9 Sales Report
let sales = [12000, 45000, 22000, 8000, 15000];

// • Sort ascending
let ascendingSales = [...sales].sort((a, b) => a - b);
console.log("Ascending Sales:-", ascendingSales);            //Ascending Sales:- [8000, 12000, 15000, 22000, 45000]

// • Sort descending
let descendingSales = [...sales].sort((a, b) => b - a);
console.log("Descending Sales:-", descendingSales)           //Descending Sales:-[45000, 22000, 15000, 12000, 8000]

// • Slice middle 3 sales
let middleSales = sales.slice(1, 4);
console.log("Middle 3 Sales:-", middleSales);            //Middle 3 Sales:-[45000, 22000, 8000]

// • Replace lowest sale with 10000
sales.splice(0, 1, 10000);
console.log("Updated Sales:-", sales);               //Updated Sales:- [10000, 45000, 22000, 8000, 15000]

// • Check if 50000 exists
let has50000 = sales.includes(50000);
console.log("50000 exists:-", has50000);             //50000 exists:- false

console.log("");

// ■ Data Cleaning System
let rawData = [1, 2, null, 4, undefined, 6, [7, 8], { a: 10 }];

// • Print last element using length
let lastElement = rawData[rawData.length - 1];
console.log("Last Element:-", lastElement);              //Last Element:- {a: 10}

// • Flatten array
let flatData = rawData.flat(Infinity);
console.log("Flattened Data:-", flatData);          //Flattened Data:- [1, 2, null, 4, undefined, 6, 7, 8, {…}]

// • Remove last element
flatData.pop()
console.log("Removed Last Data:-",flatData);             //Removed Last Data:-[1, 2, null, 4, undefined, 6, 7, 8]


// • Add 100 at end
flatData.push(100);
console.log("After adding 100:", flatData);     //After adding 100: [1, 2, null, 4, undefined, 6, 7, 8, 100]

// • Clone cleaned array
let cleanBackup = [...flatData];
console.log("Cloned Array:", cleanBackup);      //Cloned Array: (9) [1, 2, null, 4, undefined, 6, 7, 8, 100]
