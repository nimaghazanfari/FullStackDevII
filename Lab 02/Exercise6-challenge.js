const speackHacker = str => {
    var result = [];

    for(var ch of str) {
        
        switch(ch){
            case 'a':
            case 'A':
                result.push('4');
                break;
            case 'e':
            case 'E':
                result.push('3')
                break;
            case 'e':
            case 'E':
                result.push('3')
                break;
            case 'i':
            case 'I':
                result.push('1')
                break;
            case 'o':
            case 'O':
                result.push('0')
                break;
            case 's':
            case 'S':
                result.push('5')
                break;
            default:
                result.push(ch);
                break;
        }

    }

    return result.join('');

}

console.log(speackHacker('Long Weekend!'));
console.log(speackHacker('matrix 4 is coming out...'));
console.log(speackHacker('MARVEL movies are delayed!'));
console.log(speackHacker(''));
