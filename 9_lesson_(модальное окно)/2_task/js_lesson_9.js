let age = document.getElementById('age');
console.log(age);
function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
}

let d = showUser.bind(age);
d("Снежек", "Джон");

//showUser.apply(age, ["Снежек", "Джон"]);