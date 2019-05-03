    for(let i = 0; i < btnDescription.length; i++) {
        let btn = btnDescription[i];

        btn.addEventListener("click", function(){
            overlay.style.display = "block";
            this.classList.add("more-splash");
            document.body.style.overflow = "hidden";
        });
    }