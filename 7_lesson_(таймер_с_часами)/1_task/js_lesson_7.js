let timer = setTimeout(function date() {
    let day = new Date(),
        result;

    let hours = day.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    let minutes = day.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let seconds = day.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    result = (hours + ":" + minutes + ":" + seconds);   
    setTimeout(date, 1000);
    document.querySelector(".timer").innerHTML = result;
});