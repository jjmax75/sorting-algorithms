// complexity worst case O(n log(n))

const mergeSort = (arr, compare = (x, y) => x < y) => {
	if (arr.length <= 1) {
		return arr;
	}

	const { leftHalf, rightHalf } = split(arr);

	return merge(
		mergeSort(leftHalf, compare),
		mergeSort(rightHalf, compare),
		compare
	);
};

const split = arr => {
	const listLength = arr.length;

	if (listLength === 0) {
		return { leftHalf: [], rightHalf: [] };
	} else if (listLength === 1) {
		return { leftHalf: arr, rightHalf: [] };
	} else {
		const midPoint = Math.floor(listLength / 2);
		return {
			leftHalf: arr.slice(0, midPoint),
			rightHalf: arr.slice(midPoint)
		};
	}
};

const merge = (left, right, compare) => {
	const cursor = Math.max(left.length, right.length);

	let [result, index1, index2] = [[], 0, 0];

	while (true) {
		if (compare(left[index1], right[index2])) {
			result.push(left[index1]);
			index1++;
		} else {
			result.push(right[index2]);
			index2++;
		}

		if (index1 === left.length || index2 === right.length) {
			break;
		}
	}

	if (index1 < left.length) {
		return result.concat(left.slice(index1));
	}

	if (index2 < right.length) {
		return result.concat(right.slice(index2));
	}

	return result;
};

// test cases
console.log(mergeSort([1, 4, 2, 3]));
console.log(mergeSort([10, 99, 3, 56, 23, 11, 1, 12]));
console.log(mergeSort([900, -10, -88, 54, -123, -1, 7, 12, -666]));
console.log(mergeSort([1, 2]));
console.log(mergeSort([1]));
console.log(mergeSort([]));
