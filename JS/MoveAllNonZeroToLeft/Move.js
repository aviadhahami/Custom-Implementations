/*Given an array of integers. 

Move all non-zero elements to the left of all zero elements.

Solution time complexity:
time-complex. : O(n)
space-complex: O(n)*/


var a = [1, 0, 2, 0, 4, 0, 5, 0, 9, 10, 11];


function propRight() {
    this.count = 0;
    this.result = [];
}
propRight.prototype = {
    constructor: propRight,
    go: function(arr) {
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                this.count++;
            } else {
                this.result.push(arr[i]);
            }
        }
        for (i = 0; i < this.count; i++) {
            this.result.push(0);
        }
        return this.result;
    }

}