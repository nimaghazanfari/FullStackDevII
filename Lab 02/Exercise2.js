const emptyArray = (myArray, showSteps) => {
    if(Array.isArray(myArray)) 
        while(myArray.length){
            if(showSteps) console.log(myArray);
            myArray.pop();
        } 
    console.log(myArray);
}

emptyArray([1,2,3], true);
emptyArray(['hello', 'world']);