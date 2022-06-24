// Write a function to determine if two strings are "One Away" from each other.
// String are considered "One Away" in the following three situations.
	// 1. Inserting a character
	// 2. Removing a character
	// 3. Replacing a character

// Steps to solving coding problems:
// - Step 1: Verify the constraints
// - Step 2: Write out some test cases
// - Step 3: Figure out a solution without code
// - Step 4: Write out the solution in code
// 	• Is this code DRY?
// - Step 5: Double check for errors
// - Step 6: Test code with test cases
// - Step 7: Analyze space and time complexity
// - Step 8: Can we optimize the solution?
// Step 9: Walk through code with test cases using optimized solution

// Step 1:
	// What return statement is expected?
	// Do spaces count as characters?
		// no, expect no spaces in string
	// What to do it strings are already equal?
		// return true
	// What is the min/max characters I can expect?
		// 1 < string.length < infinity
	// Are capitalized and lower cased characters the same or different?
		// All characters are lower-cased

// Step 2: 
	// pale, ple => true
	// pales, pale => true
	// pale, bale => true
	// pale, bae => false

// Step 3:
	// check length of both, if length differs by 2+ then return false
	// First check if the strings are the same
	// If both strings are same length, compare side by side
	// If one stirng is longer than the other then compare side by side and advance the
		// counter for the longer string if there isnt a match
// Step 4:

// function oneAwayBrute(str1, str2) {
// 	let isOneAway = false;
// 	let mismatches = 0;
// 	if(str1.length == str2.length){
// 		for (let i=0; i<str1.length; i++){
// 			if (str1[i] != str2[i]){
// 				mismatches++;
// 			}
// 		}
// 	}
// 	if(Math.abs(str1.length - str2.length) === 1) {
// 		if (str1.length > str2.length){
// 			let str3 = str2;
// 			str2 = str1;
// 			str1 = str3;
// 		}
// 		int x = 0;
// 		for(let i=0; i< str1.length; i++) {
// 			if (str1[i] != str2[x]){
// 				x++;
// 				if (str1[i] != str2[x]){
// 					mismatches++;
// 				}
// 			x++;
// 		}

// 	}
// 	if (mismatches <= 1) {
// 		isOneAway = true;
// 	}

// 	return isOneAway;
// }

function oneAwayOptimal(str1, str2) {
	if(str1.length === str2.length) {
		return oneEditReplace(str1, str2);
	} else if(str1.length + 1 === str2.length) {
		return oneEditInsert(str1, str2)
	} else if(str1.length - 1 === str2.length) {
		return oneEditInsert(str2, str1)
	}
	return false;
}

function oneEditReplace(str1, str2) {
	var foundDifference = false;
	for(let i = 0; i < str1.length; i++) {
		if(str1[i] != str2[i]) {
			if(foundDifference) {
				return false;
			}
			foundDifference = true;
		}
	}
	return true;
}


function oneEditInsert(str1, str2) {
	let i = 0;
	let j = 0;
	while(i < str1.length && j < str2.length) {
		if(str1[i] != str2[j]) {
			if(i != j) {
				return false;
			}
			j++;
		} else {
			i++;
			j++
		}
	}
	return true;
}

console.log(oneAwayOptimal("pale", "bae"));