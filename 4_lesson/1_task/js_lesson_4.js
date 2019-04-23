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
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true,
        chooseExpenses: function () {
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
        },
        detectDayBudget: function () {
            appData.moneyPerDay = (appData.budget / 30).toFixed();
            alert("Ежедневный бюджет: " + appData.moneyPerDay);
        },
        detectLevel: function () {
            if (appData.moneyPerDay < 100) {
                console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 700) {
                console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 700) {
                console.log("Высокий уровень достатка");
            } else {
                console.log("ИДИ РАБОТАТЬ ! ! !");
            }
        },
        checkSavings: function () {
            if (appData.savings == true) {
                let save = +prompt("Какова сумма накоплений?", "");
                let percent = +prompt("Под какой процент?", "");

                appData.monthIncome = save / 100 / 12 * percent;
                alert("Доход в месяц с Вашего депозита: " + appData.monthIncome);
            }
        },
        chooseOptExpenses: function () {
            for (let i = 0; i < 3; i++) {
                let entryExpenses = prompt("Статья необязательных расходов?", "");

                if (typeof (entryExpenses) === "string" && entryExpenses != null && entryExpenses != "") {
                    appData.optionalExpenses[i] = entryExpenses;
                } else {
                    alert("Необходимо указать данные!");
                    i--;
                }
            }
        },
        chooseIncome: function () {
            let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

            while (typeof (items) !== "string" || items == null || items == "") {
                items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
            }
            appData.income = items.split(", ");
            appData.income.push(prompt("Может, что-то еще?", ""));
            appData.income.sort();
            appData.income.forEach(function (item, i) {
                alert("Способы доп. заработка: " + (i + 1) + " - " + item);
            });
        }
    };

    for (let i in appData) {
        console.log("Наша программа включает в себя данные: " + i);
    }


}

firstTask();