"use strict";
exports.__esModule = true;
exports.createExampleOrder = exports.randomIntFromInterval = void 0;
var randomIntFromInterval = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
exports.randomIntFromInterval = randomIntFromInterval;
var createExampleOrder = function (index, now) {
    return {
        refNumber: 1000 + index,
        date: now ? Date.now() : Date.now() - (0, exports.randomIntFromInterval)(1000000, 100000000),
        card: createRandomProducts()
    };
};
exports.createExampleOrder = createExampleOrder;
var createMockCardItem = function () {
    var ranomProd = (0, exports.randomIntFromInterval)(0, 5);
    switch (ranomProd) {
        case 0:
            return {
                id: 1,
                name: "Pommes",
                price: 5,
                options: createRandomOptions()
            };
        case 1:
            return {
                id: 2,
                name: "Chees Burger",
                price: 10,
                options: createRandomOptions()
            };
        case 2:
            return {
                id: 3,
                name: "Cola",
                price: 3,
                options: []
            };
        case 3:
            return {
                id: 4,
                name: "Steak",
                price: 15,
                options: createRandomOptions()
            };
        case 4:
            return {
                id: 5,
                name: "Schnitzel",
                price: 11,
                options: createRandomOptions()
            };
        case 5:
            return {
                id: 6,
                name: "Wurst",
                price: 8,
                options: createRandomOptions()
            };
    }
};
var createRandomProducts = function () {
    return Array.from(Array((0, exports.randomIntFromInterval)(1, 4)).keys()).map(function (item) { return createMockCardItem(); });
};
var createRandomOptions = function () {
    return Array.from(Array((0, exports.randomIntFromInterval)(0, 4)).keys()).map(function (item) { return createMockCardOption(); });
};
var createMockCardOption = function () {
    var ranomProd = (0, exports.randomIntFromInterval)(0, 3);
    switch (ranomProd) {
        case 0:
            return {
                id: 10,
                name: "Ketchup",
                price: 0.5
            };
        case 1:
            return {
                id: 11,
                name: "Mayo",
                price: 0.3
            };
        case 2:
            return {
                id: 12,
                name: "Salat mit Dressing",
                price: 13
            };
        case 3:
            return {
                id: 13,
                name: "Extra Bier",
                price: 5
            };
    }
};
