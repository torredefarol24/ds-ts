export class BinaryNode {
    public data: any
    public left: any
    public right: any

    constructor(data: any, left = null, right = null) {
        this.data = data;
        this.left = left
        this.right = right
    }
}

export class BinarySearchTree {
    public root: any

    constructor() {
        this.root = null
    }

    public add(data: any) {
        const currentNode = this.root
        if (currentNode == null) {
            this.root = new BinaryNode(data)
            return
        } else {

            const searchTree = (currentNode: BinaryNode): any => {
                if (data < currentNode.data) {
                    if (currentNode.left === null) {
                        currentNode.left = new BinaryNode(data)
                        return
                    } else {
                        return searchTree(currentNode.left)
                    }
                } else if (data > currentNode.data) {
                    if (currentNode.right === null) {
                        currentNode.right = new BinaryNode(data)
                        return
                    } else {
                        return searchTree(currentNode.right)
                    }
                } else {
                    return null
                }
            }

            return searchTree(currentNode)
        }
    }

    public findMin() {
        var currentNode = this.root
        while (currentNode.left != null) {
            currentNode = currentNode.left
        }
        return currentNode.data
    }

    public findMax() {
        var currentNode = this.root
        while (currentNode.right != null) {
            currentNode = currentNode.right
        }
        return currentNode.data
    }

    public find(data: any) {
        var currentNode = this.root
        while (currentNode.data !== data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
            if (currentNode == null) {
                return null
            }
        }
        return currentNode
    }

    public isPresent(data: any) {
        var currentNode = this.root
        while (currentNode != null) {
            if (data === currentNode.data) {
                return true
            } else if (data < currentNode.data) {
                currentNode = currentNode.left
            } else if (data > currentNode.data) {
                currentNode = currentNode.right
            }
        }
        return false
    }

    public remove(data: any) {
        const removeData = (node: any, data: any) => {
            if (node === null) return null
            if (data == node.data) {
                if (node.left == null && node.right == null) return null

                if (node.left == null) return node.right

                if (node.right == null) return node.left

                var tempNode = node.right
                while (tempNode.left != null) {
                    tempNode = tempNode.left
                }
                node.data = tempNode.data
                node.right = removeData(node.right, tempNode.data)
                return node
            } else if (data < node.data) {
                node.left = removeData(node.left, data)
                return node
            } else if (data > node.data) {
                node.right = removeData(node.right, data)
                return node
            }
        }
        this.root = removeData(this.root, data)
    }

    public findMinHeight(node = this.root): any {
        if (node === null) return -1
        let left = this.findMinHeight(node.left)
        let right = this.findMinHeight(node.right)

        if (left < right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    public findMaxHeight(node = this.root): any {
        if (node === null) return -1
        let left = this.findMaxHeight(node.left)
        let right = this.findMaxHeight(node.right)

        if (left > right) {
            return left + 1
        } else {
            return right + 1
        }
    }

    public printInOrder() {
        if (this.root === null) return null
        else {
            var result = new Array()
            const traverseInOrder = (node: any) => {
                node.left && traverseInOrder(node.left)
                result.push(node.data)
                node.right && traverseInOrder(node.right)
            }
            traverseInOrder(this.root)
            return result
        }
    }

    public printPreOrder() {
        if (this.root == null) return null
        else {
            var result = new Array()
            const traversePreOrder = (node: any) => {
                result.push(node.data)
                node.left && traversePreOrder(node.left)
                node.right && traversePreOrder(node.right)
            }
            traversePreOrder(this.root)
            return result
        }
    }

    public printPostOrder() {
        if (this.root == null) return null
        else {
            var result = new Array()
            const traversePostOrder = (node: any) => {
                node.left && traversePostOrder(node.left)
                node.right && traversePostOrder(node.right)
                result.push(node.data)
            }
            traversePostOrder(this.root)
            return result
        }
    }

    public printLevelOrder() {
        let result = new Array()
        let Queue = new Array()
        if (this.root == null) return null
        else {
            Queue.push(this.root)
            while (Queue.length > 0) {
                let currentNode = Queue.shift()
                result.push(currentNode.data)
                if (currentNode.left != null) {
                    Queue.push(currentNode.left)
                }
                if (currentNode.right != null) {
                    Queue.push(currentNode.right)
                }
            }
            return result
        }
    }

}