"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graph_1 = __importDefault(require("../graph/graph"));
var g = new graph_1.default(6);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (var i = 0; i < vertices.length; i++) {
    g.addVertice(vertices[i]);
}
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('C', 'E');
g.addEdge('C', 'F');
g.addEdge('F', 'E');
g.addEdge('D', 'E');
console.log("Printing Graph");
g.printGraph();
console.log("Breadth First Search");
g.breadthFristSearch("A");
console.log("Depth First Search");
g.depthFirstSearch("A");
//# sourceMappingURL=graphDemo.js.map