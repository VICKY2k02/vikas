// 1.task01:Create a var variable. Declare, initialize, reassign, redeclare and print the final value.

var a=10;  //Declare, Initialize
    a=20;   //reassign
    a=30;   //redeclartion redeclaration

console.log(a)    //The output is 30 

//2.Task2:Create a let variable. Declare, initialize, reassign, attempt redeclaration and print value.

let  b=10; // Declare , initialize.
     b=20;  //reassign.
     b=30;  //redeclaration.
 
console.log(b);

//3.Task3:Create a const variable. Declare and initialize. Attempt reassigning and redeclaring.

const c=10;
    // c=20;  reassign is not possible in const variable it leads to TYPE ERROR.  
    // c=30;  redeclaration is not possible in const variable.

    console.log(c);


//4.Task4: Create one var, one let, and one const variable. Reassign only allowed variables and print all.

var a=10;   //assign value.
    a=20;   //reassign value.
console.log(a);

let d=20;   //assign value.
    d=30;   //reassign value.
console.log(b);

const e=30;
console.log(c); // reassign is not possible in const variable it leads to TYPE ERROR. redeclaration is not possible in const variable.


//5.Task5: Print one variable using console.log(), alert(), and document.writeln().

var a="Hello";
    console.log(a);
    alert(a);   //The output will be pop-up in the screen whenever we refresh or relode the page.
    document.writeln("hello"); //The output will displayed on  userinterface(UI).



//6.Task6:Use confirm(). Store the result in a let variable and print it using console.log().

let result=confirm("Do You Want To Proceed");
console.log(result); //The output will be displayed on developer tool as the value is (true , false) it depends on users action.


//7.Task7:Use prompt(). Store user input and print using console.log() and document.writeln().

var input=prompt("Enter Your Name");
    console.log("hello"+ input);    //The output will be developer tool.
    document.writeln("hi" +input); //The output will be on userinterface(UI).


//8.Task8:Print one variable using console.log(), console.warn(), and console.error().

var value="Good Morning";
    console.log(value);         //regular output
    console.warn(value);        //for warn
    console.error(value);       //for error



//9.Task9:Create var price = 100. Reassign to 200. Print before and after values.
    

  var price=(100);
  console.log("Before price:"+ price)   //the output is before assign value 100.
      price=200;
console.log("After price:"+ price) //the output is after reassign value 200.


//10.Task10:Create a let boolean variable. Assign true, reassign false, and print final value.

    let print=true; //assined true value.
    print=false;    //reassigned false value.
    console.log(print); //final value is false.


//11.Task11:Create a string variable. Reassign a new string and print both values separately.

let msg = "vikas";
    console.log(msg);

    msg="kumar";    //reassigned new string.
    console.log(msg); 


//12.Task12:Redeclare the same var variable three times with different values and print final value.

var day="Monday";
var day="Tue";
var day="wed";
console.log(day);

//13.Task13:Create a const object. Modify one property value and print the object.

const person ={
    name:"vikas",
    age:"24",
    city:"hyd"

};

person.city="rjy";  //modified property value.

console.log(person); //output is modified value "rjy".


//14.Task14:Create one var, one let, and one const variable. Print using console.log(), console.warn(), console.error().


var name = "mohan";
let age = 24;
const isDeveloper = false;

console.log("Name:", name);  //for regular output.
console.warn("Age:", age);   //for warnings.
console.error("Is Developer:", isDeveloper);    //for error.


