function firstTask() {
    'use strict';
    let money = prompt("Ваш бюджет на месяц?", "8164");
    let time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-18");
    let appData = {
        "budget": money,
        "timeData": time,
        "expenses": {},
        "optionalExpenses": {},
        "income": [],
        "savings": false
    };
    
    let utilityFee = prompt("Введите обязательную статью расходов в этом месяце", "Плата за коммунальные услуги");
    let salary = prompt("Во сколько обойдется?", "2200");

    appData.expenses[utilityFee] = salary;

    utilityFee = prompt("Введите обязательную статью расходов в этом месяце", "Продукты питания");
    salary = prompt("Во сколько обойдется?", "1800");

    appData.expenses[utilityFee] = salary;
    
    alert(money / 30);    
}

firstTask();