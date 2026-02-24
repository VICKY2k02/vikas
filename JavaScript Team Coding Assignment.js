// LEVEL 1 – DATE TASKS:

// Task 1 – Digital Clock:
// Create a real-time digital clock.
// Requirements:-
// - Show current time in format: HH : MM : SS AM/PM
// - Update every second using setInterval()
// - Stop the clock after 10 seconds using clearInterval()
// store interval in variable


let timer = setInterval(() => {
   let timeval = new Date();
   let tt = (timeval.toLocaleTimeString());
   console.log(tt);
}, 1000);   // 1 second is better for clock


// stop after 10 seconds
setTimeout(() => {
   clearInterval(timer);
   console.log("Clock stopped");
}, 10000);  //the clock after 10 seconds using clearInterval()

console.log("");

// Task 2 – Age Calculator
// Ask user to enter Birth Year, Birth Month, Birth Date.
//Calculate current age in years, months, and days.
//Bonus Output Example: You are 21 years, 4 months and 12 days old.

// // Ask user details
// let birthYear = Number(prompt("Enter Birth Year:"));
// let birthMonth = Number(prompt("Enter Birth Month (1-12):"));
// let birthDate = Number(prompt("Enter Birth Date:"));

// // Current date
// let today = new Date();

// // Birth date (month starts from 0 in JS)
// let dob = new Date(birthYear, birthMonth - 1, birthDate);

// // Calculate difference
// let years = today.getFullYear() - dob.getFullYear();
// let months = today.getMonth() - dob.getMonth();
// let days = today.getDate() - dob.getDate();


// if (days < 0) {
//     months--;
//     let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
//     days += lastMonth.getDate();
// }

// // Adjust if months negative
// if (months < 0) {
//     years--;
//     months += 12;
// }

// // Output
// console.log(`You are ${years} years, ${months} months and ${days} days old.`);

console.log("");

// LEVEL 2 – ASYNCHRONOUS TASKS

// Task 3 – Execution Order
// Explain output of:
// console.log("Start");
// setTimeout(() => { console.log("Middle"); }, 0);
// console.log("End");
// Explain why 'Middle' comes last and what is Event Loop.

//Runs immediately → printed.
console.log("Start");   //Start

setTimeout(() => {
   console.log("Middle");
}, 0);

console.log("End");
//Runs immediately.

//Explaination.
// console.log("Start") → runs immediately
// setTimeout() → goes to Web API
// console.log("End") → runs immediately
// After Call Stack is empty → Event Loop pushes Middle

//Synchronous code → FIRST
//Async callbacks → AFTER stack is free
//setTimeout(fn, 0) does NOT mean execute instantly.
// It means:
//“Execute after current synchronous code finishes.”
console.log("----");


// Task 4 – Countdown Timer
// Create countdown from 10 to 0 using setInterval().
// Stop at 0 and show 'Time Up!'.
let count = 10;

let timers = setInterval(() => {
    console.log(count);
    count--;

    // stop when reaches 0
    if (count < 0) {
        clearInterval(timers);
        console.log("Time Up!");             // printing 10-1 numbers and finally "Time up!" will be printed
    }
}, 1000);



//LEVEL 3 – PROMISE TASKS

// Task 5 – Custom Promise
// Create function checkResult(marks).
function checkResult(marks){
    return new Promise((resolve, reject)=>{
        // If marks >= 35 → resolve('Pass')
        if (marks >=35){
            resolve("Pass")
    }else{
        // If marks < 35 → reject('Fail')
        if (marks < 35)
        reject("Fail")
    }
    });
}
// Use .then(), .catch(), .finally()

// call function
checkResult(34)
.then((result) =>{
    console.log(result)
})

.catch((error)=>{
    console.log(error);
})

.finally(()=>{
    console.log("Result Checked");          //Fail
                                            //Result Checked
});


//Task 6 – Promise Chain
// Create step1(), step2(), step3() returning Promises.
function step1(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("step 1 complpeted");        //step 1 completed
            resolve();
        },1000);
    });
}

function step2(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("step 2 completed");        //step 2 completed
            resolve();
        },1000);
    });
}

function step3(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("step 3 completed");            // //step 3 completed
            resolve();
        },1000);
    });
}

step1()
    .then(() => step2())
    .then(() => step3())
    .then(()=>{
        console.log("All steps Done");
        
    });
// Execute sequentially and display:
// Step 1 Completed
// Step 2 Completed
// Step 3 Completed
// All Steps Done


//LEVEL 4 – FETCH API TASKS

// Use API: https://fakestoreapi.com/products

// Task 7 – Product Title List
fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
.then(products => {
    // - Print product titles
    console.log("Product Titles:-");
    products.forEach(product => {
        console.log(product.title); 
    });
    // - Print total product count
    console.log("Total Products:-",products.length);

    // - Print first product price
    console.log("First Product Price:-", products[0].price);
})
// Product Titles:
// Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
// Mens Casual Premium Slim Fit T-Shirts
// Mens Cotton Jacket
// Mens Casual Slim Fit
// John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet
// Solid Gold Petite Micropave
// White Gold Plined Princess cut Diamond
// Pierced Owl Rose Gold Plated Stainless Steel Double
// WD 2TB Elements Portable External Hard Drive - USB 3.0 
// SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s
// Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance
// Total Products: 20
// First Product Price: 109.95


console.log("");


// Task 8 – Filter Expensive Products
fetch("https://fakestoreapi.com/products")
.then(res => res.json())
.then(products => {
    let expensiveProducts = products
    // - Show products above ■500
    // - Use filter() and map()
    .filter(product => product.price > 500)
    .map(product => ({
    // - Print Title and Price only
        title:product.title,
        price:product.price
    }));
    console.log("Expensive Products:-");
    console.log(expensiveProducts);
})
.catch(err => console.log(err));

// Expensive Products:
//   { title: 'John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet', price: 695 },
//   { title: 'Solid Gold Petite Micropave', price: 1680 },
//   { title: 'White Gold Plined Princess cut Diamond', price: 999.99 },
//   { title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s', price: 1099 }



// Task 9 – Error Handling:-
// Change API URL to wrong one and display:
// Failed to load products. Please try again.

fetch("https://fakestoreapi.com/wrongurl") //wrong API
  .then(response => {

      // check response status
      if (!response.ok) {
          throw new Error("API Failed");
      }

      return response.json();
  })
  .then(data => {
      console.log(data);
  })
  .catch(() => {
      console.log("Failed to load products. Please try again.");
  });
// output for error handling :-
// Error: TypeError: Failed to fetch
// Failed to load products. Please try again.























