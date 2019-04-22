// complexity O(Math.pow(n, 2))

const bubbleSort = arr => {
	const swap = (i, j) => {
		[arr[i], arr[j]] = [arr[j], arr[i]];
	};

	const arrLastIndex = arr.length - 1;
	let swapped = true;
	let sortedCount = 0;

	while (swapped) {
		swapped = false;

		for (let i = 0; i <= arrLastIndex - sortedCount; i++) {
			if (arr[i] > arr[i + 1]) {
				swap(i, i + 1);
				swapped = true;
			}
		}

		sortedCount++;
	}

	return arr;
};

// test cases

console.log(bubbleSort([5, 3, 1, 6, 8, 7, 2, 4]));
console.log(bubbleSort([10, 99, 3, 56, 23, 11, 1, 12]));
console.log(bubbleSort([900, -10, -88, 54, -123, -1, 7, 12, -666]));
console.log(bubbleSort([1, 2]));
console.log(bubbleSort([1]));
console.log(bubbleSort([]));
