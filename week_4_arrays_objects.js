// Week 3 - Arrays and Objects

// In the following exercises, you will need to place your code or answer underneath each
// exercise prompt.

// First try answering these without using references or looking up any information.
// Then, check your answer by using references and/or running your code.
// You can run your JS code using the Chrome or Firefox Developer tools, or by using Node.js.
// Feel free to update your answers if you got them wrong at first -- this exercise is for your own learning.
// But make sure you understand why the correct answer is right.

// Exercise 1. Make an empty array named animals
let animals = [];
// Exercise 2. Add the string "frog" to the array
animals.push("frog");
// Exercise 3. Add 4 more animals of your choice to the array. Try to add all of them in one line of code.
animals.push("dog", "cat", "fish", "bird");
//console.log(animals);
// Exercise 4. Update the first item in the array to be "gorilla"
animals.splice(0, 1, "gorilla");
//console.log(animals);
// Exercise 5. Print the number of items in the array (use the array property that will give you this information)
console.log(animals.length);
// Exercise 6. Print the first item in the array
console.log(animals[0]);
// Exercise 7. Print the last item in the array (as part of your answer, use the same array property you used in exercise 5 above)
console.log(animals[animals.length- 1]); //I had to look up the exact syntax for this. I was originally trying just animals.length-1 and getting the index, not the element itself.
// Exercise 8. Remove the last item from the array
animals.pop();
//console.log(animals);
// Exercise 9. Now make a new array named assortedThings that contains at least 3 strings and 3 numbers.
let assortedThings = ["Ruthie", "Zach", "Hazel", "Ezra", 1987, 1988, 2014, 2017];
// Exercise 10. Write a for loop that iterates through the assortedThings array and prints each index and item, such as:
// Item #0 is potato
// Item #1 is 4
// Item #2 is Hello World
// ...
for (let i = 0; i < assortedThings.length; i++){
    console.log("Item #" + i + " is " + assortedThings[i]); //yolis helped me understand that I just needed to put i for the index to print LOL (I was doing the most)
}
// Exercise 11. Write a function that takes an array of numbers as a parameter. For each number in the array,
// print the number and "BIG" if it's over 100, "small" if it's between 0 and 100, and "negative" if
// it's less than 0. Example:
// if the array is [-2, 200, 50], print:
// -2 negative
// 200 BIG
// 50 small
//
// Then write some function calls you would use to test your function.
function bigOrSmall(arr){
for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
        console.log(arr[i] + " negative");
    } else if (arr[i] >= 0 && arr[i] <= 100){
        console.log(arr[i] + " small");
    } else {
        console.log(arr[i] + " BIG")
    }
}
}

bigOrSmall([-5, 5, 500]);
bigOrSmall([0, 10, 100, 1000]); //expect 0 to print small and also 100 to print small because the numbers must be over 100 for BIG and i've chosen small to be 0 and 100 inclusive
bigOrSmall([-90, 90, 190]);
// Exercise 12. Make an object called me that contains the following keys: name, favoriteAnimal, favoriteNumber
// The values of those keys can be whatever you choose.

let me = {name: "Ruthie", favoriteAnimal: "dolphin", favoriteNumber: 33};
//console.log(me);

// Exercise 13. Add another 2 keys and values to the object (you choose what they are)
me.birthYear = 1987;
me.weddingAnniversary = 2011;
//console.log(me);
// Exercise 14. Update the favoriteAnimal value to something different
me.favoriteAnimal = "cat";
//console.log(me);
// Exercise 15. Print the value of favoriteAnimal.
// Note: there are at least 2 ways to get the value of a key, try to write both.
console.log(me.favoriteAnimal);
console.log(me["favoriteAnimal"]);
console.log(Object.entries(me)[1][1]);

// Congrats, you made it to the end!
// Did you find this easy or hard? If you used references, which ones helped you?
// Please answer in a comment below.
//Most of this was pretty easy to get through. Exercise 10 threw me for a loop regarding printing the index of the items. Used the usual suspects for references, Stack Overflow, MDN, and the workshop for #10.

// Email your file to the course staff,
// or commit your file to GitHub and email us a link.
