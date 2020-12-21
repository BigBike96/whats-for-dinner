// global variables below
var sideButton = document.querySelector('.side');
var mainDishButton = document.querySelector('.main-dish');
var desertButton = document.querySelector('.desert');
var letsCookButton = document.querySelector('.lets-cook');
var suggestedFood = document.querySelector('.suggested-food');

letsCookButton.addEventListener('click', displayYouShouldMake);

function chooseSideOption() {
  var food = sides[getRandomIndex(sides)];
  suggestedFood.innerText = `${food}`;
}

function chooseMainDishOption() {
  var food = mains[getRandomIndex(mains)];
  suggestedFood.innerText = `${food}`;
}

function chooseDesertOption() {
  var food = desserts[getRandomIndex(desserts)];
  suggestedFood.innerText = `${food}`;
}

function displayYouShouldMake() {
  if (sideButton.checked === true) {
    chooseSideOption();
  } else if (mainDishButton.checked === true) {
    chooseMainDishOption();
  } else if (desertButton.checked === true) {
    chooseDesertOption();
  }
}

function getRandomIndex(food) {
  return Math.floor(Math.random() * food.length);
}
