"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue = /** @class */ (function () {
    function Queue() {
        this.items = [];
        this.length = 0;
    }
    Queue.prototype.printQueue = function () {
        console.log("---------\n", this.items);
    };
    Queue.prototype.enqueue = function (item) {
        this.items.push(item);
        this.length++;
    };
    Queue.prototype.dequeue = function () {
        if (this.length > 0) {
            this.length--;
            return this.items.shift();
        }
        else {
            console.log("Queue is empty");
        }
    };
    Queue.prototype.front = function () {
        return this.items[0];
    };
    Queue.prototype.end = function () {
        return this.items[this.length - 1];
    };
    return Queue;
}());
exports.Queue = Queue;
var PQElem = /** @class */ (function () {
    function PQElem(elem, priority) {
        this.elem = elem;
        this.priority = priority;
    }
    return PQElem;
}());
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = [];
    }
    PriorityQueue.prototype.isEmpty = function () {
        return this.items.length === 0;
    };
    PriorityQueue.prototype.printPQueue = function () {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            console.log("--------------");
            for (var i = 0; i < this.items.length; i++) {
                console.log(this.items[i]);
            }
        }
    };
    PriorityQueue.prototype.enqueue = function (elem, priority) {
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
    };
    PriorityQueue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items.shift();
        }
    };
    PriorityQueue.prototype.head = function () {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items[0];
        }
    };
    PriorityQueue.prototype.tail = function () {
        if (this.isEmpty()) {
            console.log("Queue Empty");
        }
        else {
            return this.items[this.items.length - 1];
        }
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;
//# sourceMappingURL=queue.js.map