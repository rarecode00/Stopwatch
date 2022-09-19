//alert("hello");

const startBtn = document.querySelector(".start"),
stopBtn = document.querySelector(".stop"),
resetBtn = document.querySelector(".reset");


startBtn.addEventListener("click" , startf);
stopBtn.addEventListener("click" , stopf);
resetBtn.addEventListener("click" , resetf);

let hr = min = sec = ms = "0" + 0,
startTimer;

function startf() {
    startTimer = setInterval(()=>{
      ms++
      ms = ms < 10 ? "0" + ms : ms;

      if(ms == 100){
        sec++;
        sec = sec < 10 ? "0" + sec : sec;
        ms = "0" + 0;
      }
      if(sec == 60){
        min++;
        min = min < 10 ? "0" + min : min;
        sec = "0" + 0;
      }
      if(min == 60){
        hr++;
        hr = hr < 10 ? "0" + hr : hr;
        min = "0" + 0;
      }
      putValue();
    },10); //1000ms = 1s

  }

  function stopf() {
    clearInterval(startTimer);
    startTimer = null;
  }

  function resetf() {
    clearInterval(startTimer);
    hr = min = sec = ms = "0" + 0;
    putValue();
  }

  function putValue() {
    document.getElementById("millisecond").innerText = ms;
    document.getElementById("second").innerText = sec;
    document.getElementById("minute").innerText = min;
    document.getElementById("hour").innerText = hr;
  }