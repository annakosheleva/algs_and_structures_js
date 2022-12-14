let array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let coint = 0;

function linearSearch(array, item) {
	for (let i = 0; i < array.length; i++) {
		coint += 1;
		if (array[i] === item) {
			return i + 1;
		}
	}
	return null;
}

console.log(linearSearch(array, 11));
console.log("coint = ", coint);
