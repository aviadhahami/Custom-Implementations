node = function() {}
node.prototype = {
    right: null,
    left: null,
    value: null
}

BST = function(value) {
    this.root = value;
}

BST.prototype = {
    constructor: BST,
    insert: function(newNode, currNode) {
        if (currNode == null) {
            currNode = newNode;
            return;
        }
        if (newNode.value <= currNode.value) {
            if (currNode.left == null) {
                currNode.left = newNode;
            } else {
                this.insert(newNode, currNode.left);
            }
        } else {
            if (currNode.right == null) {
                currNode.right = newNode;
            } else {
                this.insert(newNode, currNode.right);
            }
        }
    }
    
}