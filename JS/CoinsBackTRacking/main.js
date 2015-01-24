//Relax and own this :)
//GL HF !

//input : 2 parameters -> sum of money and a list of coin values
//ex -> sum is 4 cent and a list of coins, where each coin has a different value
//write a fn that returns the amount of ways you can create the sum via the coins given in the list.
//runtime should be O(n*m) => amount * listSize, space complx O(n)


var sum = 20;
var coins = [1,2,3,4];

//Option A : Backtracking
//Option B : ????


var main = function(){
    this.amount = 0;
}

main.prototype = {
    constructor : main,
    mainScope : this, //allwos us to get access to object vars
    checkDivide : function(sum,coins){
        //we test if the sum can be divided using the coin - then we have one more option
           for (i =0;i<coins.length-1;i++){
               mainScope.amount += ((sum % coins[i]) == 0) ? 1 : 0;
           }
    },
    mainProccess : function(sum, coins){
    //this function will use backtracking to retrieve all the possible 
    //legal permutations of the coins-sum problem
    //TODO: CHECK DUPLICATIONS !!!
        if (sum < 0) return; //we failed this permutation
        if (sum == 0){
           mainScope.amount++;
           return;
        }else{
               for (j=0;j<coins.length -1;j++){
                   if (sum-coins[j] < 0){
                       continue;
                   }else if (sum-coins[j] == 0){
                         mainScope.amount++;
                         return;
                   }else{
                       mainProccess(sum-coins[j],coins);
                   }
               }
        }
    }   
}