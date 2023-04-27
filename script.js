let interval;

function start() {
    interval = setInterval(() => {
        const currentValue = document.getElementById("counter").innerHTML;
        const array = currentValue.split(":");
        let hour = Number(array[0]);
        let minute = Number(array[1]);
        let second = Number(array[2]);

        if (second < 60) {
            second += 1;
        }

        if (second === 60) {
            second = 0;
            minute += 1;
        }

        if (minute === 60) {
            minute = 0;
            hour += 1;
        }

        document.getElementById("counter").innerHTML =
            (hour < 10 ? "0" + hour : hour) +
            ":" +
            (minute < 10 ? "0" + minute : minute) +
            ":" +
            (second < 10 ? "0" + second : second);
    }, 1000);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    document.getElementById("counter").innerHTML = "00:00:00";
}
