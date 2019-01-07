"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const stack_1 = __importDefault(require("../stack/stack"));
let s = new stack_1.default();
s.appendElem(4);
s.appendElem(2);
s.appendElem(6);
s.appendElem("hey");
s.printItems();
console.log("Popped -> ", s.popFromEnd());
console.log("Size -> ", s.getSize());
console.log("Peek -> ", s.peek());
//# sourceMappingURL=stackDemo.js.map