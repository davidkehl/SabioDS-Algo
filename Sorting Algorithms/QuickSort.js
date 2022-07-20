// This is a workspace with the basic essentials set up to help you learn how to code sorting algorithms
// The included code will generate an array for you so you can focus on creating a dynamic solution

//This function generates the random array with 10 integers
const createArray = () => {
	return Array.from({length: 10}, () => Math.floor(Math.random() * 1000))
}
//Assigns the array created above to a variable
var array = createArray();

// This function is your code
function quickSort(array, start, end) {
	if(start < end) {
		let pivot = partition(array, start, end);

		//sorts left subarray
		quickSort(array, start, pivot);

		//sort right subarray
		quickSort(array, pivot + 1, end);
	}
	return array;
}

function partition(array, start, end) {
	let pivot = Math.floor((start + end) / 2)
	let pivotVal = array[pivot];

	while(true) {
		while(array[start] < pivotVal) {
			start++;
		}
		while(array[end] > pivotVal) {
			end--;
		}
		if(start >= end) {
			return end;
		}
		let temp = array[start]; //4
		array[start] = array[end];
		array[end] = temp;
	}
}

// Time complexity: Best/average => O(nLogn), Worst = O(n^2);
// Space complexity: O(nLogn)


console.log(quickSort(array, 0, array.length - 1));