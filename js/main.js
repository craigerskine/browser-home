// jquery-like selector
window.$_ = function(selector, next) {
  var selectors = document.querySelectorAll(selector);
  [].forEach.call(selectors, next);
};

function now(){
  var date = new Date();

  // date/time/beats
  var hours = date.getHours() % 12;
  hours = hours ? hours : 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var beatHours = (date.getUTCHours() == 23) ? 0 : date.getUTCHours() + 1;
  var beats = Math.abs(((((beatHours * 60) + date.getUTCMinutes()) * 60) + date.getUTCSeconds()) / 86.4).toFixed(2);

  $_('.hours', function(e){e.innerHTML = pad(hours)});
  $_('.minutes', function(e){e.innerHTML = pad(minutes)});
  $_('.seconds', function(e){e.innerHTML = pad(seconds)});
  $_('.beats', function(e){e.innerHTML = beats});
  $_('.date-m', function(e){e.innerHTML = date.toLocaleDateString("en-US", {month: '2-digit'})});
  $_('.date-mm', function(e){e.innerHTML = date.toLocaleDateString("en-US", {month: 'short'})});
  $_('.date-d', function(e){e.innerHTML = date.toLocaleDateString("en-US", {day: '2-digit'})});
  $_('.date-dd', function(e){e.innerHTML = date.toLocaleDateString("en-US", {weekday: 'short'})});
  $_('.date-y', function(e){e.innerHTML = date.toLocaleDateString("en-US", {year: 'numeric'})});

  // binary
  var sec2 = seconds % 10;
  var sec1 = (seconds - sec2) / 10 % 10;
  var min2 = minutes % 10;
  var min1 = (minutes - min2) / 10 % 10;
  var hrs2 = hours % 10;
  var hrs1 = (hours - hrs2) / 10 % 10;

  binary(sec1, 'sec-1');
  binary(sec2, 'sec-2');
  binary(min1, 'min-1');
  binary(min2, 'min-2');
  binary(hrs1, 'hrs-1');
  binary(hrs2, 'hrs-2');

}

function pad(num){
  return ('0' + num).slice(-2);
}

var binary = function(n,t) {
  const tickOn = ['bg-blue-500', 'on'];
  const tickOff = ['bg-gray-800'];
  if(n == 1) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 2) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 3) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 4) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 5) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 6) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 7) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  } else if(n == 8) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
  } else if(n == 9) {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOn); e.classList.remove(...tickOff)});
  } else {
    $_('.'+t+'-1', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-2', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-4', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
    $_('.'+t+'-8', function(e){e.classList.add(...tickOff); e.classList.remove(...tickOn)});
  };
};

now();
setInterval(now, 100);