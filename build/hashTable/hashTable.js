"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hashMech = (str, max) => {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % max;
};
class HashTable {
    constructor() {
        this.storage = [];
        this.storageLimit = 5;
    }
    printTable() {
        console.log(this.storage);
    }
    add(key, value) {
        var index = hashMech(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            let inserted = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    this.storage[index][i][1] = value;
                }
                inserted = true;
            }
            if (!inserted) {
                this.storage[index].push([key, value]);
            }
        }
    }
    remove(key) {
        var index = hashMech(key, this.storageLimit);
        if (this.storage[index].length == 1 && this.storage[index][0][0] == key) {
            delete this.storage[index];
        }
        else {
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    delete this.storage[index][i];
                }
            }
        }
    }
    lookup(key) {
        var index = hashMech(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        else {
            let found = false;
            for (var i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] == key) {
                    found = true;
                    return this.storage[index][i];
                }
            }
            if (!found) {
                return "Elem Not Found";
            }
        }
    }
}
exports.default = HashTable;
//# sourceMappingURL=hashTable.js.map