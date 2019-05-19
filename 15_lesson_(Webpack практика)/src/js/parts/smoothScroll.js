function smoothScroll() {
    let allLi = document.getElementsByTagName("li"),
        allHref = document.querySelectorAll("ul > li > a");


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
}

module.exports = smoothScroll;