var timeleft = 10;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    window.location.href = "./index.html";
  } else {
    document.getElementById("demo").innerHTML = timeleft + " segundos.";
  }
  timeleft -= 1;
}, 1000);