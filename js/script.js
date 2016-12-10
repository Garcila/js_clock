window.setInterval(function() {
  let timeNow = new Date();
  let hour    = timeNow.getHours();
  apmHour = hour > 12 ? hour - 12 : hour;
  let minute = timeNow.getMinutes();
  let second = timeNow.getSeconds();
  let handHour = document.querySelector('.hour');
  let handMinute = document.querySelector('.minute');
  let handSecond = document.querySelector('.second');

  function hourInDegrees(apmHour) {
    return ((apmHour * 30) + 90);
  };

  function minuteInDegrees(minute) {
    return ((minute * 6) + 90);
  };

  function secondInDegrees(second) {
    return ((second * 6) + 90);
  };

  Object.assign(handHour.style,
    {transform: 'rotate(' + hourInDegrees(apmHour) +  'deg)',
      transformOrigin: '100%'
    });
  Object.assign(handMinute.style,
    {transform: 'rotate(' + minuteInDegrees(minute) + 'deg',
      transformOrigin: '100%'
    });
  Object.assign(handSecond.style,
    {transform: 'rotate(' + secondInDegrees(second) + 'deg)',
      transformOrigin: '100%'
    });
}, 1000);
