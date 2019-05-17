'use strict';
const read = require('readline-sync');
const direction = quest => {
	let res = read.question(quest, '');
	if(res.toLowerCase() == 'left'){
		return "L";
	} else if(res.toLowerCase() == "right"){
		return "R";
	}
	throw new Error(">>>Invalid direction: "+ res + " <<<");
}
 const look = () => {
	if(direction("Left or right? ") == 'L'){
		return "Lady Gaga";
	} else{
		return "Jason";
	}
}
try{
	console.log("You see: "+look());
}catch(error){
	console.log("There's something wrong. "+error);
}
