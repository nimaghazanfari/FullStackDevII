const findOddOrEven = () => {
    for(var i = 0; i <= 10; i++)
        console.log(`${i} is ${i%2 && 'Odd' || 'Even'}`);
}

findOddOrEven();