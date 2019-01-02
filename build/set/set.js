"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DS_Set = /** @class */ (function () {
    function DS_Set() {
        this.collection = [];
    }
    DS_Set.prototype.has = function (elem) {
        return this.collection.indexOf(elem) !== -1;
    };
    DS_Set.prototype.values = function () {
        return this.collection;
    };
    DS_Set.prototype.printSet = function () {
        console.log("-----------");
        this.collection.forEach(function (item) { return console.log(item); });
    };
    DS_Set.prototype.insert = function (elem) {
        if (this.has(elem)) {
            console.log(elem + " Exists Already");
            return false;
        }
        else {
            this.collection.push(elem);
            return true;
        }
    };
    DS_Set.prototype.remove = function (elem) {
        if (this.has(elem)) {
            var index = this.collection.indexOf(elem);
            this.collection.splice(index, 1);
            return true;
        }
        else {
            console.log("Elem Doesnt Exist");
            return false;
        }
    };
    DS_Set.prototype.union = function (otherSet) {
        var unionSet = new Set();
        this.values().forEach(function (item) { return unionSet.add(item); });
        otherSet.values().forEach(function (item) { return unionSet.add(item); });
        return unionSet;
    };
    DS_Set.prototype.intersection = function (otherSet) {
        var intersectionSet = new Set();
        this.values().forEach(function (item) {
            if (otherSet.has(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    };
    DS_Set.prototype.difference = function (otherSet) {
        var differenceSet = new Set();
        this.values().forEach(function (item) {
            if (!otherSet.has(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    };
    DS_Set.prototype.oppositeIntersection = function (otherSet) {
        var _this = this;
        var oppositeIntersectionSet = new Set();
        this.values().forEach(function (item) {
            if (!otherSet.has(item)) {
                oppositeIntersectionSet.add(item);
            }
        });
        otherSet.values().forEach(function (item) {
            if (!_this.has(item)) {
                oppositeIntersectionSet.add(item);
            }
        });
        return oppositeIntersectionSet;
    };
    DS_Set.prototype.isSubset = function (otherSet) {
        return this.values().every(function (item) { return otherSet.has(item); });
    };
    return DS_Set;
}());
exports.default = DS_Set;
//# sourceMappingURL=set.js.map