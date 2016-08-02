var cowsay = require('cowsay-browser');

module.exports = function(moo = 'Sup, bro?') {
  return cowsay.say({
    text : `${moo}`,
    T: 'U'
  });
};
