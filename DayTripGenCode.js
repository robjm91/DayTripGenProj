"use strict";
//This is my Day Trip Generator Project from devCodeCamp Day 5

// //Day Trip Generator
// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single
// Responsibility.

// Technologies: JavaScript, HTML, CSS, Bootstrap

// Features:
// (5 points): As a developer, I want to make good, consistent commits.                  ***DONE
// (5 points): As a user, I want a destination to be randomly selected for my day trip.   ***DONE
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.     ***DONE
// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip. ***DONE
// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip. ***DONE
// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of
// transportation, and/or form of entertainment if I don’t like one or more of those things.  ***DONE
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the
// random selections. ***DONE
// (10 points): As a user, I want to display my completed trip in the console. ***DONE
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each
// function should do just one thing!

// Research:
// How to generate a random number in JavaScript?
//------------------------------------------------------------------------------------------


//Random Destinations Generator
 

let destinations = ["the beach.", "a hiking trail.", "a archery range.", "downtown."];

function random_destination(destinations) {

    return destinations[Math.floor(Math.random()*destinations.length)];   
}
console.log("You will first visit ");
console.log(random_destination(destinations));


//Random Restaurants Generator
let restaurants = ["The Crab Bucket.", "Second Street Noodles.", "Arnold's Pizza Shop.", "Southern BBQ House."];

function random_restaurant(restaurants) {
  
    return restaurants[Math.floor(Math.random()*restaurants.length)];   
}
console.log("Then have lunch at  ");
console.log(random_restaurant(restaurants));


//Random Mode of Transportation Generator
let transportation = ["personal car.", "boat.", "walking.", "Uber or Lyft."];

function random_transportation(transportation) {
  
    return transportation[Math.floor(Math.random()*transportation.length)];   
}
console.log("Would be best to travel by ");
console.log(random_transportation(transportation));

//Random Form of Entertainment Generator
let entertainment = ["watch a comedy show.", "jump in the hotel jacuzzi.", "prank an innocent bystander.", "hit the bar!"];

function random_entertainment(entertainment) {
  
    return entertainment[Math.floor(Math.random()*entertainment.length)];   
}
console.log("To end the day you will ");
console.log(random_entertainment(entertainment));


let userAcknowledgment= prompt("Are these plans acceptable?");
let userAnswer = userAcknowledgment.toLowerCase("");

if(userAnswer === "yes") {
    console.log("Woot woot! Here is your completed trip details!");
}
else {
    console.log("Sorry :( . Hit the refresh button!");
}


// function random_trip_planner(options) {   //Possible Options function that condenses code, the "options"
//                                           //parameter is just a place holder for other created arrays.
  
//     return options[Math.floor(Math.random()*options.length)];   
// }

// console.log(random_trip_planner(entertainment));
// console.log(random_trip_planner(transportation));
