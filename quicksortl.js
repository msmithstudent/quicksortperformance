//Code Source: GeeksForGeeks - QuickSort – Data Structure and Algorithm Tutorials
//https://www.geeksforgeeks.org/quick-sort/
//Lomuto's partition

// Function to partition the array and return the partition index
function partition(arr, low, high) {
    // Choosing the pivot
    let pivot = arr[high];
   
    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;
   
    for (let j = low; j <= high - 1; j++) {
        // If current element is smaller than the pivot
        if (arr[j] < pivot) {
            // Increment index of smaller element
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements
        }
    }
   
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Swap pivot to its correct position
    return i + 1; // Return the partition index
}
 
// The main function that implements QuickSort
function quickSort(arr, low, high) {
    if (low < high) {
        // pi is the partitioning index, arr[pi] is now at the right place
        let pi = partition(arr, low, high);
   
        // Separately sort elements before partition and after partition
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}

function smallSort() {
	var t1 = performance.now();
	quickSort(arrSmall, 0, arrSmall.length - 1);
	var t2 = performance.now();
	console.log(arrSmall.join(" "));
	console.log("Small array sorted. Time: " + (t2 - t1) +  " milliseconds");
}

function mediumSort() {
	var t1 = performance.now();
	quickSort(arrMedium, 0, arrMedium.length - 1);
	var t2 = performance.now();
	console.log("Medium array sorted. Time: " + (t2 - t1) + " milliseconds");
}

function largeSort() {
	var t1 = performance.now();
	quickSort(arrLarge, 0, arrLarge.length - 1);
	var t2 = performance.now();
	console.log("Large array sorted. Time: " + (t2 - t1) + " milliseconds");
}

function mediumArray() {
	let arr = [];
	for (let i = 0; i < 1000; i++) {
		arr[i] = Math.floor(Math.random() * 11);
	}
	return arr;
}

function largeArray() {
	let arr = [];
	for (let i = 0; i < 15000; i++) {
		arr[i] = Math.floor(Math.random() * 11);
	}
	return arr;
}
 
// Small dataset
let arrSmall = [10, 7, 8, 9, 1, 5, 3, 2, 4, 11];

//Medium dataset
let arrMedium = mediumArray();

//Large dataset
let arrLarge = largeArray();
 
// Function call
smallSort();
mediumSort();
largeSort();