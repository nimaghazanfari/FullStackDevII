const colors = ['red', 'green', 'blue'];

let capitalizedColors = colors.map(a => `${a[0].toUpperCase()}${a.substring(1)}`);

console.log(capitalizedColors);