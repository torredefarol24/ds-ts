"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const queue_1 = require("../queue/queue");
class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.ajdList = new Map();
    }
    addVertice(v) {
        this.ajdList.set(v, []);
    }
    addEdge(src, dest) {
        this.ajdList.get(src).push(dest);
        this.ajdList.get(dest).push(src); // Graph is undirected
    }
    printGraph() {
        var vertices = this.ajdList.keys();
        for (var i of vertices) {
            var edges = this.ajdList.get(i);
            var path = "";
            for (var j in edges) {
                path += edges[j] + " ";
            }
            console.log(i + " => " + path);
        }
    }
    breadthFristSearch(startingNode) {
        var visited = [];
        var q = new queue_1.Queue();
        visited[startingNode] = true;
        q.enqueue(startingNode);
        while (!q.isEmpty()) {
            var currentQueueElem = q.dequeue();
            console.log("Vertex: ", currentQueueElem);
            var adjacentList = this.ajdList.get(currentQueueElem);
            for (var i = 0; i < adjacentList.length; i++) {
                var item = adjacentList[i];
                if (!visited[item] == true) {
                    visited[item] = true;
                    q.enqueue(item);
                }
            }
        }
    }
    depthFirstSearch(startingNode) {
        var visited = [];
        for (var i = 0; i < visited.length; i++) {
            visited[i] = false;
        }
        this.DFSUtil(startingNode, visited);
    }
    DFSUtil(vert, visited) {
        visited[vert] = true;
        console.log("Vertex: ", vert);
        var neighbors = this.ajdList.get(vert);
        for (var i in neighbors) {
            var item = neighbors[i];
            if (!visited[item])
                this.DFSUtil(item, visited);
        }
    }
}
exports.default = Graph;
//# sourceMappingURL=graph.js.map