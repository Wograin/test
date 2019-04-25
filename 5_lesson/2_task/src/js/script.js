let but = document.getElementById("start");

let budget = document.getElementsByClassName("budget-value"),
    daybudget = document.getElementsByClassName("daybudget-value"),
    level = document.getElementsByClassName("level-value"),
    expenses = document.getElementsByClassName("expenses-value"),
    optionalexpenses = document.getElementsByClassName("optionalexpenses-value"),
    income = document.getElementsByClassName("income-value"),
    monthsavings = document.getElementsByClassName("monthsavings-value"),
    yearsavings = document.getElementsByClassName("yearsavings-value");

let expensesItem = document.querySelectorAll(".expenses-item");

let btn = document.getElementsByTagName("button"),
    approve1 = btn[0],
    approve2 = btn[1],
    toCalculate = btn[2];

let optlexpenses = document.querySelectorAll(".optionalexpenses-item");

let chooseIncome = document.querySelector(".choose-income"),
    checksavings = document.querySelector("#savings"),
    sum = document.querySelector("#sum"),
    percent = document.querySelector("#percent"),
    year = document.querySelector(".year-value"),
    month = document.querySelector(".month-value"),
    day = document.querySelector(".day-value");