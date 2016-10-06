var moment = require('moment');

moment.fn.formatDate = function(keepTimezone, showDayOfWeek) {
  var instance = this.clone();
  var today = moment();

  // TODO: Adding days in a local timezone are affected by DST changes?
  var yesterday = today.clone().add(-1, 'day');
  var tomorrow = today.clone().add(1, 'day');

  // NOTE: This implementation uses ISO week of year, meaning that weeks always
  // starts on Monday independently of browser locale or configuration.
  var isSameWeek = instance.isSame(today, 'isoWeek');
  var isSameYear = instance.isSame(today, 'year');
  var isToday = instance.isSame(today, 'day');
  var isYesterday = instance.isSame(yesterday, 'day');
  var isTomorrow = instance.isSame(tomorrow, 'day');

  if (isToday) {
    return 'Today';
  }

  if (isYesterday) {
    return 'Yesterday';
  }

  if (isTomorrow) {
    return 'Tomorrow';
  }

  if (isSameWeek && showDayOfWeek) {
    return instance.format('dddd');
  }

  if (isSameYear) {
    return instance.format('LL');
  }

  return instance.format('L');
};
