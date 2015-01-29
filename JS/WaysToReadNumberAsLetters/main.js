var Ways = function(){
}

Ways.prototype = {
    constructor : Ways,
    findWays : function(str){
        str = new String(str);
        var len = str.length;
        if (len == 0){
         return 0;
         }
        if (len == 1){
            console.log("len is 1");
            return 1;
         }
        if (len == 2){
        //console.log("len is" + len + "will go to CFT with " + str[0] + "," +str[1]);
         return this.checkForTwo(str[0],str[1]) + this.findWays(str.substr(0,1));
         }
        if (len > 2){
         return this.checkForTwo(str[str.length-2],str[str.length-1]) + this.findWays(str.substr(0,str.length-1));
         }
        //GLITCH : substr is inclusive -> we will iterate on first input twice! --> FIXED --> LOL wasn't a bug, just created one xD
        //BUG : for large numbers (ex 4976) will return 4 instead of 1! --> FIXED -> removed the +1 @ each line
    },
    checkForTwo : function(a,b){
        //console.log("CFT(" + a + "," + b +") will return " + ((a+b)<=26 && (a+b) > 0));
        return (a+b)<=26 && (a+b) > 0 ? 1 : 0;
    }

}
