"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DS_Set {
    constructor() {
        this.collection = [];
    }
    has(elem) {
        return this.collection.indexOf(elem) !== -1;
    }
    values() {
        return this.collection;
    }
    printSet() {
        console.log("-----------");
        this.collection.forEach((item) => console.log(item));
    }
    insert(elem) {
        if (this.has(elem)) {
            console.log(`${elem} Exists Already`);
            return false;
        }
        else {
            this.collection.push(elem);
            return true;
        }
    }
    remove(elem) {
        if (this.has(elem)) {
            var index = this.collection.indexOf(elem);
            this.collection.splice(index, 1);
            return true;
        }
        else {
            console.log("Elem Doesnt Exist");
            return false;
        }
    }
    union(otherSet) {
        var unionSet = new Set();
        this.values().forEach((item) => unionSet.add(item));
        otherSet.values().forEach((item) => unionSet.add(item));
        return unionSet;
    }
    intersection(otherSet) {
        var intersectionSet = new Set();
        this.values().forEach((item) => {
            if (otherSet.has(item)) {
                intersectionSet.add(item);
            }
        });
        return intersectionSet;
    }
    difference(otherSet) {
        var differenceSet = new Set();
        this.values().forEach((item) => {
            if (!otherSet.has(item)) {
                differenceSet.add(item);
            }
        });
        return differenceSet;
    }
    oppositeIntersection(otherSet) {
        var oppositeIntersectionSet = new Set();
        this.values().forEach((item) => {
            if (!otherSet.has(item)) {
                oppositeIntersectionSet.add(item);
            }
        });
        otherSet.values().forEach((item) => {
            if (!this.has(item)) {
                oppositeIntersectionSet.add(item);
            }
        });
        return oppositeIntersectionSet;
    }
    isSubset(otherSet) {
        return this.values().every((item) => otherSet.has(item));
    }
}
exports.default = DS_Set;
//# sourceMappingURL=set.js.map