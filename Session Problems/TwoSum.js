// Two Sum

// array = [3, 5, -4, 8, 11, 1, -1, 6];
// target = 10;

// if there is a solution return the two numbers that equal the target in any order
// if there is no solution return empty array

// Time complexities: O(n^2), O(nLogn), O(n)

function twoSum(array, target) {
	let length = array.length - 1
	for(let i = 0; i < length; i++) {
		const firstNum = array[i];
		for(let j = i + 1; j < length; j++) {
			const secondNum = array[j];
			if(firstNum + secondNum === target) {
				return [firstNum, secondNum];
			}
		}
	}
	return [];
}
//Time: O(n^2) | Space: O(1)

// array = [-4, -1, 1,  3, 5,  6, 8, 11]
// target = 17;

function twoSumSecond(array, target) {
	array.sort((a, b) => a - b); // O(nLogn)
	let left = 0;
	let right = array.length - 1; // O(1)
	while(left < right) {
		let currentSum = array[left] + array[right];
		if(currentSum === target) {
			return [array[left], array[right]];
		} else if (currentSum < target) {
			left++;
		} else if (currentSum > target) {
			right--;
		}
	}
	return [];
}
//Time: O(nLogn) | Space: O(1)


// array = [3, 5, -4, 8, 11, 1, -1, 6];
// target = 10;
function twoSumHash(array, target) {
	const nums = {}; //O(n)
	for(const num of array) { // num === array[i]
		const potentialMatch = target - num;
		if(potentialMatch in nums) {
			return [potentialMatch, num];
		} else {
			nums[num] = true;
		}
	} //O(n)
	return [];
}
//Time: O(n) | Space: O(n)

let array = [3, 5, -4, 8, 11, 1, -1, 6];
let target = 19;

console.log(twoSum(array, target));
console.log(twoSumSecond(array, target));
console.log(twoSumHash(array, target));


// O(n) * O(n) => O(n^2)