"use strict";
let principal = document.getElementById("listaAnimais");
let animals = principal.firstElementChild;
let dentroAnimals = animals.getElementsByTagName("ul");
dentroAnimals[0].before("[" + (dentroAnimals.length - 1) + "]");
let mammals = dentroAnimals[1].getElementsByTagName("li");
dentroAnimals[1].before("[" + mammals.length + "]");
let other = dentroAnimals[2].getElementsByTagName("li");
dentroAnimals[2].before("[" + other.length + "]");
let fishes = principal.lastElementChild;
let dentroFishes = fishes.getElementsByTagName("ul");
dentroFishes[0].before("[" + (dentroFishes.length - 1) + "]");
let aquarium = dentroFishes[1].getElementsByTagName("li");
dentroFishes[1].before("[" + aquarium.length + "]");
let sea = dentroFishes[2].getElementsByTagName("li");
dentroFishes[2].before("[" + sea.length + "]");

let listaOriginal = document.getElementById("listaAnimais");
function recursiva(elemento) {
    for (const element of elemento.children) {
      if (element.children.length > 0) {
        element.insertAdjacentText(
          "beforebegin",
          element.tagName != "UL" ? "" : `[${element.children.length}]`
        );
        recursiva(element);
      }
    }
  }
  
  recursiva(listaOriginal);
