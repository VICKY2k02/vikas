// SECTION 1 – String & Type Conversion Tasks
// TASK 1 – Full Name Builder


let firstName = "Naveen"
let lastName = "Kumar"
console.log(firstName + " " + lastName);    //The output is Naveen Kumar
console.log(`${firstName} ${lastName}`);    //Template string - The output is Naveen kumar
let fullName = `${firstName}${lastName}`
console.log(fullName.length);               //Length of full name - The output is 11



//TASK 2 – Predict Type:
console.log(typeof("5" + 2));       // The output is - string
console.log(typeof(5 + "2"));       // The output is - string
console.log(typeof(true + 1));      // The output is - number
console.log(typeof(false + "hello")); // The output is - string
console.log(typeof(null + 1));      // The output is - number

//Explaination :- 
// String :- Here a string anything is String.
// typeof("5" + 2) :- one String and one number also converts to String. 
// typeof(5 + "2") :- one number and one String also converts to String.
// typeof(true + 1) :- Here the boolean value contains are true or false. true means "1" false means "0". now the boolean value true contains a number "1" now we adding the boolean and number converts a number.
// typeof(false + "hello") :- one boolean and one String also converts to String.
// typeof(null + 1) :- The null value represents a "0" and concatinating a number so it gets a number.


// TASK 3 – Manual Type Conversion
// Convert using Number():

console.log(Number("100"));      // The output is - 100
console.log(Number("10.5"));     // The output is - 10.5
console.log(Number("abc"));      // The output is - NaN
console.log(Number(true));       // The output is - 1
console.log(Number(false));      // The output is - 0
console.log(Number(null));       // The output is - 0
console.log(Number(undefined));  // The output is - NaN

// TASK 4 – Boolean Truthy/Falsy Test
// Print Boolean result of:

console.log(Boolean(0));      //The output is - false
console.log(Boolean(1));     //The output is - true
console.log(Boolean(""));      //The output is - false
console.log(Boolean("hello"));    //The output is - true
console.log(Boolean(null));      //The output is - false
console.log(Boolean(undefined)); //The output is - false
console.log(Boolean([]));    //The output is - true
console.log(Boolean({}));      //The output is - true

// Explaination:
// Boolean([])     // true  --[] is an array, An array is an object, All objects are truthy in JavaScript
// Boolean({})     // true  --It runs because {} is an object, objects are true value

//SECTION 2 – Flow Control Tasks:
// TASK 5 – Even or Odd:

 let num = 7

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}                           // The output is Odd


//TASK 6 – Grade System:

let marks = 70
if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 75 && marks <= 89) {
    console.log("Grade B");
} else if (marks >= 50 && marks <= 74) {
    console.log("Grade C");
} else {
    console.log("Fail");
}                               // The output "75" is : Grade c


//TASK 7 – Switch Day Finder:

// Using switch, print:
// Wednesday
let dayNumber = 3
switch(dayNumber){

    case 1:
    console.log("Monday");
    break;

   case 2:
    console.log("Tuesday");
    break;

     case 3:
    console.log("Wednesday");
    break;

     case 4:
    console.log("Thursday");
    break;

     case 5:
    console.log("Friday");
    break;

     case 6:
    console.log("Saturday");
    break;

     case 7:
    console.log("Sunday");
    break;

    default:
    console.log("There is No other days after dayNumber");
}                                                               // The output is Wednesday


//SECTION 3 – Loop Tasks

// TASK 8 – Reverse Counting
// Using for loop print:

let numb = 5;
for(let i = numb; i >= 1; i--) {
    console.log(i);
}                                   //The output printing reverse counting:
                                    // 5
                                    // 4
                                    // 3
                                    // 2
                                    // 1


//TASK 9 – Multiplication Table
// Print table of 3:

let number = 3
for(let i=1; i<=10; i++){
    console.log(`${number}*${i}=${number*i}`);
}                    //The output is 3 table:
                    //3*1=3
                    //3*2=6
                    //3*3=9
                    //3*4=12
                    //3*5=15
                    //3*6=18
                    //3*7=21
                    //3*8=24
                    //3*9=27
                    //3*10=30


//TASK 10 – Sum of First 10 Numbers
// Using for loop calculate:
// 1 + 2 + 3 + ... + 10

let sum = 0;
for(i=1; i<=10; i++){
    sum +=i;
}
console.log(`Final Sum:${sum}`);                //The output is : Final Sum:55


// BONUS – Mentor Level.

if("0"){
console.log("true block");
}else{
console.log("false block");
}                               //The output is true block
                                // Predict output and explain WHY.

                                //Explaination:
                                //if("")   //false block - An empty string means no value content, so "JavaScript" treats it as false
                                //if(" ")  //true block- space is still a character so the value is 0
                                //if("0")  //true block- the value is 0 so it is a non-empty string, so it is a true

