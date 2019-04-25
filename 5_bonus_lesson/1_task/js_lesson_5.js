function firstTask() {
    'use strict';

    for (var i = 1; i <= 100; i++) {
        for (var j = 2; j <= i; j++) {
            if (i % j == 0)
                break;
        }
        if (j == i)
            console.log(i + " - " + "Делители этого числа: " + 1 + " и " + j);
    }
}

firstTask();