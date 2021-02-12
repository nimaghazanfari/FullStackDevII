const findArrIndex = (myArr, str) => {
    var idx = -1;

    myArr.forEach((element, i) => {
        if(element == str) idx = i;
    });

    return idx;
}

console.log(findArrIndex(['abc', 'edabit', 'yyy', 'xxx'], 'yyy'));
console.log(findArrIndex(['abc', 'edabit', 'yyy', 'xxx'], 'bbb'));