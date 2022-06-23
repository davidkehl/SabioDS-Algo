// Iterate from the beginning

function fromStart(array, target) {
	for (let i =0; i<array.length; i++) {
		if (array[i] === target) {
			console.log(i)
		}
	}
}

function fromEnd(array, target) {
	for (let i = array.length -1; i>= 0; i--){
		if(array[i] === target){
			console.log(i)
		}
	}

}

function twoPointerEnd(array, target) {
	let left = 0;
	let right = array.length - 1;
	while (left < right) {
		
		if (array[left] + array[right] < target) {
			left += 1;
		}
		else if (array[left] + array[right] > target) {
			right -= 1;
		}
		 else {
			console.log(left, right)
		}
	}
}

function phoneBook(array, target) {
	return helper(array, target);
}

function helper(array, target) {

	let half = Math.floor(array.length / 2);
	console.log(array, array[half], target);
	if(target === array[half]) {
		return array[half];
	} else if(target < array[half]) {
		let newArr = array.slice(0, half);
		helper(newArr, target);
	} else {
		let newArr = array.slice(half, array.length);
		helper(newArr, target);
	}
}

var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
var target = 51;

console.log(phoneBook(array, target));