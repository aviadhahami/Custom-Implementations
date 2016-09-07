function isUnique(s){

	let ascii = new Array(128);
	for(let i=0;i<s.length;i++){
		if(ascii[s.charCodeAt(i)]){
			return `No, {${s.charAt(i)}}`
		}else{
			ascii[s.charCodeAt(i)] = true;
		}
	}
	return 'Yes';

}


console.log(isUnique('abcd')) // Yes
console.log(isUnique('abcd23434457')) // No {3}
console.log(isUnique('abcd1234567890kj')) // Yes
console.log(isUnique('99qwertyuioplasdjhg')) // No{9}
console.log(isUnique('0123456789+*/qwertyuiop;lkjhgfdsazxcvbnm,.')); // Yes
