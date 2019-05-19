// complexity worst case - O(n ^ 2))
// attempt based on https://www.hackerearth.com/practice/algorithms/sorting/quick-sort/visualize/

// **initial quickSort**
const quickSort = (arr, pivotPosition = 0) => {
	const arrWithPivot = setPivot(arr);

	if (arr.length <= 1) {
		return arr;
	}

	const sortedPivotArray = findPivotFinalPosition(arr);

	return sortedPivotArray;
};

// select the pivot
// swap pivot with end
const setPivot = arr => {
	const arrWithPivot = [...arr];
	const arrLastIndex = arrWithPivot.length - 1;
	const middleIndex = Math.floor(arrLastIndex / 2);
	[arrWithPivot[middleIndex], arrWithPivot[arrLastIndex]] = [
		arrWithPivot[arrLastIndex],
		arrWithPivot[middleIndex]
	];
	return arrWithPivot;
};

const findPivotFinalPosition = (
	arr,
	leftPos = 0,
	rightPos = arr.length - 2
) => {
	const sortedArray = [...arr];
	const pivotPosition = sortedArray.length - 1;

	while (sortedArray[leftPos] < sortedArray[pivotPosition]) {
		// move left to right until it hits a number greater or equal to pivot
		leftPos += 1;
	}

	while (sortedArray[rightPos] >= sortedArray[pivotPosition]) {
		// move right to left until it hits the left or finds a value less than pivot
		rightPos -= 1;
		if (rightPos < leftPos) {
			// **break when the bounds right bound crosses left bound**
			// swap pivot with current left bound
			[sortedArray[leftPos], sortedArray[pivotPosition]] = [
				sortedArray[pivotPosition],
				sortedArray[leftPos]
			];
			return { sortedArray, leftPos };
		}
	}

	// swap these values
	[sortedArray[leftPos], sortedArray[rightPos]] = [
		sortedArray[rightPos],
		sortedArray[leftPos]
	];

	// set left to first in subarray(array - fixed), set right to last in subarray before pivot
	return findPivotFinalPosition(sortedArray, leftPos, rightPos);
};

// **partition array to left and right**
// quickSort(left subArray)
// quickSort(right subArray)
// **repeat**
// if one element it is already sorted

console.log(quickSort([859, 361, 337, 718, 171]));
