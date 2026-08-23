window.onload = function () {

    // Variables
    var seconds = 0;
    var milliseconds = 0;

    // Get HTML elements
    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");

    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    var Interval;

    // Start button
    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    // Stop button
    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    // Reset button
    buttonReset.onclick = function () {
        clearInterval(Interval);

        seconds = 0;
        milliseconds = 0;

        appendSeconds.innerHTML = "00";
        appendMilliseconds.innerHTML = "00";
    };

    // Stopwatch function
    function startTimer() {

        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        }

        if (milliseconds > 9) {
            appendMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            milliseconds = 0;

            appendMilliseconds.innerHTML = "00";

            if (seconds <= 9) {
                appendSeconds.innerHTML = "0" + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }
        }
    }

};