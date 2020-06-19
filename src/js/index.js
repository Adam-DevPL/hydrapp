import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const glassesOfWater = document.querySelector(".number--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonDelete = document.querySelector(".button-delete--js");


const key = new Date();
var lastSavedDay = [];

var currentDay = key.toLocaleString('pl-PL').slice(0, 10)

console.log(currentDay);

var glasses = 0;

if (localStorage.getItem("key")) {
  lastSavedDay = JSON.parse(localStorage.getItem("key"));
  console.log(lastSavedDay[0].key);
  if (currentDay == lastSavedDay[0].key) {
    glasses = lastSavedDay[0].glasses;
    glassesOfWater.innerHTML = glasses;
  } else {
    lastSavedDay.unshift({ key: currentDay, glasses: 0 });
    glassesOfWater.innerHTML = glasses;
  }
} else {
  saveInLS(currentDay, glasses, lastSavedDay);
}

buttonAdd.addEventListener("click", () => {
  glasses++;
  glassesOfWater.innerHTML = glasses;
  saveInLS(currentDay, glasses, lastSavedDay);
});

buttonDelete.addEventListener("click", () => {
  if (glasses > 0) {
    glasses--;
  }
  glassesOfWater.innerHTML = glasses;
  saveInLS(currentDay, glasses, lastSavedDay);
});

if (window.performance) {
  console.info("window.performance work's fine on this browser");
}
if (performance.navigation.type == 1) {
  console.info("This page is reloaded");
} else {
  console.info("This page is not reloaded");
}



function saveInLS(keyParam, glassesParam, array) {
  array[0] = { key: keyParam, glasses: glassesParam };
  localStorage.setItem("key", JSON.stringify(array));
}
