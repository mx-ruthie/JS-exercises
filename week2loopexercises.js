// Week 2 - Loops

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Write a 'while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

let i = 1;
while (i <= 5){
 console.log(i++);
}

// Exercise 2. Write a 'do while' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).
// I forgot the syntax of do while loops and had to look it up right away. 
//let result = "";
let j = 0;
do{
  j += 1;
  //result += j ;
  console.log(j);
} while (j < 5);

//console.log(result);

// Exercise 3. Write a 'for' loop that prints the integers (whole numbers)
// between 1 and 5 (inclusive).

for(let k = 1; k <= 5; k++) {
  console.log(k);
} 


// Exercise 4. Now we want a loop that prints the integers
// counting DOWN from 10 to 1 (inclusive). Write three loops that do this, to practice
// writing loops in all 3 ways -- as a 'while', 'do while', and 'for' loop.
for(let l = 10; l <= 10 && l >= 1; l--){
  console.log(l);
}

let m = 10;
while(m > 0 && m <= 10){
  console.log(m--);
}

//let countDown = ""; (Eileen in ws helped me realize that the syntax I found online for do while loops resulted in me including and accounting for an unnecesary variable. Commenting out the variable + logging instead of re-assigning the variable helped me list out the results line by line instead of as one string. Applying with deletes to all other instances of this in my assignment.)
let n = 11;
do {
  n--;
 //countDown = countDown + n; 
 console.log(n/*,"find me"*/);
} while (n > 1);

//console.log(countDown);


// Exercise 5. Write a loop that prints the integers from 7 to 27. Write this
// loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

//this exercise does not say inclusive so I am not including 7 and 27, please let me know if I misinterpreted that. 

for(let o = 7; o <= 27; o++ ){
  console.log(o);
}

//let countUp = "";
let p = 7;
do{
  console.log(p);//moved this above the increment so it logs before adding
  p = p + 1;
  //countUp = countUp + p;
 
} while (p <= 27);

//console.log(countUp);

let q = 7;
while(q <= 27){
  console.log(q++);
}

// Exercise 6. Write a loop that prints numbers between 0 and 100, counting by tens.
// I.e. it will print 10, then 20, then 30, etc.
// Write this loop in all 3 ways -- as a 'while', 'do while', and 'for' loop.

for(let r = 10; r <= 100; r += 10){
  console.log(r);
}

let s = 0;
while(s < 100) {
  console.log(s = s + 10);
}

//let skipByTen = "";
let t = 0;
do{
  t += 10;
  //skipByTen = skipByTen + t;
  console.log(t);
} while (t < 100);
//console.log(skipByTen);


// Exercise 7. Add a comment as to why the following loop is an infinite loop (will
// run without ever stopping). Then fix the loop so that it stops when
// counterFour is equal to -100.

//the loop never adds a condition of where to stop printing numbers less than negative 2 so it will count down in the negative numbers infinitely unless the condition is added.
let counterFour = 1;
while (counterFour < 2 && counterFour > -101) {
  console.log("HELP ME!", counterFour); //Eileen helped me think to add this to see that the count is correct
  counterFour--;
}

// Exercise 8. Make a variable that contains your favorite integer. Write a loop
// (your choice which type) that prints the integers from 0 to that number.

let myFaveInt = 33;
for(let u = 0; u <= myFaveInt; u++){
  console.log(u);
}
// Exercise 9. Make a variable that contains your favorite integer (this time make sure it's
// less than 100). Write a loop (your choice which type) that prints the integers from 0 to 100.
// Next to each number it should print "not my favorite number". But next to your favorite
// number it should print "my favorite number!". Example output (if your favorite number was 2):
// 0 not my favorite number
// 1 not my favorite number
// 2 my favorite number!
// 3 not my favorite number
// ...
// (Hint - use an if statement in your loop)

let myFaveInt1 = 33;
for(let v = 0; v <= 100; v++){
    if(v === myFaveInt1){
        console.log (v + " my favorite number!")
    } else {
        console.log (v + " not my favorite number")
    }
}

// Exercise 10. In some of the exercises above, we had you write all 3 types of loops, for practice.
// But in real life, how would you decide which type of loop to use? You might not have an
// exact answer, but spend a few minutes thinking about the different types of loops and/or
// doing some research and write down your thoughts in a comment below:
//I've talked to other programmers about loops before and they say they mostly use for loops, so I'll probably usually defer to for loops in the even that I don't know how many loops there will actually be.
//I know if I need to make sure the loop is run at least once, I might use a do while loop since it runs the do statement once before it evaluates the conditions. 

// Exercise 11. Now we'll practice using nested loops (a loop inside another loop)!
// Update the nested loops below to so that for each value of outsideCounter,
// the inside loop will show a countdown

/*
counting down from 0
*********************************** 
counting down from 1
  inside 1
*********************************** 
counting down from 2
  inside 2
  inside 1
*********************************** 
counting down from 3
  inside 3
  inside 2
  inside 1
*********************************** 
*/

for (let outsideCounter = 0; outsideCounter <= 3; outsideCounter++) {
  console.log("counting down from", outsideCounter);
  for (let insideCounter = outsideCounter; insideCounter >= 1 ; insideCounter--) {
    console.log("inside" + insideCounter);
  }
  console.log("***********************************");
}

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//I hadn't practiced much with do while loops so I had to review that syntax over and over again through the course of this assignment. I feel fairly comfortable with basic loops but nested looping is still intimidating to me and I need more practice. 
//I used my notes from the Udemy course on loops, W3, and MDN this time. 
// Email your file to us or commit your file to GitHub and email us a link.