// May 24, 2022

// Today's Problem

// Given an array on non-sorted integers (array) and a target integer (target) return and array of the two integers whose sum is equal to the target sum

// Example:
let array =  [3, 5, -4, 8, 11, 1, -1, 6]
let target = 10

// Output: [-1, 11]


// === BRUTE FORCE ===
// function twoSum(array, target) {
// 	for(let i = 0; i < array.length; i++) {
// 		for(let j = i + 1; j < array.length; j++) {
// 			if(array[i] + array[j] === target) {
// 				return [array[i], array[j]];
// 			}
// 		}
// 	}
// }

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// function twoSum(array, target) {
// 	let nums = {};

// 	for(const num of array) {
// 		const potentialMatch = target - num; // 7

// 		if(potentialMatch in nums) {
// 			return [potentialMatch, num];
// 		} else {
// 			nums[num] = true;
// 		}
// 	console.log(nums);
// 	}
// 	return [];
// }

function twoSum(array, target) {
	let i = 0;
	let j = array.length - 1;

	array = array.sort((a, b) => a - b);

	while(i < j) {
		let sum = array[i] + array[j];

		if(sum === target) {
			return [array[i], array[j]];
		} else if (sum < target) {
			i++;
		} else if(sum > target) {
			j--;
		}
	}
}

console.log(twoSum(array, target));