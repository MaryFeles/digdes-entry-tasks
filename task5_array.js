let arr = new Array(5);

function fillArray(array, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    for (let i = 0; i <= array.length-1; i++) {
        array[i] = Math.floor(Math.random() * (max - min +1)) + min;
    }
    return array;
}

function replaceFromArray(array) {
    array.forEach((value, index) => {
        if (value < 0) {
            array.splice(index, 1, 0);
        }
    })
    return array;
}

function addToArray(array) {
    let newArr = [];
    array.forEach((value, index) => {
        if ((value == 0) && (index % 2 == 0)) {
            newArr.push(value);
            newArr.push(-1);
        } else {
            newArr.push(value);
        }
    })
    return newArr;
}

fillArray(arr, -100, 100);
console.log(arr);

replaceFromArray(arr);
console.log(arr);

arr = addToArray(arr);
console.log(arr);
