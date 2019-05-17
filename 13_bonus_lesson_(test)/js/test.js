function sum(a, b) {
	return a + b > 10;
}
sum(2,2);

let arr = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
let num = arr[1][1];

var each = function(startArr, f){return f(startArr)};
var arr1 = [64, 49, 36, 25, 16];
var myFunc = function(a){
	var newArr = [];
	for (var i = 0; i < a.length; i++) {
		newArr[i]=Math.sqrt(a[i]);
	}
	return newArr;
};
console.log(each(arr1, myFunc));


let assert = require("chai").assert;
let expect = require("chai").expect;

describe("sum", function () {
    it("Возвращает ли функция true?", function () {
        assert.typeOf(sum(), 'boolean');
    });
});
describe("num", function () {
    it("Равна ли наша переменная 5?", function () {
        assert.equal(num, 5);
    });
});
describe("each", function () {
    it("Наша функция вернет массив?", function () {
        assert.typeOf(each(arr1, myFunc), "Array");
    });

    it("Наша функция извлекает корни из массива?", function () {
        //assert.strictEqual(each(arr1, myFunc), [8, 7, 6, 5, 4]);
        expect(each(arr1, myFunc)).deep.equal([8, 7, 6, 5, 4]);
    });

    it("Длинна нашего массива равна 5?", function () {
        assert.lengthOf(each(arr1, myFunc), 5);
    });
});
