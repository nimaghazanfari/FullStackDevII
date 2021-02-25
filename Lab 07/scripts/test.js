var startTime, endTime;

const zeroPad = num => String(num).padStart(2, '0');
const getFullHour = dateTime => `${zeroPad(dateTime.getHours())}:${zeroPad(dateTime.getMinutes())}:${zeroPad(dateTime.getSeconds())} ${dateTime.getHours() <= 12 ? "AM" : "PM"}`;

function initPage() {

    window.onload = function () {
        console.log('window loaded...');
    }

    const btnStart = document.querySelector('#btnStart');
    const btnStop = document.querySelector('#btnStop');
    const btnReset = document.querySelector('#btnReset');

    btnStart.addEventListener('click', function () {
        startTime = new Date();
        const fullHour = getFullHour(startTime);

        console.log('start timer:', fullHour);
        document.querySelector('#txtStartTime').value = fullHour;
    });

    btnStop.addEventListener('click', function () {
        endTime = new Date();

        const fullHour = getFullHour(endTime);

        console.log('end timer:', fullHour);
        document.querySelector('#txtEndTime').value = fullHour;

        if (!startTime || !endTime) return;

        //calculate difference
        var diffMs = endTime - startTime;

        var diffHrs = Math.floor((diffMs % 86400000) / 3600000);                    // hours
        var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);         // minutes
        var diffScs = Math.round(((diffMs % 86400000) % 3600000) % 60000 / 1000);   // seconds

        const calculation = `Duration => Hours: ${diffHrs}, Minutes: ${diffMins}, Seconds: ${diffScs}`;
        console.log(calculation);

        const timer = document.querySelector('#timer');
        const containerItem = document.createElement('div');
        containerItem.className = 'container-item';
        containerItem.innerText = calculation;
        timer.appendChild(containerItem);
    });

    btnReset.addEventListener('click', function () {
        console.log('reset button clicked');

        startTime = endTime = undefined;
        
        document.querySelector('#txtStartTime').value = '';
        document.querySelector('#txtEndTime').value = '';

        const timer = document.querySelector('#timer');
        document.querySelectorAll('#timer .container-item').forEach(item => {
            timer.removeChild(item);
        });

    });
}

initPage();