const reverseIt = (myArr, useBuiltInReverse) => {
    if(useBuiltInReverse){
        myArr.reverse();
        return myArr;
    }
    else{
        var result = [];
        while(myArr.length) result.push(myArr.pop());
        return result;
    }
}

console.log(reverseIt([1,2,3,4], true));
console.log(reverseIt([9,9,2,3,4, 7]));