'use strict';

var env = require('system').env;
var moment = require('moment');

require('consoleplusplus');
// Extend moment with custom formatters
require('./moment-human');
// Some utils
var runInTime = require('./utils').runInTime;

var FAKE_NOW = moment.utc('2016-10-16T04:00:00', 'YYYY-MM-DDTHH:mm:ss', true).valueOf();
var SELECTED_DATE = '2016-10-15';

runInTime(FAKE_NOW, function () {
  var pickDate = moment(SELECTED_DATE, 'YYYY-MM-DD', true);

  console.debug(
    'Perceived date #yellow{' + pickDate.format('YYYY-MM-DD') +
    '} from now (#cyan{' + moment().format() + '}) in ' +
    env.TZ + '=> #red{' + pickDate.formatDate() + '}'
  );
});

phantom.exit();
