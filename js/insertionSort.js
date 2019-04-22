// complexity worst case O(Math.pow(n, 2))

const insertionSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		const cursor = arr[i];
		let pos = i;

		while (pos > 0 && arr[pos - 1] > cursor) {
			arr[pos] = arr[pos - 1];
			pos = pos - 1;
		}

		arr[pos] = cursor;
	}

	return arr;
};

// test cases
console.log(insertionSort([5, 3, 1, 6, 8, 7, 2, 4]));
console.log(insertionSort([10, 99, 3, 56, 23, 11, 1, 12]));
console.log(insertionSort([900, -10, -88, 54, -123, -1, 7, 12, -666]));
console.log(insertionSort([1, 2]));
console.log(insertionSort([1]));
console.log(insertionSort([]));
