// This is a workspace with the basic essentials set up to help you learn how to code sorting algorithms
// The included code will generate an array for you so you can focus on creating a dynamic solution

//This function generates the random array with 10 integers
const createArray = () => {
	return Array.from({length: 10}, () => Math.floor(Math.random() * 1000))
}
//Assigns the array created above to a variable
var array = createArray();

// This function is your code
function selectionSort(array) {
	// Find the smallest value in the array
	// Use for loop to iterate through the array
	// Set the smallest number to a variable we can access later
	// Keep track of how many times we have iterated through the array
	// Switch the current index with the smallest number in array
	let n = array.length;
	// [3, 5, 1, 2, 7]
	for(let i = 0; i < n; i++) {
		let min = i;
		for(let j = i + 1; j < n; j++) {
			if(array[j] < array[min]) {
				min = j;
			}
		}
		if(min != i) {
			let tmp = array[i];
			array[i] = array[min];
			array[min] = tmp;
		}
	}
	return array;
}
// Time Complexity: O(n^2)
// Space Complexity: O(1)

console.log(selectionSort(array));