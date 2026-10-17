let secHTML = document.getElementById("sec");

let msecHTML = document.getElementById("msec");

let minHTML = document.getElementById("min");


let startButton = document.getElementById("btn-start");

let pauseButton = document.getElementById("btn-stop");
let resetButton = document.getElementById("btn-reset");

let sec = 0;
let msec = 0;
let min = 0
let interval;

startButton.addEventListener("click", () => {
   clearInterval(interval);
   interval = setInterval(startTimer, 10);
});

function startTimer() {
   
   msec++;
   if (msec < 10) {
      msecHTML.textContent = "0" + msec;
   }
   else if (msec < 100) {
      msecHTML.textContent = msec;
   }
   else if (msec > 99) {
      sec++;
      msec = 0;
      msecHTML.textContent = "00"
   }

   if (sec < 10) {
      secHTML.textContent = "0" + sec;
   }
   else if (sec >= 10 && sec < 60) {
      secHTML.textContent = sec;
   }
   else if (sec >= 60) {
      sec = 0;
      msec = 0;
      min++;
      msecHTML.textContent = "00";
      secHTML.textContent = "00"
      if (min < 10) {
         minHTML.textContent = "0" + min;
      }
      else if (min >= 10) {
         minHTML.textContent = min;
      }


   }


}
pauseButton.addEventListener("click", () => {
   clearInterval(interval);
});

resetButton.addEventListener("click", () => {
   msec = 0;
   sec = 0;
   min = 0;
   msecHTML.textContent = "0" + msec;
   secHTML.textContent = "0" + sec;
   minHTML.textContent = "0" + min;


   clearInterval(interval);
});



