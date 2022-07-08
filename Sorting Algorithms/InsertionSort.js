// This is a workspace with the basic essentials set up to help you learn how to code sorting algorithms
// The included code will generate an array for you so you can focus on creating a dynamic solution

//This function generates the random array with 10 integers
const createArray = () => {
	return Array.from({length: 5}, () => Math.floor(Math.random() * 1000))
}
//Assigns the array created above to a variable
var array = createArray();

// This function is your code
function insertionSort(array) {
	// Start at the beginning and iterate to the end
	// Create an array to push sorted numbers into
	// Compare the number to the previous numbers already sorted
	// [1, 5, 4, 2, 7]
	let n = array.length;
	for(let i = 1; i < n; i++) {
		let current = i;
		while(current > 0 && array[current - 1] < array[current]) {
			let tmp = array[current];
			array[current] = array[current - 1];
			array[current - 1] = tmp;
			current--;
		}
	}
	return array;
}

console.log(insertionSort(array));