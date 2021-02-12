const hasNumber = (myArr, num) => {
    var found = false;

    myArr.forEach((element, i) => {
        if(element == num) found = true;
    });

    return found;
}

console.log(hasNumber([1,2,3,4,5], 3));
console.log(hasNumber([1,2,3,4,5], 7));
console.log(hasNumber([1,2,3,5,5], 5));
console.log(hasNumber([], 3));