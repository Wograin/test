function secondTask() {
    'use strict';

    let num = 33721,
        composition = 1,
        cnt;

    while (num) {
        cnt = num % 10;
        num = (num - cnt) / 10;
        composition *= cnt;
    }

    let exp = composition ** 3;
    let result = +exp.toString().slice(0, 2);

    alert(result);
}

secondTask();