// global variables below
var sideButton = document.querySelector('.side');
var mainDishButton = document.querySelector('.main-dish');
var desertButton = document.querySelector('.desert');

var letsCookButton = document.querySelector('.lets-cook');

var suggestedFood = document.querySelector('.suggested-food');

var randomFood = '';

// event listeners below
// needed for radio buttons
sideButton.addEventListener('checked', chooseSideOption);
mainDishButton.addEventListener('checked', chooseMainDishOption);
desertButton.addEventListener('checked', chooseDesertOption);

// needed for let's cook button
letsCookButton.addEventListener('click', displayYouShouldMake);




// add funtions below

// when pressing lets cook button, the random result needs to come from the corrisponding array from the radio button selection
// need to select a radio button that will return a random food string result
// need to return a string value in right box which will replace the current pot icon displayed

function chooseSideOption() {
  var food = sides[getRandomIndex('sides')];
  console.log(food);
  if (randomFood === sides) {
    randomFood = sides[getRandomIndex('sides')];
  }
}

function chooseMainDishOption() {
  mainFood.innerText = mains[getRandomIndex(mains)];
}

function chooseDesertOption() {
  desertFood.innerText = desserts[getRandomIndex(desserts)];
}

function displayYouShouldMake() {
  randomFood = suggestedFood;
  console.log(suggestedFood);
}


function getRandomIndex(food) {
  return Math.floor(Math.random() * food.length);
}
