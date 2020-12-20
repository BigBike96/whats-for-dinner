// global variables below
var sideButton = document.querySelector('.side');
var mainDishButton = document.querySelector('.main-dish');
var desertButton = document.querySelector('.desert');

var letsCookButton = document.querySelector('.lets-cook');



// event listeners below


// needed for let's cook button
// needed for radio buttons



// add funtions below

// when pressing lets cook button, the random result needs to come from the corrisponding array from the radio button selection
// need to select a radio button that will return a random food string result
// need to return a string value in right box which will replace the current pot icon displayed




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
