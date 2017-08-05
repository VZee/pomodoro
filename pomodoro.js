//variable declarations
//countdown timer
var clock;
//time for work (minues)
var workVal = 25;
//time for break (minutes)
var breakVal = 10;
var seconds = 59;
var typeVal = "work";
//timer is initially not running (paused)
var pause = true;
//time remaining
var timeRem;
var interval;
var first = true;

function workUp(){
  //when work + is pressed work time goes up by 1
  workVal += 1;
  document.getElementById("work").innerHTML = workVal;
  if(typeVal === "work"){
    document.getElementById("countdown").innerHTML = workVal;
  }
}

function workDown(){
  //when work - is pressed work time goes down by 1
  workVal -= 1;
  if(workVal < 1){
    workVal = 1;
  }
  document.getElementById("work").innerHTML = workVal;
  if(typeVal === "work"){
    document.getElementById("countdown").innerHTML = workVal;
  }
}

function breakUp(){
  //when break + is pressed break time goes up by 1
  breakVal += 1;
  document.getElementById("break").innerHTML = breakVal;
  if(typeVal === "break"){
    document.getElementById("countdown").innerHTML = breakVal;
  }
}

function breakDown(){
  //when break - is pressed break time goes down by 1
  breakVal -= 1;
  if(breakVal < 1){
    breakVal = 1;
  }
  document.getElementById("break").innerHTML = breakVal;
  if(typeVal === "break"){
    document.getElementById("countdown").innerHTML = breakVal;
  }
}

function startStop(){
  //start and stop timer
  if(pause){
    //if the timer is currently paused, set it to run
    pause = false;
    document.getElementById("start").innerHTML = "Pause";
    runFun();
  }
  else{
    //if the timer is currently running, pause it
    pause = true;
    document.getElementById("start").innerHTML = "Start";
    //call the pause function
    pauseFun();
  }
}

function pauseFun(){
  //pause function
  clearInterval(interval);
}

function runFun(){
  //run function
  if(typeVal === "work"){
    timeRem = workVal;
  }
  else if(typeVal === "break"){
    timeRem = breakVal;
  }
  interval = setInterval(timeDown, 1000);
}

function timeDown(){
  if(first){
    //if this is the first time the given timer has started to countdown
    //only happens the first time the timer is started or when the times
    //switch from break to work or vice versa
    timeRem--;
    document.getElementById("countdown").innerHTML = timeRem;
    document.getElementById("sec").innerHTML = seconds;
    first = false;
    console.log(timeRem);
  }
  else if(seconds > 0){
    seconds--;
    if(seconds < 10 && seconds >= 0){
      seconds = ("0" + seconds).slice(-2);
    }
    document.getElementById("sec").innerHTML = seconds;
    seconds = Number(seconds);
  }
  else if(seconds === 0 && timeRem > 0){
    timeRem--;
    seconds = 59;
    document.getElementById("countdown").innerHTML = timeRem;
    document.getElementById("sec").innerHTML = seconds;
  }
  else if(seconds === 0 && timeRem === 0){
    if(typeVal === "work"){
      timeRem = breakVal;
      typeVal = "break";
    }
    else if(typeVal === "break"){
      timeRem = workVal;
      typeVal = "work";
    }
    seconds = 59;
    timeRem--;
    document.getElementById("countdown").innerHTML = timeRem;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("type").innerHTML = typeVal;
  }
}

$(document).ready(function(){
  document.getElementById("plusWork").onclick = function(){workUp();}
  document.getElementById("minusWork").onclick = function(){workDown();}
  document.getElementById("plusBreak").onclick = function(){breakUp();}
  document.getElementById("minusBreak").onclick = function(){breakDown();}
  document.getElementById("start").onclick = function(){startStop();}
});
