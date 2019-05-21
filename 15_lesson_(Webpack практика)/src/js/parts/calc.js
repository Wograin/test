let calc = () => {
    let persons = document.querySelectorAll(".counter-block-input")[0],
        restDays = document.querySelectorAll(".counter-block-input")[1],
        place = document.getElementById("select"),
        totalValue = document.getElementById("total"),
        personsSum = 0,
        daysSum = 0,
        total = 0,
        coef = 1;

    totalValue.textContent = 0;

    persons.addEventListener("input", function () {

        this.value = this.value.replace(/[^0-9]/ig, "");
        personsSum = +this.value;

        if (this.value.charAt(0) === "0") {
            this.value = "";
            total = 0;
        }

        if (daysSum != "" && personsSum != "") {
            total = (daysSum + personsSum) * 4000 * coef;
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

        this.value = this.value.replace(/[^+0-9]/ig, "");
        daysSum = +this.value;

        if (this.value.charAt(0) === "0") {
            this.value = "";
            total = 0;
        }

        if (daysSum != "" && personsSum != "") {
            total = (daysSum + personsSum) * 4000 * coef;
            if (persons.value == "") {
                totalValue.textContent = 0;
            } else {
                totalValue.textContent = total;
            }
        } else {
            totalValue.textContent = 0;
        }
    });

    place.addEventListener("input", (e) => {
        coef = +e.target.options[e.target.selectedIndex].value;
        if (restDays.value == "" || persons.value == "") {
            totalValue.textContent = 0;
        } else {
            total = (daysSum + personsSum) * 4000 * coef;
            totalValue.innerHTML = total;
        }
    });
};

module.exports = calc;