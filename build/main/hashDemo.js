"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const hashTable_1 = __importDefault(require("../hashTable/hashTable"));
let ht = new hashTable_1.default();
ht.add("Spiderman", "superhero");
ht.add("Tom", "cat");
ht.add("TopCat", "cat");
ht.add("Dino", "dinosaur");
ht.add("Harry", "person");
ht.printTable();
//# sourceMappingURL=hashDemo.js.map