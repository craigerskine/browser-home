var $ = document.querySelectorAll.bind(document);

function now(){
  var date = new Date();

  // date/time/beats
  var hours = date.getHours() % 12;
  hours = hours ? hours : 12;
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var beatHours = (date.getUTCHours() == 23) ? 0 : date.getUTCHours() + 1;
  var beats = Math.abs(((((beatHours * 60) + date.getUTCMinutes()) * 60) + date.getUTCSeconds()) / 86.4).toFixed(2);
  var today = date.toLocaleDateString("en-US", {year: 'numeric', month: 'long', day: 'numeric'});

  $('.hours').forEach(function(item){item.innerHTML = pad(hours)});
  $('.minutes').forEach(function(item){item.innerHTML = pad(minutes)});
  $('.seconds').forEach(function(item){item.innerHTML = pad(seconds)});
  $('.beats').forEach(function(item){item.innerHTML = beats});
  $('.date').forEach(function(item){item.innerHTML = today});

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
  if(n == 1) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 2) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 3) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 4) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 5) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 6) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 7) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  } else if(n == 8) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
  } else if(n == 9) {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-600'); item.classList.remove('bg-gray-800')});
  } else {
    $('.'+t+'-1').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-2').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-4').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
    $('.'+t+'-8').forEach(function(item){item.classList.add('bg-gray-800'); item.classList.remove('bg-gray-600')});
  };
};

now();
setInterval(now, 100);