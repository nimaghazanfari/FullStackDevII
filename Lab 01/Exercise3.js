const greaterThanSize = () => {

    var size = Math.floor(Math.random() * 100) + 1;

    var idx = 1;
    while(idx <= size){
        console.log(`The current size is ${size} and count is ${idx}`);
        idx++;
    } 
}

greaterThanSize();