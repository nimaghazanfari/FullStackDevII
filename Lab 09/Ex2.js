const { resolve } = require("url");

const makeUpperCase = arr => new Promise((resolve, reject) => {
    if (arr.some(item => typeof item != 'string')) reject('Error: Not all items are strings!');
    else resolve(arr.map(item => item = item.toUpperCase()));
});

const sortWords = arr => Promise.resolve(arr.sort());

makeUpperCase(['jaxx', 'tiny', 'clay'])
    .then(sortWords)
    .then(data => console.log(data))
    .catch(err => console.log(err));

makeUpperCase(['anarchy', 99, true])
    .then(sortWords)
    .then(data => console.log(data))
    .catch(err => console.log(err));