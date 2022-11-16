sum = [2,13,34,5];
theArray = [12,3,37,5];

function sumTheElements(array){

let total = 0;

	//your code here
	for (let index = 0; index < array.length; index++) {
		total += array[index];
	}	
	return total;

}

console.log(sumTheElements(theArray))