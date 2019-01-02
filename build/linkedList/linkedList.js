"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkedListNode = /** @class */ (function () {
    function LinkedListNode(data) {
        this.data = data;
        this.next = null;
    }
    return LinkedListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.getHead = function () {
        return this.head;
    };
    LinkedList.prototype.getSize = function () {
        return this.length;
    };
    LinkedList.prototype.insertAtStart = function (node) {
        this.head = node;
        this.length++;
    };
    LinkedList.prototype.insertAtEnd = function (node) {
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        currentNode.next = node;
        this.length++;
    };
    LinkedList.prototype.add = function (data) {
        var node = new LinkedListNode(data);
        if (!this.getHead())
            this.insertAtStart(node);
        else {
            var currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
            this.length++;
        }
    };
    LinkedList.prototype.remove = function (data) {
        var currentNode = this.head;
        var previousNode = null;
        var elemMatched = false;
        if (this.head.data == data) {
            if (this.head.next) {
                this.head = this.head.next;
            }
            else {
                this.head = null;
            }
        }
        else {
            while (currentNode) {
                if (currentNode.data == data) {
                    elemMatched = true;
                    break;
                }
                if (currentNode.data != data) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                }
            }
            if (elemMatched) {
                previousNode.next = currentNode.next;
                console.log("Elem Removed");
                this.length--;
            }
            else {
                console.log("Elem Doesnt Exist");
            }
        }
    };
    LinkedList.prototype.isEmpty = function () {
        return this.length == 0;
    };
    LinkedList.prototype.indexOf = function (data) {
        var currentNode = this.head;
        var index = -1;
        while (currentNode) {
            index++;
            if (currentNode.data == data) {
                return index;
            }
            currentNode = currentNode.next;
        }
        return -1;
    };
    LinkedList.prototype.elementAt = function (index) {
        var currentNode = this.head;
        var counter = 0;
        while (counter < index) {
            counter++;
            currentNode = currentNode.next;
        }
        return currentNode;
    };
    LinkedList.prototype.insertAtPos = function (index, elem) {
        var currentNode = this.head;
        var counter = 0;
        var newNode = new LinkedListNode(elem);
        var previousNode = null;
        if (!this.getHead()) {
            this.insertAtStart(newNode);
        }
        else {
            if (index == 0) {
                var tempHead = this.head;
                this.head = newNode;
                newNode.next = tempHead;
                return;
            }
            if (index > this.length) {
                console.log("Index Exceeds Length / Item Missing between index");
                return undefined;
            }
            if (index == this.length) {
                this.insertAtEnd(newNode);
            }
            else if (index < this.length && index > 0) {
                while (counter < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    counter++;
                }
                previousNode.next = newNode;
                newNode.next = currentNode;
                this.length++;
            }
        }
    };
    LinkedList.prototype.removeAtPos = function (index) {
        if (!this.getHead()) {
            console.log("List Empty");
            return undefined;
        }
        else {
            if (index == 0) {
                this.head = this.head.next;
                return;
            }
            if (index > this.length) {
                console.log("Index Exceeds Length");
                return undefined;
            }
            if (index <= this.length && index > 0) {
                var counter = 0;
                var previousNode = null;
                var currentNode = this.head;
                while (counter < index) {
                    previousNode = currentNode;
                    currentNode = currentNode.next;
                    counter++;
                }
                previousNode.next = currentNode.next;
            }
        }
    };
    LinkedList.prototype.printList = function () {
        if (this.head) {
            var currentNode = this.head;
            var str = "";
            while (currentNode) {
                str += currentNode.data + "->";
                currentNode = currentNode.next;
            }
            console.log(str);
        }
        else {
            console.log("List Empty");
            return null;
        }
    };
    return LinkedList;
}());
exports.default = LinkedList;
//# sourceMappingURL=linkedList.js.map