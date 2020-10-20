"use strict";
//This is my Day Trip Generator Project from devCodeCamp Day 5

// //Day Trip Generator
// Learning objective: Use and practice JavaScript fundamentals, with an emphasis on Single
// Responsibility.

// Technologies: JavaScript, HTML, CSS, Bootstrap

// Features:
// (5 points): As a developer, I want to make good, consistent commits.                  DONE
// (5 points): As a user, I want a destination to be randomly selected for my day trip.   DONE
// (5 points): As a user, I want a restaurant to be randomly selected for my day trip.
// (5 points): As a user, I want a mode of transportation to be randomly selected for my day trip.
// (5 points): As a user, I want a form of entertainment to be randomly selected for my day trip.
// (15 points): As a user, I want to be able to randomly re-select a destination, restaurant, mode of
// transportation, and/or form of entertainment if I don’t like one or more of those things.
// (10 points): As a user, I want to be able to confirm that my day trip is “complete” once I like all of the
// random selections.
// (10 points): As a user, I want to display my completed trip in the console.
// (5 points): As a developer, I want all of my functions to have a Single Responsibility. Remember, each
// function should do just one thing!

// Research:
// How to generate a random number in JavaScript?
//------------------------------------------------------------------------------------------

//if choose wrong destination, should be able to rechoose 
//"your going to do this, that, and this"
//"Is this complete? Should be able to say yes"
//one function for destination
//one for restaurants and so on


//Random Destinations Generator
let destinations = ["The Beach", "Hiking", "Archery Range", "Downtown"]; //created array called destinations

function random_destination(destinations) {//created function called random_destination that takes destinations as parameter
  
    return destinations[Math.floor(Math.random()*destinations.length)];   
}
console.log(random_destination(destinations));

//Random Restaurants Generator
let restaurants = ["The Crab Bucket", "Second Street Noodles", "Arnold's Pizza Shop", "Southern BBQ House"];

function random_restaurant(restaurants) {
  
    return restaurants[Math.floor(Math.random()*restaurants.length)];   
}
console.log(random_restaurant(restaurants));






