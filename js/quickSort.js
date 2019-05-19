// complexity worst case - O(n ^ 2))
// attempt based on https://www.geeksforgeeks.org/quick-sort/
// use algorithm from Introduction to Algorithms book (https://en.wikipedia.org/wiki/Introduction_to_Algorithms)

const quickSort = (arr, leftIndex, rightIndex) => {
	if (leftIndex < rightIndex) {
		const partitionIndex = partition(arr, leftIndex, rightIndex);

		quickSort(arr, leftIndex, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, rightIndex);
	}
	return arr;
};

const partition = (arr, leftIndex, rightIndex) => {
	const pivot = arr[rightIndex];
	let i = leftIndex - 1;

	for (let j = leftIndex; j < rightIndex; j++) {
		if (arr[j] <= pivot) {
			i++;
			arr = swap(arr, i, j);
		}
		arr = swap(arr, i + 1, rightIndex);
		return i + 1;
	}
};

const swap = (arr, leftIndex, rightIndex) =>
	([arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]);

const arr = [859, 361, 337, 718, 171];
console.log(quickSort(arr, 0, 4));

