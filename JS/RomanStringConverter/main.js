//Given a string in a roman numeral format
//Example : E.G. You're given XIV
//Output 14.


//OUTPUT OF O(n)

var main = function(str){
    this.romanString = str;
    this.constants = {
        I : 1,
        V : 5,
        X : 10,
        M : 1000
    }
    this.resultCounter = 0;
}

main.prototype = {
    constructor: main,

    converter :function(rStr){
        //we will need to check each time for a combo of I and some big char ( M, X , V etc.)
        if (rStr == "") return 0; // <-- covering edge case
        rStr = rStr.toUpperCase();

        var coupleTester = function(a,b,constants){
        //return true if combo
        //combo : when I is the predecessor of V,X,M etc.
            if (! (getConstant(b,constants)-1 == 0)){
                //its not an I ....
                return true;
            }
            return false;
        }

        var getConstant = function(P,constants){
            return constants[P];
        }

        for ( i=0;i <= rStr.length -1;i++){
            //console.log(getConstant(rStr[i],this.constants));
            //console.log(this.resultCounter + " char is : " + rStr[i]);
            if (getConstant(rStr[i],this.constants) == 1) {
                if (i < rStr.length -1) {
                    if (! coupleTester(rStr[i],rStr[i+1],this.constants)){
                        //means there's an I after this.
                        this.resultCounter++;
                    }else{
                        //means we hit the form of "IV", "IX" etc.
                         this.resultCounter += getConstant(rStr[i+1],this.constants) -1;
                         i++;
                    }
                }else{
                    this.resultCounter++;
                }

            }else{
                //means we hit a constant, no combo check needed
                this.resultCounter += getConstant(rStr[i],this.constants);
            }
        }
    }
}
