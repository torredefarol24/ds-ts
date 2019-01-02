"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.items = {};
        this.count = 0;
    }
    Stack.prototype.printItems = function () {
        console.log("--------\nItems");
        for (var i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
        console.log("--------");
    };
    Stack.prototype.appendElem = function (item) {
        this.items[this.count] = item;
        this.count++;
    };
    Stack.prototype.popFromEnd = function () {
        if (this.count == 0) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    };
    Stack.prototype.getSize = function () {
        return this.count;
    };
    Stack.prototype.peek = function () {
        return this.items[this.count - 1];
    };
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=stack.js.map