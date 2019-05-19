// complexity worst case - O(n ^ 2))

// **initial quickSort**
// select the pivot

// move pivot to the end

// set left to first in subarray(array - fixed), set right to last in subarray before fixed

// **round**
// move left to right until it hits a number greater or equal to pivot

// move right to left until it hits the left or finds a value less than pivot

// swap these values
// **repeat round**
// **break when the bounds right bound ccrosses left bound**

// swap pivot with current left bound

// **split array to left and right**
// quickSort(left subArray)
// quickSort(right subArray)
// **repeat**
// if one element it is already sorted
