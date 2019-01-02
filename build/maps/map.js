"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustMap = /** @class */ (function () {
    function CustMap() {
        this.collection = [];
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
    return CustMap;
}());
exports.default = CustMap;
//# sourceMappingURL=map.js.map