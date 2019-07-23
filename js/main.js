function time(){
  var date = new Date();
  hours = date.getHours() % 12;
  hours = hours ? hours : 12;
  hours = pad(hours);
  minutes = pad(date.getMinutes());
  seconds = pad(date.getSeconds());
  beatHours = (date.getUTCHours() == 23) ? 0 : date.getUTCHours() + 1;
  var beats = Math.abs(((((beatHours * 60) + date.getUTCMinutes()) * 60) + date.getUTCSeconds()) / 86.4).toFixed(2);
  var today = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});

  document.querySelectorAll('.hours').forEach(function(item){item.innerHTML = hours});
  document.querySelectorAll('.minutes').forEach(function(item){item.innerHTML = minutes});
  document.querySelectorAll('.seconds').forEach(function(item){item.innerHTML = seconds});
  document.querySelectorAll('.beats').forEach(function(item){item.innerHTML = beats});
  document.querySelectorAll('.date').forEach(function(item){item.innerHTML = today})
}

function pad(num){
  return ('0' + num).slice(-2);
}

time();
setInterval(time, 1000);