"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bst_2 = require("../binary_search_tree/bst");
var bst_1 = new bst_2.BinarySearchTree();
bst_1.add(14);
bst_1.add(8);
bst_1.add(19);
bst_1.add(3);
bst_1.add(6);
bst_1.add(23);
bst_1.add(10);
bst_1.add(15);
bst_1.add(26);
bst_1.add(20);
// bst_1.remove(25)
console.log("BST MIN ", bst_1.findMin());
console.log("BST MAX ", bst_1.findMax());
console.log("BST has 5", bst_1.isPresent(5));
console.log("BST Max Height ", bst_1.findMaxHeight());
console.log("BST Min Height ", bst_1.findMinHeight());
console.log("BST InOrder ", bst_1.printInOrder());
console.log("BST PreOrder ", bst_1.printPreOrder());
console.log("BST PostOrder ", bst_1.printPostOrder());
console.log("BST LevelOrder ", bst_1.printLevelOrder());
//# sourceMappingURL=bstDemo.js.map