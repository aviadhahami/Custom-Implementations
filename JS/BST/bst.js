class Node{
	constructor(val){
		this.data = val;
		this.left = null;
		this.right = null;
	}

}
class BST{
	constructor(vals){
		this.root = null;

		if(vals){
			vals.forEach(val =>{
				this.insert(val);
			});
		}
	}

	insert(val){
		this._insert(this.root, val);
	}

	_insert(node, val){
		if(node == null){
			// Means root
			this.root = new Node(val,null,null);
			return;
		}
		if(node.data < val){
			// Go right
			if(node.right == null){
				node.right = new Node(val,null,null);
			}else{
				this._insert(node.right,val);				
			}
		}else{
			// Go left
			if(node.left == null){
				node.left = new Node(val,null,null);
			}else{
				this._insert(node.left,val);				
			}
		}
	}

	printInOrder(node){
		if (node == null) return;
		this.printInOrder(node.left);
		process.stdout.write(node.data + ',');
		this.printInOrder(node.right);
	}

	printPreOrder(node){
		if (node == null) return;
		process.stdout.write(node.data + ',');
		this.printInOrder(node.left);
		this.printInOrder(node.right);
	}

	printPostOrder(node){
		if (node == null) return;
		this.printInOrder(node.left);
		this.printInOrder(node.right);
		process.stdout.write(node.data + ',');
	
	}
}

module.exports = BST;