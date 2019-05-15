$(document).ready(function () {

    let chooseTour = $(".main_btna:eq(0)"),
        getConsultation = $(".main_btn"),
        tourSchedule = $("nav li:eq(1)");

    function animate() {
        $(".modal").animate({
            height: "show"
        }, 1500).css("display", "block");
        $(".overlay").animate({
            opacity: "show"
        }, 2000).css("display", "block");
    }

    chooseTour.on("click", animate);
    getConsultation.on("click", animate);
    tourSchedule.on("click", animate);

    $(".close").on("click", () => {
        $(".overlay").animate({
            opacity: "hide"
        }, 2000);
        $(".modal").animate({
            height: "hide"
        }, 1500);

    });
});