"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustMap {
    constructor() {
        this.collection = {};
        this.count = 0;
    }
    size() {
        return this.count;
    }
    set(key, value) {
        this.collection[key] = value;
        this.count++;
    }
    has(key) {
        return (key in this.collection);
    }
    getValue(key) {
        return (key in this.collection) ? this.collection[key] : null;
    }
    removeData(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
        else {
            return null;
        }
    }
    getKeys() {
        var arr = new Array();
        for (var key in this.collection) {
            arr.push(key);
        }
        return arr;
    }
    getValues() {
        var arr = new Array();
        for (var key in this.collection) {
            arr.push(this.collection[key]);
        }
        return arr;
    }
    printMap() {
        console.log("\nPrinting Map");
        for (var key in this.collection) {
            console.log(key, " : ", this.collection[key]);
        }
    }
    getAllData() {
        var arr = new Array();
        for (var key in this.collection) {
            var tempArr = [key, this.collection[key]];
            arr.push(tempArr);
        }
        return arr;
    }
    printMapSnapshot() {
        return this.collection;
    }
}
exports.default = CustMap;
//# sourceMappingURL=map.js.map