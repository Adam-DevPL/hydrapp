import "../scss/main.scss";

// uncomment the lines below to enable PWA
import { registerSW } from "./pwa.js";
registerSW();

/* place your code below */

console.log("HELLO 🚀");

const glassesOfWater = document.querySelector(".number--js");
const buttonAdd = document.querySelector(".button-add--js");
const buttonDelete = document.querySelector(".button-delete--js");

const key = new Date().toISOString().slice(0, 10);

var currentDay = key;

var glasses = 0;

if (localStorage.getItem("key")) {
  var lastSavedDay = JSON.parse(localStorage.getItem("key"));
  console.log(lastSavedDay[0].key);
  if (currentDay == lastSavedDay[0].key) {
    glasses = lastSavedDay[0].glasses;
    glassesOfWater.innerHTML = glasses;
  } else {
    lastSavedDay.unshift({ key: currentDay, glasses: 0 });
    glassesOfWater.innerHTML = glasses;
  }
}

buttonAdd.addEventListener("click", () => {
  glasses++;
  glassesOfWater.innerHTML = glasses;
  saveInLS(currentDay, glasses);
});

buttonDelete.addEventListener("click", () => {
  if (glasses > 0) {
    glasses--;
  }
  glassesOfWater.innerHTML = glasses;
  saveInLS(currentDay, glasses);
});

function saveInLS(keyParam, glassesParam) {
  var array = [];
  array[0] = { key: keyParam, glasses: glassesParam };
  localStorage.setItem("key", JSON.stringify(array));
}
