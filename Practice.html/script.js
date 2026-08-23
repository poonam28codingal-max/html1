window.onload =function()
{
    var seconds = 0;
    var milliseconds = 0;
    var appendmilliseconds = document.getElementById("millisecond");
    var appendseconds = document.getElementById("second");
    var buttonStart = document.getElementById("start-button");
    var buttonStop = document.getElementById("stop-button");
    var buttonReset = document.getElementById("reset-button");
    var Interval;

    buttonStart.onclick = function()
    {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function()
    {
        clearInterval(Interval);
    }
    buttonReset.onclick = function()
    {
        clearInterval(Interval);
        milliseconds = "00";
        seconds = "00";
        appendmilliseconds.innerHTML = milliseconds;
        appendseconds.innerHTML = seconds;
    }

function startTimer()
{
    milliseconds++;
    if(milliseconds <= 9)
    {
        appendmilliseconds.innerHTML = "0" + milliseconds;
    }
    if(milliseconds > 9)
    {
        appendmilliseconds.innerHTML = milliseconds;
    }
    if(milliseconds > 99)
    {
        seconds++;
        appendseconds.innerHTML = "0" + seconds;
        milliseconds = 0;
        appendmilliseconds.innerHTML = "0" + 0;
    }
    if(seconds > 9)
    {
        appendseconds.innerHTML = seconds;
    }
  
}
}