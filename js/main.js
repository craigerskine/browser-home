function dateTime() {
  $('.date').html(moment().format('MMMM Do YYYY'));
  $('.hour').html(moment().format('hh'));
  $('.minute').html(moment().format('mm'));
  $('.second').html(moment().format('ss'));
  $('.beat').html(((moment().utcOffset(1).seconds() + (moment().utcOffset(1).minutes() * 60) + (moment().utcOffset(1).hours() * 3600)) / 86.4).toFixed(2));
}

dateTime();
setInterval(dateTime, 1000);