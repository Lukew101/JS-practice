const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const digitalHour = document.querySelector(".digital-hours");
const digitalMinute = document.querySelector(".digital-minutes");
const digitalSecond = document.querySelector(".digital-seconds");

const date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

// Digital clock
setInterval(()=>{
    const digDate = new Date();
    let digHours = digDate.getHours();
    let digMinutes = digDate.getMinutes();
    let digSeconds = digDate.getSeconds();
    if (digMinutes < 10){
        digMinutes = '0' + digMinutes;
    };

    if (digSeconds < 10){
        digSeconds = '0' + digSeconds;
    };
    digitalHour.textContent = digHours;
    digitalMinute.textContent = digMinutes;
    digitalSecond.textContent = digSeconds;
    }, 1000);


// Analog clock
function moveTime(){
    if (seconds === 59){
        minutes += 1;
        seconds = 0;
    }
    if (minutes === 60){
        hours += 1;
        minutes = 0;
    }
    seconds += 1;
    const hourDegree = hours * 30 + (minutes / 2);
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
    const minuteDegree = minutes * 6;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
    const secondDegree = seconds * 6;
        secondHand.style.transform = `rotate(${secondDegree}deg)`;
    };

setInterval(moveTime, 1000);