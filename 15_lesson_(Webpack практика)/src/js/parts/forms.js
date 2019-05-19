function forms(){
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
            }

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

    let contactForm = document.querySelector("#form"),
        contactInputMail = contactForm.getElementsByTagName("input")[0],
        contactInputPhone = contactForm.getElementsByTagName("input")[1];

    contactInputMail.setAttribute("name", "mail");
    contactInputPhone.setAttribute("name", "phone");
    statusMessage.classList.add("status");

    contactInputPhone.addEventListener("input", () => {
        contactInputPhone.value = contactInputPhone.value.replace(/[^+0-9]/ig, "");
    });

    sendForm(contactForm);
}

module.exports = forms;