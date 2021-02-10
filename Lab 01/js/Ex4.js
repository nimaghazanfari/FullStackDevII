const startClock = () => {

    var answer;

    do{

        for (var i = 0; i < 10; i++) {          
            console.log('Current time is: ' + new Date());
        }

        answer = !confirm('Do you want to stop the clock?');

    }while(answer);

}

startClock();