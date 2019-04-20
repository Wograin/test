function firstTask() {
    'use strict';
    
    let money = +prompt("Ваш бюджет на месяц?", "8164");
    let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-18");
    let appData = {
        "budget": money,
        "timeData": time,
        "expenses": {},
        "optionalExpenses": {},
        "income": [],
        "savings": false
    };
    
    let i = 0;

    while (i < 2) {
        let utilityFee = prompt("Введите обязательную статью расходов в этом месяце", ""),
            salary = prompt("Во сколько обойдется?", "");
            i++;

        if ( typeof(utilityFee) === "string" && utilityFee != null && utilityFee != "" && salary != null && salary != "") {
            console.log("Done!");
            appData.expenses[utilityFee] = salary;
        } else {
            alert("Необходимо указать данные!");
            i--;
        }
    }
     
    appData.monetPerDay = appData.budget / 30;

    alert("Ежедневный бюджет: " + appData.monetPerDay);
    
    if(appData.monetPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.monetPerDay > 100 && appData.monetPerDay < 700) {
        console.log("Средний уровень достатка");
    } else if (appData.monetPerDay > 700){
        console.log("Высокий уровень достатка");
    } else {
        console.log("ИДИ РАБОТАТЬ ! ! !");
    }    
}

firstTask();