class LinkedListNode {
    public data: any
    public next: any

    constructor(data: any) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    private head: any
    private length: number

    constructor() {
        this.head = null
        this.length = 0
    }

    public getHead() {
        return this.head
    }

    public getSize() {
        return this.length
    }

    private insertAtStart(node: LinkedListNode) {
        this.head = node
        this.length++
    }

    private insertAtEnd(node: LinkedListNode) {
        var currentNode = this.head
        while (currentNode.next) {
            currentNode = currentNode.next
        }
        currentNode.next = node
        this.length++
    }

    public add(data: any) {
        var node = new LinkedListNode(data)
        if (!this.getHead()) this.insertAtStart(node)
        else {
            var currentNode: LinkedListNode = this.head
            while (currentNode.next) {
                currentNode = currentNode.next
            }
            currentNode.next = node
            this.length++
        }
    }

    public remove(data: any) {
        var currentNode = this.head
        var previousNode = null
        var elemMatched = false
        if (this.head.data == data) {
            if (this.head.next) {
                this.head = this.head.next
            } else {
                this.head = null
            }
        } else {
            while (currentNode) {
                if (currentNode.data == data) {
                    elemMatched = true
                    break
                }
                if (currentNode.data != data) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                }
            }
            if (elemMatched) {
                previousNode.next = currentNode.next
                console.log("Elem Removed")
                this.length--
            } else {
                console.log("Elem Doesnt Exist")
            }
        }
    }

    public isEmpty() {
        return this.length == 0
    }

    public indexOf(data: any) {
        var currentNode = this.head;
        var index = -1

        while (currentNode) {
            index++
            if (currentNode.data == data) {
                return index
            }
            currentNode = currentNode.next
        }
        return -1
    }

    public elementAt(index: number) {
        var currentNode = this.head
        var counter = 0

        while (counter < index) {
            counter++
            currentNode = currentNode.next
        }
        return currentNode
    }

    public insertAtPos(index: number, elem: any) {
        var currentNode = this.head
        var counter = 0
        var newNode = new LinkedListNode(elem)
        var previousNode = null

        if (!this.getHead()) {
            this.insertAtStart(newNode)
        } else {
            if (index == 0) {
                var tempHead = this.head
                this.head = newNode
                newNode.next = tempHead
                return
            }

            if (index > this.length) {
                console.log("Index Exceeds Length / Item Missing between index")
                return undefined
            }

            if (index == this.length) {
                this.insertAtEnd(newNode)
            } else if (index < this.length && index > 0) {
                while (counter < index) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                    counter++
                }
                previousNode.next = newNode
                newNode.next = currentNode
                this.length++
            }
        }
    }

    public removeAtPos(index: number) {
        if (!this.getHead()) {
            console.log("List Empty")
            return undefined
        }
        else {
            if (index == 0) {
                this.head = this.head.next
                return
            }
            if (index > this.length) {
                console.log("Index Exceeds Length")
                return undefined
            }

            if (index <= this.length && index > 0) {
                var counter = 0
                var previousNode = null
                var currentNode = this.head

                while (counter < index) {
                    previousNode = currentNode
                    currentNode = currentNode.next
                    counter++
                }

                previousNode.next = currentNode.next
            }
        }
    }

    public printList() {
        if (this.head) {
            var currentNode = this.head
            var str = ""
            while (currentNode) {
                str += currentNode.data + "->"
                currentNode = currentNode.next
            }
            console.log(str)
        } else {
            console.log("List Empty")
            return null
        }
    }

}

export default LinkedList