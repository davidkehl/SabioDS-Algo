// - Step 1: Verify the constraints
// - Step 2: Write out some test cases
// - Step 3: Figure out a solution without code
// - Step 4: Write out the solution in code
//	• Is this code DRY?
// - Step 5: Double check for errors
// - Step 6: Test code with test cases
// - Step 7: Analyze space and time complexity
// - Step 8: Can we optimize the solution?
// - Step 9: Walk through code with test cases using optimized solution

// Implement an algorithm to determine if all characters in a string are unique

// Step 1:
	// What is the maximum and min characters that will be provided?
	// Are upper and lower case characters the same or different?
	// Will string also contain numbers and symbols?
	// Do spaces count as characters?
	// What return value is expected?
		// Return true if all characters are unique
		// Otherwise return false

function getChars() {
	let chars = "";

	for(var i = 32; i < 127; i++) {
		chars += String.fromCharCode(i);
	}

	return chars;
}

let characters = getChars();

// console.log(characters);

/* ------ TEST CASES -------

"abcde" => true
"dog cat" => true
"The cat ran down the hill" => false
"1846" => true
'2021' => false 

*/

// Step 4:

// Brute force solution:
// Time Complexity: O(n^2)
// Space Complexity: O(1)
function isUniqueBrute(string) {
	for(let i = 0; i < string.length; i++) {
		for(let j = i + 1; j < string.length; j++) {
			if(string[i] === string[j]) {
				return false;
			}
		}
	}
	return true;
}

// console.log(isUniqueBrute("2021"));

// Optimal Solution:
// Time Complexity: O(n)
// Space Complexity: O(n)
function isUniqueOptimal(string) {
	let hash = {};

	for(let i = 0; i < string.length; i++) { // Time Complexity ===  O(n)
		console.log(hash, string[i]);
		if(hash[string[i]]) { // Time Complexity === O(1)
			return false;
		}
		else {
			hash[string[i]] = true; // Time Complexity === O(1)
		}
	}
	return true;
}

// console.log(isUniqueOptimal("The cat ran down the hill"));


let hash = {};
hash["First"] = true;
hash["First"] = "I have changed this"

console.log(hash);
