//JavaScript Team Practice Tasks

// LEVEL 1 – Loop Practice:-
//Task 1 – for...of (String):-
let words = "developer";
let count = "0";
let vowels = "aeiou";
let vowelResult = "";

//- Print each character using for...of
    for(let char of words){
    console.log(char);   // printing each character
    count++;

// Print vowels only
    if(vowels.includes(char)){
        vowelResult += char;
    }
}

console.log("Total Letters:-", count);      //Total Letters:-9
console.log("Vowels:-", vowelResult);       //Vowels:-eeoe


//Task 2 – for...of (Array):-

let skills = ["HTML","CSS","JavaScript","React"]
let coun = 0 ;
for(let a of skills){
    console.log(a);
    console.log("I know:-"+a);  //The output is I know:-HTML
                                //The output is I know:-CSS
                                //The output is I know:-Javascript
                               //The output is I know:-React
    coun++;
}
console.log("Total Skills:-" , coun);       //Total Skills:-4


// Task 3 – for...in (Object):-

let employee = {
    name: "Arun",
    role: "Tester",
    salary: 30000,
    experience: "2 years"
};

// Print all keys
for (let key in employee) {
    console.log(key);               //name
                                    //role
                                    //salary
                                    //experience
}
//- Print all values
for (let key in employee) {
    console.log(employee[key]);    //Arun
                                   //Tester
                                   //30000
                                   //2 years
}
//- Print: name : Arun
console.log("Name:-",  employee.name);      // Name:- Arun


// LEVEL 2 – Function Practice:

// Task 4 – Simple Function:-
// Create function table(num)
    function table(num){
   for(let i=1; i<=10; i++){
   console.log(num + "X"+ i + "="+(num*i));
}}
// Call: table(5)
table(5);                    //5X1=5
                            //  5X2=10
                            //  5X3=15
                            //  5X4=20
                            //  5X5=25
                            //  5X6=30
                            //  5X7=35
                            //  5X8=40
                            //  5X9=45
                            //  5X10=50


// Task 5 – Return Keyword:
// Create function square(num)
    function square(num){
        // Return square value
    return num*num;
    }

        // Store in variable and print.
    let result = square(22);

    console.log(result);            //The output is:- 484
    
//Task 6 – Default Parameter:-
// Create function register(name, department, role="Developer")
     function register(name, department, role="Developer"){
        console.log("Name:-", name);
        console.log("Department:-", department);
        console.log("Role:-", role);
     }
// Call once with role
register("Vikas", "IT", "Tester");      //Name:-Vikas
                                        //Department:-IT
                                        //Role:-Tester
// Call once without role
register("mohan","IT");             // //Name:-Vikas
                                        //Department:-IT
                                        //Role:-Developer


// LEVEL 3 – Scope + Hoisting
// Task 7 – Scope Prediction
function checkScope(){
if(true){
var a = 100
let b = 200
}
console.log(a)      //The output is 100 --- this is a global scope
// console.log(b)      //let is a block scoped - Referenceerror: b is not defined-the block scope we can write only outside the block

}   
checkScope()
////Explaination :-
    // 1. var a = 100 is function-scoped, so it's accessible throughout the checkScope() function, even outside the if block. Hence, console.log(a) prints 100.
    // 2. let b = 200 is block-scoped, so it's only accessible within the if block. Trying to access b outside the block results in a ReferenceError.
    // 3. The error occurs because b is not defined in the scope of the console.log(b) statement.

//Task 8 – Hoisting

console.log(x)                  //undefined
var x = 10
    // console.log(y)          //ReferenceError: Cannot access 'y' before initialization
let y = 20

    //Explaination :-
    //Here the var scope is var = Global Scope, let scope is let = Block Scope
    //1. var x = 10: The variable x is hoisted to the top of the scope, but its assignment (= 10) happens at the original line. So, console.log(x) prints undefined.
    //2. let y = 20: The variable y is also hoisted, but it's not initialized until the assignment line. Accessing y before initialization is a Temporal Dead Zone (TDZ) error, throwing a ReferenceError.



 //   LEVEL 4 – Function Types
