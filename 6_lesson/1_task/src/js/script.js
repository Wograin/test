let startBtn = document.getElementById("start");

let budgetValue = document.getElementsByClassName("budget-value")[0],
    dayBudgetValue = document.getElementsByClassName("daybudget-value")[0],
    levelValue = document.getElementsByClassName("level-value")[0],
    expensesValue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomeValue = document.getElementsByClassName("income-value")[0],
    monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
    yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0];

let expensesItem = document.querySelectorAll(".expenses-item");

let btn = document.getElementsByTagName("button"),
    approve1 = btn[0],
    approve2 = btn[1],
    toCalculate = btn[2];

let optlexpenses = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income"),
    checkSavings = document.querySelector("#savings"),
    sumValue = document.querySelector("#sum"),
    percentValue = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");

let money,
    time;

for (let i = 0; i < expensesItem.length; i++) {
    let inputs = expensesItem[i];
    inputs.setAttribute("disabled", "true");
}

toCalculate.setAttribute("disabled", "true");
startBtn.addEventListener("click", function () {
    if (startBtn != false) {
        for (let i = 0; i < expensesItem.length; i++) {
            let inputs = expensesItem[i];
            inputs.removeAttribute("disabled");
        }
        toCalculate.disabled = true;
    }
});

approve1.addEventListener("click", function () {
    if (approve1 == false) {
        toCalculate.disabled = true;
    } else {
        toCalculate.removeAttribute("disabled");
        toCalculate.disabled = false;
    }
});

startBtn.addEventListener("click", function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", "2019-04-26");
    money = +prompt("Ваш бюджет на месяц?", "20000");

    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?", "20000");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
});

approve1.setAttribute("disabled", "true");
for (let i = 0; i < expensesItem.length; i++) {
    let itemInputs = expensesItem[i];
    itemInputs.addEventListener("input", function () {
        let cnt = 0;

        for (let j = 0; j < expensesItem.length; j++) {
            let inputsValue1 = expensesItem[j].value;
            if (inputsValue1 != "") {
                cnt += 1;
            }
        }
        if (cnt == expensesItem.length) {
            approve1.disabled = false;
        } else {
            approve1.disabled = true;
        }
    });
}

approve1.addEventListener("click", function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let utilityFee = expensesItem[i].value, //prompt("Введите обязательную статью расходов в этом месяце", ""),
            salary = expensesItem[++i].value; //prompt("Во сколько обойдется?", "");

        if (typeof (utilityFee) === "string" && utilityFee != null && utilityFee != "" && salary != null && salary != "") {
            console.log("done");
            appData.expenses[utilityFee] = salary;
            sum += +salary;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

for (let i = 0; i < optlexpenses.length; i++) {
    let optInputs = optlexpenses[i];
    optInputs.addEventListener("input", function () {
        let cnt = 0;

        for (let j = 0; j < optlexpenses.length; j++) {
            let inputsValue = optlexpenses[j].value;
            if (inputsValue != "") {
                cnt += 1;
            }
        }
        if (cnt == optlexpenses.length) {
            approve2.disabled = false;
        } else {
            approve2.disabled = true;
        }
    });
}

approve2.addEventListener("click", function () {
    for (let i = 0; i < optlexpenses.length; i++) {
        let entryExpenses = optlexpenses[i].value; //prompt("Статья необязательных расходов?", "");

        if (typeof (entryExpenses) === "string" && entryExpenses != "") {
            appData.optionalExpenses[i] = entryExpenses;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + " ";
        } else {
            alert("Пожалуйста, заполните каждое поле!");
        }
    }
});

toCalculate.addEventListener("click", function () {
    if (appData.budget != undefined) {

        appData.moneyPerDay = ((appData.budget - (+expensesValue.textContent)) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 700) {
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 700) {
            levelValue.textContent = "Высокий уровень достатка";
        } else {
            levelValue.textContent = "ИДИ РАБОТАТЬ ! ! !";
        }
    } else {
        dayBudgetValue.textContent = "Ошибка";
    }
});

chooseIncome.addEventListener("input", function () {
    let items = chooseIncome.value; //prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    appData.income = items.split(", ");
    incomeValue.textContent = appData.income;
});

sumValue.setAttribute("disabled", "true");
percentValue.setAttribute("disabled", "true");
checkSavings.addEventListener("click", function () {
    if (checkSavings.checked == true) {
        sumValue.disabled = false;
        percentValue.disabled = false;
    } else {
        sumValue.disabled = true;
        percentValue.disabled = true;
    }
});

checkSavings.addEventListener("click", function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener("input", function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};