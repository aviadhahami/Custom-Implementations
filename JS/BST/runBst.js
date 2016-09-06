'use strict';

const BST = require('./bst');
let tree = new BST();

tree.insert(3);
tree.insert(1);
tree.insert(9);
tree.insert(0);
tree.insert(5);
tree.insert(2);

tree.printPreOrder(tree.root);
console.log()
tree.printInOrder(tree.root);
console.log()
tree.printPostOrder(tree.root);

