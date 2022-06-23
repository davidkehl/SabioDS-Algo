function getChars() {
	let chars = "";

	for(var i = 32; i < 127; i++) {
		chars += String.fromCharCode(i);
	}

	return chars;
}

let characters = getChars();

console.log(characters);