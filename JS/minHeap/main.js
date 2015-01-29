//Given 2 strs, device if they are permutations of one another.


//ALG. : Generate 2 min or max heaps into arrays -> iterate and verify equalness. O(nlogn)

//HEAP INPLEMENTATION

var treeNode = function(val){
    this.val = val;
}
//REMINDER : childs sits in 2*i and 2*i+1 respectivly
var minHeap = function(arr){
    this.src = arr;
    this.tree = [];
    self=this;
    this.src.map(function(x){self.insert(x,self.tree);});
}

minHeap.prototype = {
    contructor : minHeap,
     swap : function(i,tree){ //SWAP IS BUGGY
         if (tree[0] =! null ){
             if(tree[i].val < tree[i/2].val){
                 var temp = tree[i].val;
                 tree[i].val = tree[i/2].val;
                 tree[i/2].val = temp;
                 swap(i/2);
             }
         }
    },
    insert : function(num){
        var node = new treeNode(num);
        this.tree[this.tree.length] = node;
        this.swap(this.tree.length-1);
    },
    toString: function(){
        var out ="";
        for (i=0;i<this.tree.length;i++){
            out += this.tree[i].val + "->";
        }
        out += "EOF";
        return out;
    }

}
