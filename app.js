const endDate = new Date("Jan 01, 2026 00:00:00");

function newYear() {
    const now = new Date();
    const diff = endDate - now;

    const second = 1000; //milliseconds
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const d = Math.floor(diff / (day));
    const h = Math.floor(diff % (day) / (hour));
    const m = Math.floor(diff % (hour) / (minute));
    const s = Math.floor(diff % (minute) / (second));

// DOM 
    document.getElementById("day").innerText = d;
    document.getElementById("hour").innerText = h;
    document.getElementById("minute").innerText = m;
    document.getElementById("second").innerText = s;
};

setInterval(() => {
    newYear();
}, 1000);

