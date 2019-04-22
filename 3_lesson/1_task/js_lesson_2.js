function firstTask() {
    'use strict';

    let money,
        time;

    function start() {
        money = +prompt("Ваш бюджет на месяц?", "8164");
        time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-18");

        while (isNaN(money) || money == "" || money == null) {
            money = +prompt("Ваш бюджет на месяц?", "8164");
        }
    }
    start();

    let appData = {
        "budget": money,
        "timeData": time,
        "expenses": {},
        "optionalExpenses": {},
        "income": [],
        "savings": true
    };

    function chooseExpenses() {
        for (let i = 0; i < 2; i++) {
            let utilityFee = prompt("Введите обязательную статью расходов в этом месяце", ""),
                salary = prompt("Во сколько обойдется?", "");

            if (typeof (utilityFee) === "string" && utilityFee != null && utilityFee != "" && salary != null && salary != "") {
                console.log("done");
                appData.expenses[utilityFee] = salary;
            } else {
                alert("Необходимо указать данные!");
                i--;
            }
        }
    }
    chooseExpenses();

    function detectDayBudget() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    }
    detectDayBudget();

    function detectLevel() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 700) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 700) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("ИДИ РАБОТАТЬ ! ! !");
        }
    }
    detectLevel();

    function checkSavings() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?", "");
            let percent = +prompt("Под какой процент?", "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
        }
    }
    checkSavings();


    function chooseOptExpenses() {
        for (let i = 0; i < 3; i++) {
            let entryExpenses = prompt("Статья необязательных расходов?", "");

            if (typeof (entryExpenses) === "string" && entryExpenses != null && entryExpenses != "") {
                appData.optionalExpenses[1] = entryExpenses;
            } else {
                alert("Необходимо указать данные!");
                i--;
            }
        }
    }
    chooseOptExpenses();

}

firstTask();