"use strict";

let searchString = document.getElementById('addcar');
let result = document.getElementById('result');
let story = {
  123: "M 123 KC Организация1",
  234: "M 234 KK Организация2",
  345: "К 345 ХТ Организация3",
};



// json practica

// извлекаем из локальной памяти
let storageProfileString = localStorage.getItem("profile");
console.log("String saved in LocalStorage", storageProfileString);
// преобразуйте строку LocalStorage в объект с помощью JSON.parse()
let savedStory = JSON.parse(storageProfileString);
console.log("Story object:", savedStory);

let localStory = Object.assign({}, savedStory);

function click1() {

result.value="undefined"; // в случае если перебор не обнаружит сохраненный ключ свойства

  for (let key in story) {

      if(key == searchString.value) {
        result.value = story[key];
      }

  } // end цикла(перебор ключей)

  for (let key in localStory) {

      if(key == searchString.value) {
        result.value = localStory[key];
      }

  } // end цикла(перебор ключей)

      if(result.value == "undefined") {
        addcar();
      }

} // end func click

function addcar() {

  let quest = confirm("Такой машины нет, хотите внести?");

      if(quest == true) {
      let a = prompt("Введите номер машины и название фирмы", "123");
      localStory[searchString.value] = a;
      result.value = a;

      localStorage.setItem("profile", JSON.stringify(localStory)); // save in local data browser and translate data JS - json
      console.log(localStorage.getItem("profile")); // work



      // localStorage.clear(); // clear localStory
      }
}
