let allLi = document.querySelectorAll(".menu-item"),
	ul = document.querySelector(".menu");
ul.insertBefore(allLi[2], allLi[1]);

let li = document.createElement("li");
//li.innerHTML = "Пятый пункт";
li.textContent = "Пятый пункт";
li.classList.add("menu-item");
ul.appendChild(li);

let body = document.querySelector("body");
body.style.background = "url(img/apple_true.jpg) center no-repeat / cover";
//body.style.backgroundSize = "cover";

let titleId = document.getElementById("title");
titleId.textContent = "Мы продаем только подлинную технику Apple";

let deadAdvertisement = document.querySelectorAll(".column");
let adv = document.querySelector(".adv");
deadAdvertisement[1].removeChild(adv);

let quetion = prompt("Как вы относитесь к технике Apple?", "Хорошо, но дорого!");
let prom = document.getElementById("prompt");
prom.textContent = quetion;