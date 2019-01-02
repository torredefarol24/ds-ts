"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var queue_1 = require("../queue/queue");
var q = new queue_1.Queue();
q.enqueue(2);
q.enqueue(3);
q.enqueue("e");
q.enqueue("wow");
q.printQueue();
q.dequeue();
q.printQueue();
console.log("Priority Queue");
// high priority denoted by higher number
var pq = new queue_1.PriorityQueue();
pq.enqueue("Take Shower", 5);
pq.enqueue("Wash clothes", 2);
pq.enqueue("Finish Book", 3);
pq.enqueue("Go to Bed", 4);
pq.printPQueue();
//# sourceMappingURL=queueDemo.js.map