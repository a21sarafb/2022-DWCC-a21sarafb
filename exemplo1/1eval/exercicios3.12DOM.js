"use strict";
let one = document.getElementById("one");
let liAdd2 = document.createElement("li");
liAdd2.innerHTML = "2";
let liAdd3 = document.createElement("li");
liAdd3.innerHTML = "3";
one.append(liAdd2);
liAdd2.append(liAdd3);
