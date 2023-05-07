//A
let myArray = [-7, -71, 66, 11, 3, 8, 67];

function printSecondLargestSmallest(arr) {
    arr.sort(function (a, b) {
        return a - b;

    });

    console.log("Smallest second: " + arr[1]);
    console.log("Largest second: " + arr[arr.length - 2]);
}
printSecondLargestSmallest(myArray);


//B
function separatePositiveNegative(arr) {
    let positiveSum = 0;
    let negativeSum = 0;


    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            positiveSum += arr[i];
        } else {
            negativeSum += arr[i];
        }
    }


    console.log("Positive sum:" + positiveSum, "Negative sum:" + negativeSum);
}

separatePositiveNegative([1, 2, -5, 8, -3, 9, -7]);
separatePositiveNegative([-7, -3, 2, -8, 5, -4]);


//C
function filterByLimit(arr, limit) {

    let filteredArr = arr.filter((num) => num > limit);


    return filteredArr;
}

console.log(filterByLimit([1, 2, -5, 8, -3, 9, -7], 4));
console.log(filterByLimit([-7, -3, 2, -8, 5, -4], -4));


//D
function calculateResult(arr) {
    let result = 1;
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1] === true) {
            result *= arr[i];
        }
    }
    return result;
}

let arr1 = [2, true, 3, false, 7, true, 4, false];
let arr2 = [8, false, 4, false, 11, false, 2, false];
let arr3 = [8, false, 3, true, 7, false, 1, true, 8, true];
let arr4 = [5, false, 2, true, 7, true, 6, true, 9, false];

console.log(calculateResult(arr1));
console.log(calculateResult(arr2));
console.log(calculateResult(arr3));
console.log(calculateResult(arr4));

//E
function removeDuplicates(arr) {
    let array = [];
    arr.forEach(function (item) {
        if (!array.includes(item)) {
            array.push(item);
        }
    });
    return array;
}
let arr5 = [1, "salam", 1, true, true, false, false, false, 5, "5"];
console.log(removeDuplicates(arr5));


//F

let arr = [5, 2, "hello", "how are you", "hello", 56, 2, 7, 7, 7];

function countElements(arr){
    
}
let countedElements = arr.reduce((elements, element) => {
    if (element in elements) {
        elements[element]++
    }
    else {
        elements[element] = 1
    }
    return elements
}, {}
)
console.log(countedElements)
countElements(arr);