/*
June 14, 2022 - Sabio Data Structures & Algorithms Study Session

Question:

Given an array of competitions and an array of results. Determine the winner of a tournament.


Steps to solving DS & Algo Problems:

Step 1: Verify the constraints
	- Can there be more than one winner?
		- There will be one winner
	- Can there be ties?
		- There will be no ties
	- Does ranking matter?
		- Doesn't matter, simply return the winner
	- What do the input looks like?
	- What do you want me to return?
		- Return a string that is the winners name
Step 2: Write out some test cases
	- competitions = [
    					["HTML", "C#"],
    					["C#", "Python"],
    					["Python", "HTML"]
  					]
  	- results = [0, 0, 1] -> "HTML", "C#", "HTML"
  	- return = "HTML"
Step 3: Figure out a solution without code
	- Loop through the length of competitions array
	- Evaluate the winner at each index of the competitions array
	- Keep track of all competitors scores
Step 4: Write out the solution in code
	• Is this code DRY?
Step 5: Double check for errors
Step 6: Test code with test cases
Step 7: Analyze space and time complexity
Step 8: Can we optimize the solution?
Step 9: Walk through code with test cases using optimized solution

*/



// function tournamentWinner(competitions, results) {
// 	let winnerResults = [];
// 	for (let i=0; i<results.length ; i++)
// 	{
// 	    winnerResults.push(results[i] ? competitions[i][1] : competitions[i][0]);

// 	}
// 	return winnerResults; 
// }

function tournamentWinner(competitions, results) {
	let winners = {};
	let highScore = 0;
	let winner;

	for(let i = 0; i < results.length; i++) {
		// Stores the current winner of the competition at index i
		let currentWinner;

		// Finds the winner of the current competition at index i
		if(results[i] === 0) {
			currentWinner = competitions[i][0];
		} else {
			currentWinner = competitions[i][1];
		}

		// Checks to see if the current winner is already in the winners hashmap
		if(winners[currentWinner]) {
			// Current winner is found in hashmap so we need to add one to the current value;
			winners[currentWinner] += 1;
		} else {
			// Current winner is not in hashmap, we need to add to hashmap with an initial value of 1
			winners[currentWinner] = 1;
		}

		// Check to see if the current winner we just modified in the hashtable has a higher score than the previous high score
		if(winners[currentWinner] > highScore) {
			highScore = winners[currentWinner];
			winner = currentWinner;
		}
	} 
	return winner;
}

// Time Complexity: O(n) -> Linear
// Space Complexity: O(n) -> Linear

// Time complexity => represents the numbers of times a statement is executed.
// Space complexity => the total amount of memory space used by a algorithm

var competitions = [
    					["HTML", "C#"],
    					["C#", "Python"],
    					["Python", "HTML"]
  					];
 var results = [0, 0, 1];

console.log(tournamentWinner(competitions, results));

