var qItem = function(){
    this.data = null; //some int or string
    this.next = null; //will be of type qItem
}

var Queue = function(){
    var head = new qItem;
    this.root = head;
}

Queue.prototype = {
constructr : Queue, //initiating root to be a node without data nor next
peekRoot : function(){
            return this.root;
            },
getNext : function(){
            if (this.root){
                var rdy = this.root;
                this.root = this.root.next; //we go to next item in list
                rdy.next = null;
                return rdy;
            }else return -1;
},
insertItem : function(item){ //item is of type qItem
            if (this.root == null) {
                this.root = item;
                return;
            }else{
                var p = this.root;
                while(p.next != null){
                    p = p.next;
                }
                p.next = item;
                return;
            }
},
getSize : function(){
            var thisItem = this.root;
            var count = 0;
            while (!! thisItem ){
                thisItem = thisItem.next;
                count++;
            }
            return count;
            },
toString : function(){
             var thisItem = this.root;
             var finalStr = "";
             while (!! thisItem){
                finalStr += !thisItem.data ? "__" : thisItem.data;
                finalStr += " -> "
                 thisItem = thisItem.next;
             }
             console.log(finalStr + "EOF");
             }
}
