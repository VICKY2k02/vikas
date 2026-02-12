// SECTION 1: Data Types Tasks.

// TASK:1 - Primitive Data Types Practice:

let name = "Vikas";
let age = 24;
let isLearning = true;
let undefinedVariable;
let value = null;

  
// print each values.
//print type of each variable.

console.log("Your Name is:", name, typeof(name)); //Output :- Your Name is: Vikas string
console.log("Your Number is:", age, typeof(age)); //Output :- Your Number is: 24 number
console.log("Are you learning JS? :", isLearning, typeof(isLearning)); //Output :- Are you learning JS? : true boolean
console.log("Undefined Value is :", undefinedVariable, typeof(undefinedVariable)); //Output :- Undefined Value is : undefined undefined
console.log("Your value is :", value, typeof(value)); //Output :- Your value is : null object


    // Difference between undefined and null:

        //Undefined:
        // A variable that has been declared but not assigned a value.
        // Automatically assigned by JavaScript.
        // Means "value not assigned yet".

        //Null:
        //A value that is intentionally assigned.
        // Represents "no value" or "empty value".
        // Must be assigned manually.



// TASK 2 – Array Practice:

    let colors = ["red", "green", "blue", "yellow", "black"];
    console.log("First Element iS:", colors[0]);    //The out put is - First Element iS: red.
    console.log("Last Element iS:", colors[colors.length -1]);  //The out put is - Last Element iS: black.
    console.log("Third Element iS:", colors[2]);    //The out put is -Third Element iS: blue.
    console.log("Total no.of Element iS:", colors.length);   //The out put is - task2.js:46 Total no.of Element iS: 5.


//TASK 3 – Object Practice:

let student = {
name: "Naveen",
skills: ["HTML", "CSS", "JS"],
experience: "1 year",
location: "India"
}

console.log("Name:",student.name);      //The output is - Name:Naveen.
console.log("First Skill:",student.skills[0]);     //The output is - First Skill: HTML.

let Role="Frontend Developer";
console.log("Role:",Role);  //The output is - Role: Frontend Developer.

console.log("All Details of Student:",student);

// SECTION 2 - Arthimetic Operators tasks:

//TASK 4- Basic Calculator:
 
let x=10;
let y=3;

console.log("Addition is :", x + y);        //output :- Addition is : 13
console.log("Subtraction is :", x - y);     //output :- Subtraction is : 7
console.log("Multiplication is :", x * y);  //output :- Multiplication is : 30
console.log("Division is :", x / y);        //output :- Division is : 3.3333333333333335
console.log("Modulous is :", x % y);        //output :- Modulous is : 1
console.log("Exponentiation is", x ** y);   //output :- Exponentiation is 1000

// TASK 5 -Increment & Decrement Logic:

let a = 5;

let postIncrement = a++;
console.log("Post-increment (a++):");
console.log("Value of a after post-increment:", a); // 6
console.log("Value stored in postIncrement:", postIncrement); // 5

// Reset a
a = 5;

let preIncrement = ++a;
console.log("Pre-increment (++a):");
console.log("Value of a after pre-increment:", a); // 6
console.log("Value stored in preIncrement:", preIncrement);  // 6


// Explanation:
// This happens because c++ is a post-increment operation.
// The value of c is first assigned to c (i.e., c = 2), and then c is incremented (i.e., c becomes 3).
// However, the incremented value is not assigned back to c, so c remains 2.

// Unexpected output example:

let b = 2;
b = b++;
console.log(b);
// Explanation:
// This happens because c++ is a post-increment operation.
// The value of c is first assigned to c (i.e., c = 2), and then c is incremented (i.e., c becomes 3).
// However, the incremented value is not assigned back to c, so c remains 2.




//SECTION 3 – Assignment Operators:

// TASK 6 – Power Assignment:

let num = 3;
 num **=4;
 console.log("The Result:" , num); //The Result: 81.

//Explaination:
//Here the num value is multiplying 4 times 3*3*3*3 = 81.


// SECTION 4 – Comparison Operators:

// TASK 7 – Equality Testing:

console.log(5 == "5") //output :- true
console.log(5 === "5") //output :- false
console.log(0 == false) //output :- true
console.log(0 === false) //output :- false

  //Explaination :-
    // == :- LoosyTypeEqual :- is the loose equality operator. It checks if the values are equal, but it performs type coercion if the types are different. This means it converts one or both operands to a common type before comparing.
    // === :- StrictlyTypeEqual :- It is a StrictlyType equality operator. It checks if both the types and values are equal.

// SECTION 5 – Logical Operators:

// TASK 8 – Login System Logic:

let username = "admin"
let password = "1234"

if (username=="admin" && password=="1234"){
    console.log("Login Success")
}

else {                                              // IF the condition was true the output is Login Success.
    console.log("Login Failed");                   // IF the condition was false the output is Login Failed.
}

// Task-9: OR Condition.

let role = "manager";

if (role == "admin" || role == "manager") {
    console.log("Access Granted");
}


// Task-10: NOT Operator:
let isLoggedIn = false;

if (!isLoggedIn) {
    console.log("User is NOT logged in" , isLoggedIn); //output-User is NOT logged in false.
}


// SECTION 6 – Ternary Operator.
// TASK 11 – Voting Eligibility.

let Age = 17;
let eligibility = Age >= 18 ? "Eligible" : "Not Eligible";
console.log(eligibility);



// FINAL TEAM CHALLENGE – Mini Profile System:

let user = {
  name: "Arun",
  age: 22,
  isLoggedIn: true,
  skills: ["JS", "React"]
};

//Print name and first skill.
console.log("Name:", user.name);    // The output is Arun.
console.log("First Skill:", user.skills[0]); // The output is JS.

//Check if age >= 18.
if (user.age >= 18) {
  console.log("User is 18 or older");   //if the condition was true The output is User is 18 or older.
} else {
    console.log("User is Under 18");    //if the condition was false the output is User is Under 18.
}

//If logged in AND age >= 18 → Access Allowed.
if (user.isLoggedIn && user.age >= 18) {
  console.log("Access Allowed");            //if the condition was true The output is Access Allowed.
} else {
  console.log("Access Denied");             //if the condition was false the output is Access Denied.
}

//Use ternary for login status.
let loginStatus = user.isLoggedIn ? "Logged In" : "Not Logged In";
console.log("Login Status:", loginStatus);                              //Login Status: Logged In.

//Increase age using increment operator.
user.age++;
console.log("Age after increment:", user.age);                          //The output is Age after increment: 23.

//Add new skill dynamically.
user.skills.push("Node.js");
console.log("Updated Skills:", user.skills);                           //The output is Updated Skills: ['JS', 'React', 'Node.js']
                                                                                    // 0:"JS".
                                                                                    // 1:"React".
                                                                                    // 2:"Node.js".
                                                                                    // length:3.















