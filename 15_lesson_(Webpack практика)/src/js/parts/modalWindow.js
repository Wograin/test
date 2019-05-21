let modalWindow = () => {
    let more = document.querySelector(".more"),
        overlay = document.querySelector(".overlay"),
        close = document.querySelector(".popup-close"),
        btnDescription = document.querySelectorAll(".description-btn"),
        poupFormInput = document.querySelector(".popup-form__input");

    function callDescriptionBtn() {
        overlay.style.display = "block";
        this.classList.add("more-splash");
        document.body.style.overflow = "hidden";
        poupFormInput.addEventListener("input", () => {
            poupFormInput.value = '+' + poupFormInput.value.replace(/[^\d]/g, '').slice(0, 11);
        });
    }

    more.addEventListener("click", callDescriptionBtn);

    close.addEventListener("click", () => {
        overlay.style.display = "none";
        more.classList.remove("more-splash");
        document.body.style.overflow = "";
        btnDescription.forEach(function (elem) {
            elem.classList.remove('more-splash');
        });
    });

    for (let i = 0; i < btnDescription.length; i++) {
        let btn = btnDescription[i];
        btn.addEventListener("click", callDescriptionBtn);
    }
};

module.exports = modalWindow;