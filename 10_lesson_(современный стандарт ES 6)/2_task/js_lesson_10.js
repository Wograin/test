class Option {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    method() {
        let div = document.createElement("div");
        div.style.height = this.height;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.innerHTML = "ЭТО МОЙ ПЕРВЫЙ КОНСТРУКТОР В НОВОМ СТАНДАРТЕ ES6!!! УРА !!! УРА !!! УРА !!!";
        document.body.appendChild(div);
    }
}

let div = new Option("50px", "auto", "#e9a7e7", "xx-large", "center");
div.method();