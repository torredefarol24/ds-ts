"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = __importDefault(require("../map/map"));
var m1 = new map_1.default();
m1.set("Rooms", 1);
m1.set("Balcony", 2);
m1.set("Road", 4);
console.log("get Value of Balcony", m1.getValue('Balcony'));
m1.set("Balcony", 5);
console.log("Get new value of Balcony", m1.getValue("Balcony"));
console.log("Map has key Roof ", m1.has("Roof"));
console.log("Size of Map ", m1.size());
console.log("Get Keys in Map", m1.getKeys());
console.log("Get Vals in Map", m1.getValues());
m1.printMap();
console.log("All Data of Map ", m1.getAllData());
console.log("Map Snapshot ", m1.printMapSnapshot());
//# sourceMappingURL=mapDemo.js.map