// Task 9 – Named Function
// Create function greet(name) → print welcome message.
function greet(name){
    console.log("Welcome:"+ name + "!");
}
//function call
greet("vikas");     //The output is - vikas

//Task 10 – Anonymous Function
// Store function in variable that adds two numbers.
let anonymous = function(a,b){
    return a+b;
}
let add = anonymous(5,5)
console.log(add);

//Task 11 – Arrow Function
// Create arrow function to subtract two numbers.

let arrow = function(a,b){
    return a-b;
}
let sub = arrow(15,5)
console.log(sub);

//LEVEL 5 – Callback & Higher Order
// Task 12 – Callback
function adds(a,b){
return a+b;                    // - add function
}
function subtract(a,b){
return a-b;                   // - subtract function
}
function calculate(operation, a, b){
    let result = operation(a,b);
    console.log("Results:-",result);
}

//function call:
calculate(adds,10,5);           //Results:-15
calculate(subtract,20,10);      //Results:-10

// LEVEL 6 – Currying
// Task 13
function total(a){
return function(b){
return function(c){
    console.log(a+b+c);
}
}
}
total(5)(10)(15)        //30

// LEVEL 7 – Generator
// Task 14 – Reward Generator
// Create generator function* reward()
function* reward(){
// Yield:
yield "Level 1 Completed"
yield "Level 2 Completed"
yield "Level 3 Completed"
yield "Team Winner"
}
let rewards = reward();
// - .next()
console.log(rewards.next().value);      //Level 1 Completed
console.log(rewards.next().value);      //Level 2 Completed
console.log(rewards.next().value);      //Level 3 Completed
console.log(rewards.next().value);      //Team Winner
// - for...of
for(let a of reward()){
    console.log(a);                         //Level 1 Completed
    }                                        //Level 2 Completed
                                            //Level 3 Completed
                                            //Team Winner



// FINAL TEAM CHALLENGE
// Build small system using ONLY above concepts:

// - Object → team details
    let team = {
        name: "front-end team",
        department: "developer",
        teammembers: "5",
        project: "web App"
    };
    console.log("");                    // for gap b/w two outputs
    console.log("TEAM DETAILS:-");      //TEAM DETAILS:-

// - for...in → print details:-

    for(let t in team){
        
        console.log(t + ":" + team[t]);      // name: front-end team
                                             // department: developer
                                             // teammembers: 5
                                             // project: web App     
        
    }
    console.log("");                // // for gap b/w two outputs
  
// - Generator → rewards:-

    function* reward(){
        yield "Level 1 Completed"
        yield "Level 2 Completed"
        yield "Level 3 Completed"
        yield "Team Winner"
    }

    console.log("REWARDS:-");        //REWARDS:-
    for(let r of reward()){
        console.log(r);                 //Level 1 Completed
    }                                  //Level 2 Completed
                                      //Level 3 Completed
                                     //Team Winner
    
// - Callback → score calculation:-

function addscore(a,b){
    return a+b;
}

function calculatescore(operation, a, b){
    console.log("Total score:-", operation(a,b));            //Total score:-115
}
calculatescore(addscore,100,15);              

// - Default parameter:-

function registerteam(name, role = "developer"){
    console.log("Registered:-", name, "-", "Role:-", role);       // Registered:- Vikas - Role:- Tester
}                                                                 //Registered:- arjun - Role:- developer

registerteam("Vikas", "Tester");            
registerteam("arjun");


console.log("");


// - Currying for bonus calculation:-
function bonus(points){
    return function(multiplier){
        return points*multiplier;
    };
}
let calculatebonus = bonus(20);
console.log("Bonus:-", calculatebonus(5));          //Bonus:-100

// - Named + Arrow function:-

let arrowfun = (teamName)=>{
    console.log("Welcome:-", teamName);     //Welcome:- front-end team
}
arrowfun(team.name);


