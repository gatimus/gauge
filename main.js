
window.onload = function() {
  var meter = document.getElementById("needle");
  var display = document.getElementById("display");
  var value = 0;

  
  window.setInterval(cycle, 10);
  function cycle(){
    
    if(value < 1){
      value += 0.001;
      meter.style.transform = "rotate(" + (value*270-135).toString() + "deg)";
      display.innerHTML = Math.round(value*100) + "%";
    } else {
      value = 0;
      meter.style.transform = "rotate(-135deg)";
      display.innerHTML = Math.round(value*100) + "%";
    }
  }
};

