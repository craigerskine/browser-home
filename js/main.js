var $ = document.querySelectorAll.bind(document);

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

  $('.hours').forEach(function(item){item.innerHTML = hours});
  $('.minutes').forEach(function(item){item.innerHTML = minutes});
  $('.seconds').forEach(function(item){item.innerHTML = seconds});
  $('.beats').forEach(function(item){item.innerHTML = beats});
  $('.date').forEach(function(item){item.innerHTML = today})
}

function pad(num){
  return ('0' + num).slice(-2);
}

time();
setInterval(time, 1000);