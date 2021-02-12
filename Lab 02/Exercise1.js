const buildArray = num => {
    var myArray = [];

    var idx = 0;
    while(idx < num) myArray.push(idx++);

    console.log(myArray);
}

buildArray(2);
buildArray(25);