//Hello Objects
//Collaboration between Yolis and Ruthie

//Task 1
//1 Create an empty object user.
let user = {};

//2 Add the property name with the value John.

user.name = "John";
console.log(user);
//3 Add the property surname with the value Smith.

user.surname = "Smith";
console.log(user);
//4 Change the value of the name to Pete.
user.name = "Pete";
console.log(user);
// 5Remove the property name from the object.
delete user.name;

//Task 2
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
function isEmpty(obj){
  for (let key in obj) {
    return false;
  } 
    return true;
}
console.log(isEmpty({}));
console.log(isEmpty({greeting: "hello"}));
console.log(isEmpty({farewell: "bye"}));

//input is object
//output boolean
//function needs to check the object parameter for properties and return true if no properites, and false if it has properties
//how to check object for properties?

//Task 3
//We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
//salaries = {}; wrote this line to check to make sure it showed zero if salaries was empty
let sum = 0;

for(let key in salaries) {
  sum += salaries[key];
}

console.log(sum);

//Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.
//If salaries is empty, then the result must be 0.


//Task 4
// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

//For instance:

// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  
  function multiplyNumeric(obj){
    for(let key in obj){
      if(typeof obj[key] == "number"){
        obj[key] *= 2;
      }
    } 
  }
  //the object will not change until passing the object as an argument in the function. Once the object has been passed as an argument in the function, the values will have changed, and the console.log will show the new values
  
  multiplyNumeric(menu); //we struggled! after calling the function, check that it worked by console.logging the property of the object
  console.log(menu.width); 
  console.log(menu);
  
  //multiplyNumeric(menu);
  
  // after the call
  
  // Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.
  
  // P.S. Use typeof to check for a number here.
  
  
  
