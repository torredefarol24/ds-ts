"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    printQueue() {
        console.log("---------\n", this.items);
    }
    isEmpty() {
        return this.items.length === 0;
    }
    enqueue(item) {
        this.items.push(item);
        this.length++;
    }
    dequeue() {
        if (this.length > 0) {
            this.length--;
            return this.items.shift();
        }
        else {
            console.log("Queue is empty");
        }
    }
    front() {
        return this.items[0];
    }
    end() {
        return this.items[this.length - 1];
    }
}
exports.Queue = Queue;
class PQElem {
    constructor(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }
}
class PriorityQueue {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    printPQueue() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            console.log("--------------");
            for (var i = 0; i < this.items.length; i++) {
                console.log(this.items[i]);
            }
        }
    }
    enqueue(elem, priority) {
        var pqElem = new PQElem(elem, priority);
        var done = false;
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority < pqElem.priority) {
                this.items.splice(i, 0, pqElem);
                done = true;
                break;
            }
        }
        if (!done)
            this.items.push(pqElem);
    }
    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items.shift();
        }
    }
    head() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items[0];
        }
    }
    tail() {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items[this.items.length - 1];
        }
    }
}
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=queue.js.map