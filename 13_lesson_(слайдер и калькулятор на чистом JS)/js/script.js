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

    let deadLine = "2019-05-19";

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

            function myFunc(elem, v) {
                elem.textContent = v;
                if (v < 10) {
                    elem.textContent = `0${v}`;
                }
            }

            myFunc(hours, t.hours);
            myFunc(minutes, t.minutes);
            myFunc(seconds, t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";
            }
            /*hours.textContent = t.hours;
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
             }*/
        }

    }

    setClock("timer", deadLine);

    //------------------Плавная прокрутка страницы--------------------------------------------------------------------------------------------------------

    let allLi = document.getElementsByTagName("li"),
        allHref = document.querySelectorAll("ul > li > a");
    //allHref = document.querySelectorAll('a[href*="#"]');

    for (let i = 0; i < allLi.length; i++) {
        let li = allLi[i];
        li.addEventListener("click", function (event) {
            event.preventDefault();
        });
    }

    function goToTheBlock(collection) {

        for (let j = 0; j < collection.length; j++) {

            let link = collection[j],
                href = collection[j].getAttribute("href");

            link.addEventListener("click", () => {
                document.querySelector(href).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        }
    }
    goToTheBlock(allHref);


    //------------------MODAL WINDOW--------------------------------------------------------------------------------------------------------

    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        btnDescription = document.querySelectorAll(".description-btn"),
        poupFormInput = document.querySelector(".popup-form__input");

    let callDescriptionBtn = () => {
        overlay.style.display = "block";
        more.classList.add("more-splash");
        document.body.style.overflow = "hidden";
        poupFormInput.addEventListener("input", () => {
            poupFormInput.value = poupFormInput.value.replace(/[^+0-9]/ig, "");
        });
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
        input = document.getElementsByTagName("input"),
        statusMessage = document.createElement("div");

    statusMessage.classList.add("status");

    function sendForm(element) {
        element.addEventListener("submit", (event) => {
            event.preventDefault();
            element.appendChild(statusMessage);
            let formData = new FormData(element);

            function postData(data) {
                return new Promise(function (resolve, reject) {

                    let request = new XMLHttpRequest();
                    request.open("POST", "server.php");

                    request.setRequestHeader("Content-type", "application/json; charset=utf-8");

                    request.addEventListener("readystatechange", function () {
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState === 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });

                    let obj = {};

                    data.forEach(function (value, key) {
                        obj[key] = value;
                    });

                    let json = JSON.stringify(obj);

                    request.send(json);
                });
            } //Конец нашей функции postData

            function clearInput() {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = "";
                }
            }

            postData(formData)
                .then(() => statusMessage.innerHTML = message.loading)
                .then(() => statusMessage.innerHTML = message.success)
                .catch(() => statusMessage.innerHTML = message.failure)
                .then(clearInput);
        });
    }

    sendForm(form);

    //------------------FORMA к Контактной форме (мы с вами свяжемся)----------------------------------------------------------------

    let contactForm = document.querySelector("#form"),
        contactInputMail = contactForm.getElementsByTagName("input")[0],
        contactInputPhone = contactForm.getElementsByTagName("input")[1];

    contactInputMail.setAttribute("name", "mail");
    contactInputPhone.setAttribute("name", "phone");
    statusMessage.classList.add("status");

    contactInputPhone.addEventListener("input", () => {
        //contactInputPhone.value = contactInputPhone.value.replace(/[^+0-9]/ig, "");
        contactInputPhone.value = '+' + contactInputPhone.value.replace(/[^\d]/g, '').slice(0, 11);
       
    });

    sendForm(contactForm);

    //------------------SLIDER-------------------------------------------------------------------------------------------------------

    let slideIndex = 1,
        slides = document.querySelectorAll(".slider-item"),
        prev = document.querySelector(".prev"),
        next = document.querySelector(".next"),
        dotsWrap = document.querySelector(".slider-dots"),
        dots = document.querySelectorAll(".dot");

    showSlides(slideIndex);

    function showSlides(n) {

        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = "none");
        /*for(let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }*/
        dots.forEach((item) => item.classList.remove("dot-active"));

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("dot-active");
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });

    next.addEventListener("click", () => {
        plusSlides(1);
    });

    dotsWrap.addEventListener("click", (event) => {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains("dot") && event.target == dots[i - 1]) {
                currentSlide(i);
            }
        }
    });

    //------------------CALC-------------------------------------------------------------------------------------------------------

    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        koef = 1;

    totalValue.textContent = 0;

    persons.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/ig, "");
        personsSum = +this.value;

        if (this.value.charAt(0) === "0") {
            this.value = "";
            total = 0;
        }

        if (daysSum != "" && personsSum != "") {
            total = (daysSum + personsSum) * 4000 * koef;
            if (restDays.value == "") {
                totalValue.textContent = 0;
            } else {
                totalValue.textContent = total;
            }
        } else {
            totalValue.textContent = 0;
        }
    });

    restDays.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/ig, "");
        daysSum = +this.value;

        if (this.value.charAt(0) === "0") {
            this.value = "";
            total = 0;
        }

        if (daysSum != "" && personsSum != "") {
            total = (daysSum + personsSum) * 4000 * koef;
            if (persons.value == "") {
                totalValue.textContent = 0;
            } else {
                totalValue.textContent = total;
            }
        } else {
            totalValue.textContent = 0;
        }
    });

    place.addEventListener("input", function () {
        //koef = +this.options[this.selectedIndex].value; // не факт, что нужен +
				koef = +e.target.options[e.target.selectedIndex].value; // что бы считал после сборки
        if (restDays.value == "" || persons.value == "") {
            totalValue.textContent = 0;
        } else {
            total = (daysSum + personsSum) * 4000 * koef;
            totalValue.innerHTML = total;
        }
    });

});