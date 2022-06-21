// Week 2 - Functions

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Define a function called logGreeting() that prints the string “Hello!” (use console.log).
// Underneath the function, write the line of code that runs the function.

function logGreeting(){
    console.log("Hello!");
}
logGreeting();
// Exercise 2. Define a function called getName() that *returns* a string that is your name.
// Remember, this function should return the string -- not print it.
// Then print your name in the console by passing getName() into the console.log() function.
function getName(){
    let name = "Ruthie";
    return name;
}

console.log(getName());
// Exercise 3. Call a function within a function -- Write a function called logGreeting2()
// that prints a full sentence that contains your name: "Hello! My name is <name>."
// logGreeting2 should call myName() to get your name.
// Then print your greeting to the console by calling logGreeting2().
//input
//output String containing name
//variable 
//
function logGreeting2(){
    function myName(){
        return "Ruthie";
    }
    console.log("Hello! My name is " + myName() +".");//almost left out this period
}
logGreeting2();
//Okay this was fun! I hadn't done anything with nested functions in a while so I gave it a shot without looking anything up, caught some different issues, checked out a couple resources til one jogged my memory, then created a separate .js file environment to test it in isolation and help me focus on the output with the least noise possible. Eileen told me last Saturday to test things one at a time, and so that's how I approached it. I had to make adjustments to when I console.logged and when I returned, where the called function was placed, etc. Once it ran totally clean in my testing .js file, I copied over the lines of code here. 

// Exercise 4. Write a function that takes 3 parameters that are all numbers.
// The function should return the sum of the 3 numbers.
// Then write some function calls you would use to test your function.

//input 3 different numbers
//output sum of the 3 parameters entered
//test cases
//(1,2,3) => 6
//(-2,5,10) => 13
//(0,100,1000) => 1100

function addThese(num1,num2,num3){
    let sum = num1 + num2 + num3;
    return sum;
}
console.log(addThese(1,2,3)),
console.log(addThese(-2,5,10));
console.log(addThese(0,100,1000));

// Exercise 5. Let's say a museum gives a discount for children ages 14 or under, and seniors 65 or older.
// Write a function that takes in a person's age and returns true if they should get a discount.
// Otherwise it should return false.
// Then write some function calls you would use to test your function.

//since there's a few statements getting returned based on a numerical condition, I'll use if/else statements in the fucntion

//input number
//output boolean

function discountYes(age){
    if(age <=14 || age >=65){
        return true;
    } else {
        return false;
    }
}

console.log(discountYes(12));
console.log(discountYes(33));
console.log(discountYes(44));
console.log(discountYes(66));
console.log(discountYes(111));

// Exercise 6. Write a function that takes 2 parameters -- one number and one string.
// The function should print the string the given number of times.
// Then write some function calls you would use to test your function.

//input one number + one string
//output string parameter printed number parameter amount of times

function repeatMe(num, str){
    for(let i = 0; i < num; i++ ){
        console.log(str);
    }
}
repeatMe(5, "Techtonica is awesome!");
repeatMe(2, "There");
repeatMe(3, "Hip, Hip, Hooray!");

// Exercise 7. Read the following code (don't run it yet)
function mysteryFunction1(p1) {
    return p1 * 2;
  }
  const y = 4;
  const z = mysteryFunction1(y);
  console.log("The value of y is " + y);
  console.log("The value of z is " + z);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction1 does
  //I think mysteryFunction1 returns the parameter passed through the fucntion multiplied by 2
  // 2. What prints out for the value of y
  //4
  // 3. What prints out for the value of z
  //8
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //yes

  // Exercise 8. Read the following code (don't run it yet)
  function mysteryFunction2(p1, p2) {
    const x = p1 - p2;
    return x;
  }
  const a = mysteryFunction2(10, 4);
  const b = mysteryFunction2(a, 1);
  console.log("The value of a is " + a);
  console.log("The value of b is " + b);
  
  // Without running the code, write down in a comment:
  // 1. What mysteryFunction2 does
  //subtracts the second parameter passed through the function from the first parameter
  // 2. What prints out for the value of a
  //6
  // 3. What prints out for the value of b
  5
  // Now run the code and see if you're correct.
  // Were you correct? If not, what did you learn?
  //yes
  
  // Exercise 9. This exercise is to practice reading the documentation for functions.
  // String.split() is a function in the JavaScript standard library that you can use in your code.
  // Read about the split() function here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  // Try to use it to solve the following challenges:
  
  // Here's a string I made representing my grocery list.
  // Using split() and groceryList, make an array of my grocery list items
  const groceryList = "eggs,carrots,orange juice";

  const specificItem = groceryList.split(","); //co-worked with Meia and she helped me understand why I would use "," vs just the " " -- the split method is searching for a comma in the string and breaking each array item up from the commas -- by putting the , inside the quote marks instead, it's breaking up the string at the comma
  console.log(specificItem);


  
  // Here's a string I made representing my morning schedule.
  // Using split() and mySchedule, make an array of the *first 2* things I do in the morning
  // There are multiple ways to do this, but try doing it using only the split() function.
  const mySchedule = "wake up--->brush teeth--->eat breakfast--->go to work";
  const firstTwoTasks = mySchedule.split("--->", 2);
  console.log(firstTwoTasks);
  // Congrats, you made it to the end!
  // Did you find this easy or hard? If you used references, which ones helped you?
  // Please answer in a comment below.
  //A few things were challenging but I found that a few little google searches and playing around with the code did the trick. VS code does a really good job of pointing out the issues. I need to get a bit more used to reading the output before trying to debug. Taking some practice. 
  
  // Email your file to the course staff,
  // or commit your file to GitHub and email us a link.