let interval;
const eventDay = new Date(2022, 09, 24, 11).getTime();
const hour = 1000 * 60 * 60;
const day = hour * 24;

const countdown = setInterval(() => {
let now = new Date().getTime();
let distance = eventDay - now;
let days = Math.floor(distance/day);
let hours = Math.floor((distance % day) / hour);

document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours`;

if (distance < 0) {
    clearInterval(countdown);
    document.getElementById('countdown').innerHTML = "how's she doing?"
}
});