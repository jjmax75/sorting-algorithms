// complexity worst case - O(Math.pow(n, 2))

const selectionSort = arr => {
	const swap = (i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

	const arrLength = arr.length;

	for (let i = 0; i < arrLength; i++) {
		let minimum = i;

		for (let j = i + 1; j < arrLength; j++) {
			if (arr[j] < arr[minimum]) {
				minimum = j;
			}
		}

		swap(minimum, i);
	}

	return arr;
};

// test cases
console.log(selectionSort([5, 3, 1, 6, 8, 7, 2, 4]));
console.log(selectionSort([10, 99, 3, 56, 23, 11, 1, 12]));
console.log(selectionSort([900, -10, -88, 54, -123, -1, 7, 12, -666]));
console.log(selectionSort([1, 2]));
console.log(selectionSort([1]));
console.log(selectionSort([]));
