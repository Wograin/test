function modalWindow(){
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
}

module.exports = modalWindow;