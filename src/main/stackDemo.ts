import Stack from '../stack/stack'

let s = new Stack()
s.appendElem(4)
s.appendElem(2)
s.appendElem(6)
s.appendElem("hey")

s.printItems()
console.log("Popped -> ", s.popFromEnd())
console.log("Size -> ", s.getSize())
console.log("Peek -> ", s.peek())