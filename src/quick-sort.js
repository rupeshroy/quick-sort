'use strict';

function quickSort(input) {
if(input.constructor ===Array)
{
	if(!input.length)	
	{
		if(input.length ==1)
		 {
			 return input;
		 }
		 else{
			 if(input.length >1 && typeof(input[0])=='Number')
			 {
				 return input.sort(function(a, b){return a-b});
			 }
			 else
			 {
				  return input.sort();
			 }
		 }
	} 
	 else 
	 {
		 return;
		}
}
else{
	throw Error("not an array");
}

};
module.exports = quickSort;