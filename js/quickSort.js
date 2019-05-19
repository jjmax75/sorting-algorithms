// complexity worst case - O(n ^ 2))
// js-example from https://www.guru99.com/quicksort-in-javascript.html

const quickSort = (arr, leftIndex, rightIndex) => {
	if (arr.length > 1) {
		const index = partition(arr, leftIndex, rightIndex);
		if (leftIndex < index - 1) {
			quickSort(arr, leftIndex, index - 1);
		}
		if (index < rightIndex) {
			quickSort(arr, index, rightIndex);
		}
	}
	return arr;
};

const partition = (arr, leftIndex, rightIndex) => {
	const pivot = arr[Math.floor((leftIndex + rightIndex) / 2)];
	let i = leftIndex;
	let j = rightIndex;

	while (i <= j) {
		while (arr[i] < pivot) {
			i++;
		}

		while (arr[j] > pivot) {
			j--;
		}

		if (i <= j) {
			swap(arr, i, j);
			i++;
			j--;
		}
	}
	return i;
};

const swap = (arr, leftIndex, rightIndex) =>
	([arr[leftIndex], arr[rightIndex]] = [arr[rightIndex], arr[leftIndex]]);

const arr = [859, 361, 337, 718, 171];
console.log(quickSort(arr, 0, 4));
