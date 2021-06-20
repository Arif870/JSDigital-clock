let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");
let progress = document.querySelector("#progress");

function timeSet() {
    let date = new Date();
    let hr = date.getHours() - 12;
    let min = date.getMinutes();
    let sec = date.getSeconds();

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    progress.style.width = (sec / 60) * 100 + "%";
}

setInterval(function() {
    return timeSet();
}, 1000);