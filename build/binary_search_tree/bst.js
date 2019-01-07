"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BinaryNode {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
exports.BinaryNode = BinaryNode;
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    add(data) {
        const currentNode = this.root;
        if (currentNode == null) {
            this.root = new BinaryNode(data);
            return;
        }
        else {
            const searchTree = (currentNode) => {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = new BinaryNode(data);
                        return;
                    }
                    else {
                        return searchTree(currentNode.left);
                    }
                }
                else if (data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = new BinaryNode(data);
                        return;
                    }
                    else {
                        return searchTree(currentNode.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree(currentNode);
        }
    }
    findMin() {
        var currentNode = this.root;
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    }
    findMax() {
        var currentNode = this.root;
        while (currentNode.right != null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    }
    find(data) {
        var currentNode = this.root;
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else {
                currentNode = currentNode.right;
            }
            if (currentNode == null) {
                return null;
            }
        }
        return currentNode;
    }
    isPresent(data) {
        var currentNode = this.root;
        while (currentNode != null) {
            if (data === currentNode.data) {
                return true;
            }
            else if (data < currentNode.data) {
                currentNode = currentNode.left;
            }
            else if (data > currentNode.data) {
                currentNode = currentNode.right;
            }
        }
        return false;
    }
    remove(data) {
        const removeData = (node, data) => {
            if (node === null)
                return null;
            if (data == node.data) {
                if (node.left == null && node.right == null)
                    return null;
                if (node.left == null)
                    return node.right;
                if (node.right == null)
                    return node.left;
                var tempNode = node.right;
                while (tempNode.left != null) {
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeData(node.right, tempNode.data);
                return node;
            }
            else if (data < node.data) {
                node.left = removeData(node.left, data);
                return node;
            }
            else if (data > node.data) {
                node.right = removeData(node.right, data);
                return node;
            }
        };
        this.root = removeData(this.root, data);
    }
    findMinHeight(node = this.root) {
        if (node === null)
            return -1;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    findMaxHeight(node = this.root) {
        if (node === null)
            return -1;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    }
    printInOrder() {
        if (this.root === null)
            return null;
        else {
            var result = new Array();
            const traverseInOrder = (node) => {
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            };
            traverseInOrder(this.root);
            return result;
        }
    }
    printPreOrder() {
        if (this.root == null)
            return null;
        else {
            var result = new Array();
            const traversePreOrder = (node) => {
                result.push(node.data);
                node.left && traversePreOrder(node.left);
                node.right && traversePreOrder(node.right);
            };
            traversePreOrder(this.root);
            return result;
        }
    }
    printPostOrder() {
        if (this.root == null)
            return null;
        else {
            var result = new Array();
            const traversePostOrder = (node) => {
                node.left && traversePostOrder(node.left);
                node.right && traversePostOrder(node.right);
                result.push(node.data);
            };
            traversePostOrder(this.root);
            return result;
        }
    }
    printLevelOrder() {
        let result = new Array();
        let Queue = new Array();
        if (this.root == null)
            return null;
        else {
            Queue.push(this.root);
            while (Queue.length > 0) {
                let currentNode = Queue.shift();
                result.push(currentNode.data);
                if (currentNode.left != null) {
                    Queue.push(currentNode.left);
                }
                if (currentNode.right != null) {
                    Queue.push(currentNode.right);
                }
            }
            return result;
        }
    }
}
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=bst.js.map