"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.items = {};
        this.count = 0;
    }
    printItems() {
        console.log("--------\nItems");
        for (var i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
        console.log("--------");
    }
    appendElem(item) {
        this.items[this.count] = item;
        this.count++;
    }
    popFromEnd() {
        if (this.count == 0) {
            return undefined;
        }
        this.count--;
        var result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    getSize() {
        return this.count;
    }
    peek() {
        return this.items[this.count - 1];
    }
}
exports.default = Stack;
//# sourceMappingURL=stack.js.map