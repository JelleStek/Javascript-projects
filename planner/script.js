

let timer = document.getElementById('timer');
let plusMinute = document.getElementById('plusMinute');
let plusHour = document.getElementById('plusHour');
let start = document.getElementById('start');


timer.innerText = "00:00";


let timeForTimer = 0;
plusMinute.addEventListener('click', function() {
    timeForTimer = timeForTimer + 2700;
    timer.innerText = timeForTimer;
})
plusHour.addEventListener('click', function() {
    timeForTimer = timeForTimer + 3600;
    timer.innerText = timeForTimer;
})

start.addEventListener('click', function() {
    let timerDateMins = new Date().getTime() / 1000;
    let timerDate = timerDateMins + timeForTimer;
    const timerCounter = setInterval(function() {
        const currentTime = new Date().getTime() / 1000;

        let timeLeft = Math.floor(timerDate - currentTime);
        let minutes = Math.floor(timeLeft / 60);
        let seconds = Math.round(timeLeft - (minutes * 60));

        let timeTimer = minutes + ":" + seconds;
        timer.innerText = timeTimer;
        console.log(timeLeft);
        console.log(minutes);
        console.log(seconds);
    },1000)
})



