var lolex = require('lolex');

function runInTime(now, cb) {
  var clock = lolex.install(FAKE_NOW);
  cb();
  clock.uninstall();
}

module.exports.runInTime = runInTime;
