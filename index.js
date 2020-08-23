"use strict";

let searchString = document.getElementById('addcar');
let result = document.getElementById('result');

let story = {
1: "one",
2: "two",
3: "three"
};

// json practica

// извлекаем из локальной памяти
let storageProfileString = localStorage.getItem("profile");
console.log("String saved in LocalStorage", storageProfileString);
// преобразуйте строку LocalStorage в объект с помощью JSON.parse()
let savedStory = JSON.parse(storageProfileString);
console.log("Story object:", savedStory);

let localStory = Object.assign({}, savedStory);

for (let key in localStory) { // "Последние"
let i;

stats.value = stats.value + " --> " + localStory[key];
}

let saveLastStory;

function click1() {

result.value="undefined"; // в случае если перебор не обнаружит сохраненный ключ свойства

  for (let key in story) {

      if(key == searchString.value) {
        result.value = story[key];
        saveLastStory = key;
        console.log(saveLastStory);
      }

  } // end цикла(перебор ключей для stroy{})

  for (let key in localStory) {

      if(key == searchString.value) {
        result.value = localStory[key];
        saveLastStory = key;
      }

// нужно создать функцию добавления несколько машин в значение свойства, если номера ключей совпадает

  } // end цикла(перебор ключей for object localStory{})

      if(searchString.value == "+" + saveLastStory) {
          addCarInProperty();
          alert("work");
          return;
        }

      if(result.value == "undefined") {
        addCar();
      }

} // end func click

function addCar() {

  let quest = confirm("Такой машины нет, хотите внести?");

      if(quest == true) {
      let a = prompt("Введите номер машины и название фирмы", "123");
      localStory[searchString.value] = a;
      result.value = a;

      localStorage.setItem("profile", JSON.stringify(localStory)); // save in local data browser and translate data JS - json
      console.log(localStorage.getItem("profile")); // work


// stats.value = stats.value + " " + result.value + " --> ";


      console.log ("localStorage.clear();") // clear localStory
      }
}

function addCarInProperty() {

    let quest = confirm(`Вы хотите добавить машину к номеру: "${saveLastStory}" ?`);

      if(quest == true) {
      let a = prompt(`Введите название фирмы для машины: "${saveLastStory}" `, "название");
      localStory[saveLastStory] = story[saveLastStory] + " | " +a;

      localStorage.setItem("profile", JSON.stringify(localStory));
      }
}
