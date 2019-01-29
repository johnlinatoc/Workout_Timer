let countdown;
const timerDisplay = document.getElementById("here");
const btn = document.getElementById("reset");



//first set timer
function setTimer(seconds) {
    console.log(seconds);
    displayTime(seconds);

    countdown = setInterval(() => {
        seconds--;


        //stop timer
        if (seconds < 0) {
            clearInterval(countdown);
            return;
        }

        //display time
        displayTime(seconds);
        console.log(seconds);
    }, 1000);
}

//resets fields after entering
document.box.addEventListener("submit", function (e) {
    e.preventDefault();
    const time = this.num.value;
    setTimer(time);
    this.reset();
})



//reset button
btn.addEventListener("click", function (e) {
    clearInterval(countdown);
    timerDisplay.innerHTML = "0:00";
});



//timer display
function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.innerHTML = display;
    document.title = display;
}

