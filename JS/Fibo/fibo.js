class Fibo{
	static calc(i){
		if (i<0) return 0; // Cover your ass
		if(i < 2) return i; // Base cases
		return Fibo.calc(i-1) + Fibo.calc(i-2);
	}

	static calc_memo(i){
		let cache = [];
		if (i<0) return 0;
		cache[0] = 0;
		cache[1] = 1;
		for(let j=2;j<=i;j++){
			cache[j] = cache[j-1] + cache[j-2];
		}
		return cache[i];
	}
	
}

module.exports = Fibo