function filter(arr, func) {
    var newArr = [];
    if (typeof func !== 'function') {
        return 'Error';
    }

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (func(element)) {
            newArr.push(element);
        }
    }
    return newArr;
};

function inBetween(a, b) {
    return function (element) {
        return element >= a && element <= b;
    }
}

function inArray(array) {
    return function (element) {
        return array.indexOf(element) !== -1;
    }
}
var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(filter(arr, inBetween(3,6)));
console.log(filter(arr, inArray([1,2,3])));
console.log(filter(arr, function (a) {
    return a % 2 == 0
}));