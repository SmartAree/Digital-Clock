// JavaScript source code
function Clock() {
    const fullDate = new Date();
    var hours = fullDate.getHours();
    var mins = fullDate.getMinutes();
    var seconds = fullDate.getSeconds();

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = ":" + mins;
    document.getElementById('seconds').innerHTML = ":" + seconds;
    
}

setInterval(Clock, 100);

