import LinkedList from '../linkedList/linkedList'

let ll1 = new LinkedList()
ll1.printList()
console.log("-------")

ll1.add(2)
ll1.add(14)
ll1.add(6)
ll1.remove(6)
ll1.add(9)
ll1.add(14)

ll1.printList()
console.log("List Head :", ll1.getHead().data)
console.log("List Size :", ll1.getSize())
console.log("Index of Elem 6 : ", ll1.indexOf(6))
console.log("Element at index 2 :", ll1.elementAt(2).data)
console.log("List is Empty : ", ll1.isEmpty())

console.log("Insert 23 at position 3")
ll1.insertAtPos(3, 23)
ll1.printList()

console.log("Remove Elem At pos 2")
ll1.removeAtPos(2)
ll1.printList()