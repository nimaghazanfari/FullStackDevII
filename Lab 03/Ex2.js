const getKeyValuePairs = obj => {
    var keys = [];
    var vals = [];

    for (const key in obj) {
        keys.push(key);
        vals.push(obj[key]);
    }

    return [keys, vals];
}

console.log(getKeyValuePairs({a: 5, b: 10, c: 16}));
console.log(getKeyValuePairs({r: 'React', a: 'Angular', v: 'Vue'}));