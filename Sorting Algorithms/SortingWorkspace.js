// This is a workspace with the basic essentials set up to help you learn how to code sorting algorithms
// The included code will generate an array for you so you can focus on creating a dynamic solution

//This function generates the random array with 10 integers
const createArray = () => {
	return Array.from({length: 10}, () => Math.floor(Math.random() * 1000))
}
//Assigns the array created above to a variable
var array = createArray();

// This function is your code
function sort(array) {
	//enter code here, make sure to return your sorted array
	return array;
}

console.log(sort(array));