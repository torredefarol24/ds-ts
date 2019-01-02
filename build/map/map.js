"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustMap = /** @class */ (function () {
    function CustMap() {
        this.collection = {};
        this.count = 0;
    }
    CustMap.prototype.size = function () {
        return this.count;
    };
    CustMap.prototype.set = function (key, value) {
        this.collection[key] = value;
        this.count++;
    };
    CustMap.prototype.has = function (key) {
        return (key in this.collection);
    };
    CustMap.prototype.getValue = function (key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
    CustMap.prototype.removeData = function (key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
        else {
            return null;
        }
    };
    CustMap.prototype.getKeys = function () {
        var arr = new Array();
        for (var key in this.collection) {
            arr.push(key);
        }
        return arr;
    };
    CustMap.prototype.getValues = function () {
        var arr = new Array();
        for (var key in this.collection) {
            arr.push(this.collection[key]);
        }
        return arr;
    };
    CustMap.prototype.printMap = function () {
        console.log("\nPrinting Map");
        for (var key in this.collection) {
            console.log(key, " : ", this.collection[key]);
        }
    };
    CustMap.prototype.getAllData = function () {
        var arr = new Array();
        for (var key in this.collection) {
            var tempArr = [key, this.collection[key]];
            arr.push(tempArr);
        }
        return arr;
    };
    CustMap.prototype.printMapSnapshot = function () {
        return this.collection;
    };
    return CustMap;
}());
exports.default = CustMap;
//# sourceMappingURL=map.js.map