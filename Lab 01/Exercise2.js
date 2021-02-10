const helloWorlds = number => {
    if(!isNaN(parseInt(number)))
        for (let i = 0; i < number; i++) {
            console.log('Hello World!');
        }
    else 
        console.log('Goodbye World!');
}

helloWorlds(5);
helloWorlds(false);
helloWorlds(undefined);
helloWorlds('hello');