import { Queue, PriorityQueue } from '../queue/queue'

let q = new Queue()
q.enqueue(2)
q.enqueue(3)
q.enqueue("e")
q.enqueue("wow")
q.printQueue()

q.dequeue()
q.printQueue()

console.log("Priority Queue")
// high priority denoted by higher number

let pq = new PriorityQueue()
pq.enqueue("Take Shower", 5)
pq.enqueue("Wash clothes", 2)
pq.enqueue("Finish Book", 3)
pq.enqueue("Go to Bed", 4)

pq.printPQueue()