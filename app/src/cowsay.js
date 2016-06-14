var cowsay = require('cowsay-browser');

module.exports = function(moo = 'hi there') {
  return cowsay.say({
    text : `${moo}`,
    T: 'U'
  });
};

module.exports = function(moomoo) {
  return cowsay.say({
    text: 'Hello there kind sir'
  });
};
