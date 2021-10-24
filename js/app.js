const countdown = () => {
    const datecounter = new Date("November 20, 2021 07:30:00").getTime();
    const ahora = new Date().getTime();
    const difference = datecounter - ahora;
    console.log(datecounter)


//time calculated in milliseconds, so need to convert them
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
//calculate how long until gameweek
const daysLeft = Math.floor(difference/day);
const hoursLeft = Math.floor((difference % day) / hour);
const minutesLeft = Math.floor((difference % hour) / minute);
const secondsLeft = Math.floor((difference % minute)/second);

document.querySelector(".day").innerText = daysLeft;
document.querySelector(".hour").innerText = hoursLeft;
document.querySelector(".minute").innerText = minutesLeft;
document.querySelector(".second").innerText = secondsLeft;

};

setInterval(countdown, 1000);

