//Code Source: GeeksForGeeks - Hoare’s vs Lomuto partition scheme in QuickSort
//https://www.geeksforgeeks.org/hoares-vs-lomuto-partition-scheme-quicksort/
// Javascript implementation of QuickSort
// using Hoare's partition scheme 

/* This function takes first element as pivot, and 
places all the elements smaller than the pivot on the 
left side and all the elements greater than the pivot 
on the right side. It returns the index of the last 
element on the smaller side*/
function partition(arr, low, high) { 
    let pivot = arr[low]; 
    let i = low - 1, j = high + 1; 
   
    while (true) { 
        // Find leftmost element greater 
        // than or equal to pivot 
        do { 
            i++; 
        } while (arr[i] < pivot); 
   
        // Find rightmost element smaller 
        // than or equal to pivot 
        do { 
            j--; 
        } while (arr[j] > pivot); 
   
        // If two pointers met. 
        if (i >= j) {
            return j; 
		}
        let temp = arr[i]; 
        arr[i] = arr[j]; 
        arr[j] = temp; 
        // swap(arr[i], arr[j]); 
    } 
} 
   
/* The main function that implements QuickSort 
arr[] --> Array to be sorted, 
low --> Starting index, 
high --> Ending index */
function quickSort(arr, low, high) { 
    if (low < high) { 
        /* pi is partitioning index, 
        arr[p] is now at right place */
        let pi = partition(arr, low, high); 
   
        // Separately sort elements before 
        // partition and after partition 
        quickSort(arr, low, pi); 
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