let countdown;
const timerDisplay = document.getElementById("here");


function timer(seconds) {
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

function displayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.innerHTML = display;
    document.title = display;
}

document.box.addEventListener("submit", function(e){
    e.preventDefault();
    const time = this.num.value;
    timer(time);
    this.reset();
})