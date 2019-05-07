window.addEventListener("DOMContentLoaded", () => {

    'use strict';
    //------------------TAB'ы--------------------------------------------------------------------------------------------------------
    let tab = document.querySelectorAll(".info-header-tab"),
        info = document.querySelector(".info-header"),
        tabContent = document.querySelectorAll(".info-tabcontent");

    let hideTabContent = (a) => {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove("show");
            tabContent[i].classList.add("hide");
        }
    };

    hideTabContent(1);

    let showTabContent = (b) => {
        if (tabContent[b].classList.contains("hide")) {
            tabContent[b].classList.remove("hide");
            tabContent[b].classList.add("show");
        }
    };

    info.addEventListener("click", (event) => {
        let target = event.target;
        if (target && target.classList.contains("info-header-tab")) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //------------------TIMER--------------------------------------------------------------------------------------------------------

    let deadLine = "2019-05-09";

    function getTimeRemaining(endtime) {
        let timeZone = new Date().getTimezoneOffset() * 1000 * 60;
        //let t = Date.parse(endtime) - Date.parse(new Date()),
        //let t = Date.parse(endtime) - Date.parse(new Date()) + ((new Date().getTimezoneOffset()) * 1000 * 60),
        let t = Date.parse(endtime) - Date.parse(new Date()) + timeZone,
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        //days = Math.floor((t/1000/60/60) % 24); //подсчеот часов Math.floor((t/(1000*60*60*24)));

        return {
            "total": t,
            "hours": hours,
            "minutes": minutes,
            "seconds": seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector(".hours"),
            minutes = timer.querySelector(".minutes"),
            seconds = timer.querySelector(".seconds"),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);

            hours.textContent = t.hours;
            if (t.hours < 10) {
                hours.textContent = `0${t.hours}`;
            }

            minutes.textContent = t.minutes;
            if (t.minutes < 10) {
                minutes.textContent = `0${t.minutes}`;
            }

            seconds.textContent = t.seconds;
            if (t.seconds < 10) {
                seconds.textContent = `0${t.seconds}`;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
        }
    }

    setClock("timer", deadLine);

    //------------------MODAL WINDOW--------------------------------------------------------------------------------------------------------

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        btnDescription = document.querySelectorAll(".description-btn");

    let callDescriptionBtn = () => {
        overlay.style.display = "block";
        more.classList.add("more-splash");
        document.body.style.overflow = "hidden";
    };

    more.addEventListener("click", callDescriptionBtn);

    close.addEventListener("click", () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
    });

    for (let i = 0; i < btnDescription.length; i++) {
        let btn = btnDescription[i];
        btn.addEventListener("click", callDescriptionBtn);
    }

    //------------------FORMA--------------------------------------------------------------------------------------------------------

    let message = {
        loading: "загрузка...",
        success: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так..."
    };

    let form = document.querySelector(".main-form"),
        input = form.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        //request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        let formData = new FormData(form); // тут храниться все, что передал нам пользователь в форме
        ///-----------------------------------------------------------------------------------------------------------------
        let obj = {}; // создание нового обьекта, куда будем записывать переданные данные от пользователя
        formData.forEach(function (value, key) { // с помощью данного метода мы из обьекта FormData извлекаем данные и наполняем обьект obj - "ключ":"значение"
            obj[key] = value;
        });

        let json = JSON.stringify(obj); // переделываем на соответствующий JSON формат 
        ///-----------------------------------------------------------------------------------------------------------------
        //request.send(formData);
        request.send(json); // передаем данные на сервер

        request.addEventListener("readystatechange", function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readySate === 4 && request.starus == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = "";
        }
    });

    //------------------FORMA к Контактной форме (мы с вами свяжемся)----------------------------------------------------------------

    let contactForm = document.querySelector("#form"),
        contactInput = contactForm.getElementsByTagName("input"),
        contactInputMail = contactForm.getElementsByTagName("input")[0],
        contactInputPhone = contactForm.getElementsByTagName("input")[1];

    contactInputMail.setAttribute("name", "mail");
    contactInputPhone.setAttribute("name", "phone");
    statusMessage.classList.add("status");

    contactInputPhone.addEventListener("input", () => {
        contactInputPhone.value = contactInputPhone.value.replace(/[^+0-9]/ig, "");
    });

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactForm.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Content-type", "application/json; charset=utf-8");

        let contactFormData = new FormData(contactForm);

        let object = {};
        contactFormData.forEach((value, key) => {
            object[key] = value;
        });

        let json = JSON.stringify(object);

        request.send(json);

        request.addEventListener("readystatechange", () => {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readySate === 4 && request.starus == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < contactInput.length; i++) {
            contactInput[i].value = "";
        }
    });




});