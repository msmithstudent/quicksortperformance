//Code Source: StackOverflow - Emmonier
//https://stackoverflow.com/a/60752874
//Using Hoare's partition with random pivot

function quickSort (arr, left = 0, right = arr.length - 1) {
	if (left < right) {
		let pi = partition(arr, left, right);
		quickSort(arr, left, pi - 1);
		quickSort(arr, pi, right);
	}
}

function partition (arr, left, right) {
	const pivot = arr[Math.floor(Math.random() * (right - left + 1) + left)];
	//console.log("Pivot = " + pivot + ", arr[left] = " + arr[left] + ", Left = " + left + ", Right = " + right);

	while (left <= right) {
		//console.log("While " + left + " <= " + right);
		while (arr[left] < pivot) {
			//console.log("Left = " + left);
			//console.log("While arr[left]" + " (" + arr[left] + ") < pivot (" + pivot + ")");
			left++;
		}	
		while (arr[right] > pivot) {
			//console.log("Right = " + right);
			//console.log("While arr[right]" + " (" + arr[right] + ") > pivot (" + pivot + ")");
			right--;
			//console.log("Right = " + right);
		}
		if (left <= right) {
			swap(arr, left, right);
			//console.log(arr.join(" "));
			left++;
			right--;
		}
	}
  //console.log("Left = " + left);
  return left;
}

function swap (arr, left, right) {
	const temp = arr[left];
	arr[left] = arr[right];
	arr[right] = temp;
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