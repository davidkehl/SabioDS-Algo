// This is a workspace with the basic essentials set up to help you learn how to code sorting algorithms
// The included code will generate an array for you so you can focus on creating a dynamic solution

//This function generates the random array with 10 integers
const createArray = () => {
	return Array.from({length: 10}, () => Math.floor(Math.random() * 1000))
}
//Assigns the array created above to a variable
var array = createArray();

// This function is your code
function bubbleSort(array) {
	//enter code here, make sure to return your sorted array
	let i, j;
	let isSwapped = false;
	let len = array.length;
	for(i = 0; i < len; i++) {
		isSwapped = false;
		for (let j = 0; j < len - i; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				isSwapped = true;
			}
		}
		if(!isSwapped) {
			break;
		}
	}

	return array;
}

// Time complexity: O(n^2) -> worst/average case O(n) -> best case

// Space complexity: O(1)

console.log(bubbleSort(array));