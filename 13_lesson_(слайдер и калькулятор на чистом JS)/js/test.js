describe("Таймер", function () {
    it("Возвращает ли функция обьект?", function () {
        assert.typeOf(getTimeRemaining(), 'object');
    });
});