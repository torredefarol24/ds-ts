"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BinaryNode = /** @class */ (function () {
    function BinaryNode(data, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.data = data;
        this.left = left;
        this.right = right;
    }
    return BinaryNode;
}());
exports.BinaryNode = BinaryNode;
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        this.root = null;
    }
    BinarySearchTree.prototype.add = function (data) {
        var currentNode = this.root;
        if (currentNode == null) {
            this.root = new BinaryNode(data);
            return;
        }
        else {
            var searchTree_1 = function (currentNode) {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = new BinaryNode(data);
                        return;
                    }
                    else {
                        return searchTree_1(currentNode.left);
                    }
                }
                else if (data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = new BinaryNode(data);
                        return;
                    }
                    else {
                        return searchTree_1(currentNode.right);
                    }
                }
                else {
                    return null;
                }
            };
            return searchTree_1(currentNode);
        }
    };
    BinarySearchTree.prototype.findMin = function () {
        var currentNode = this.root;
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode.data;
    };
    BinarySearchTree.prototype.findMax = function () {
        var currentNode = this.root;
        while (currentNode.right != null) {
            currentNode = currentNode.right;
        }
        return currentNode.data;
    };
    BinarySearchTree.prototype.find = function (data) {
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
    };
    BinarySearchTree.prototype.isPresent = function (data) {
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
    };
    BinarySearchTree.prototype.remove = function (data) {
        var removeData = function (node, data) {
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
    };
    BinarySearchTree.prototype.findMinHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return -1;
        var left = this.findMinHeight(node.left);
        var right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    };
    BinarySearchTree.prototype.findMaxHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node === null)
            return -1;
        var left = this.findMaxHeight(node.left);
        var right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
    };
    BinarySearchTree.prototype.printInOrder = function () {
        if (this.root === null)
            return null;
        else {
            var result = new Array();
            var traverseInOrder_1 = function (node) {
                node.left && traverseInOrder_1(node.left);
                result.push(node.data);
                node.right && traverseInOrder_1(node.right);
            };
            traverseInOrder_1(this.root);
            return result;
        }
    };
    BinarySearchTree.prototype.printPreOrder = function () {
        if (this.root == null)
            return null;
        else {
            var result = new Array();
            var traversePreOrder_1 = function (node) {
                result.push(node.data);
                node.left && traversePreOrder_1(node.left);
                node.right && traversePreOrder_1(node.right);
            };
            traversePreOrder_1(this.root);
            return result;
        }
    };
    BinarySearchTree.prototype.printPostOrder = function () {
        if (this.root == null)
            return null;
        else {
            var result = new Array();
            var traversePostOrder_1 = function (node) {
                node.left && traversePostOrder_1(node.left);
                node.right && traversePostOrder_1(node.right);
                result.push(node.data);
            };
            traversePostOrder_1(this.root);
            return result;
        }
    };
    BinarySearchTree.prototype.printLevelOrder = function () {
        var result = new Array();
        var Queue = new Array();
        if (this.root == null)
            return null;
        else {
            Queue.push(this.root);
            while (Queue.length > 0) {
                var currentNode = Queue.shift();
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
    };
    return BinarySearchTree;
}());
exports.BinarySearchTree = BinarySearchTree;
//# sourceMappingURL=bst.js.map