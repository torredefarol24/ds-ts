"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hashMech = function (str, max) {
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash % max;
};
var HashTable = /** @class */ (function () {
    function HashTable() {
        this.storage = [];
        this.storageLimit = 5;
    }
    HashTable.prototype.printTable = function () {
        console.log(this.storage);
    };
    HashTable.prototype.add = function (key, value) {
        var index = hashMech(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            this.storage[index] = [[key, value]];
        }
        else {
            var inserted = false;
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
    };
    HashTable.prototype.remove = function (key) {
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
    };
    HashTable.prototype.lookup = function (key) {
        var index = hashMech(key, this.storageLimit);
        if (this.storage[index] === undefined) {
            return undefined;
        }
        else {
            var found = false;
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
    };
    return HashTable;
}());
exports.default = HashTable;
//# sourceMappingURL=hashTable.js.map