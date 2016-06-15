var cowsay2 = require('cowsay-browser');

module.exports = function(moomoo = 'All good, my man!') {
  return cowsay2.say({
    text: `${moomoo}`
  });
};
