export class Queue {
    private items: any
    private length: number

    constructor() {
        this.items = []
        this.length = 0
    }

    public printQueue() {
        console.log("---------\n", this.items)
    }

    public enqueue(item: any) {
        this.items.push(item)
        this.length++
    }

    public dequeue() {
        if (this.length > 0) {
            this.length--;
            return this.items.shift()
        } else {
            console.log("Queue is empty")
        }
    }

    public front() {
        return this.items[0]
    }

    public end() {
        return this.items[this.length - 1]
    }
}

class PQElem {
    public elem: any;
    public priority: number;

    constructor(elem: any, priority: number) {
        this.elem = elem;
        this.priority = priority
    }
}

export class PriorityQueue {
    private items: any
    constructor() {
        this.items = []
    }

    public isEmpty() {
        return this.items.length === 0
    }

    public printPQueue() {
        if (this.isEmpty()) {
            console.log("Queue Empty")
        } else {
            console.log("--------------")
            for (var i = 0; i < this.items.length; i++) {
                console.log(this.items[i])
            }
        }
    }

    public enqueue(elem: any, priority: number) {
        var pqElem = new PQElem(elem, priority)
        var done = false

        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i].priority < pqElem.priority) {
                this.items.splice(i, 0, pqElem)
                done = true;
                break
            }
        }

        if (!done) this.items.push(pqElem)
    }

    public dequeue() {
        if (this.isEmpty()) {
            console.log("Queue Empty")
        } else {
            return this.items.shift()
        }
    }

    public head() {
        if (this.isEmpty()) {
            console.log("Queue Empty")
        } else {
            return this.items[0]
        }
    }

    public tail() {
        if (this.isEmpty()) {
            console.log("Queue Empty")
        } else {
            return this.items[this.items.length - 1]
        }
    }

}

