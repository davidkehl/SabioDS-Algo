

// Write a function to find the Max Length of any character in the given array

/*
function getMax(array) {
	let length = 1;
	for (let i = 0; i < array.length; i++) {
		let num = array[i].toString()
		length = Math.max(length, num.length)
	}	
	return length;
}
*/

getMax = nums => {
	let max = 0;
	for(let num of nums) {
		max = (max < num.toString().length ? num.toString().length : max)
	}
	return max;
}

getPosition = (num, place) => Math.floor(num / Math.pow(10, place)) % 10

radixSort = array => {
	let max = getMax(array);

	for(let i = 0; i < max; i++) {
		let buckets = Array.from({ length: 10 }, () => []);
		for(let j = 0; j < array.length; j++) {
			let num = getPosition(array[j], i);
			buckets[num].push(array[j]);
		}
		array = [].concat(...buckets);
	}
	return array;
}

const unsortedArr = [1891, 1270, 1342, 1997, 1403, 1349, 33, 1192, 602, 1231, 1155, 880, 120, 1212, 1459, 434, 1859, 367, 1477, 1070, 703, 1274, 1315, 225, 723];

console.log(radixSort(unsortedArr));
