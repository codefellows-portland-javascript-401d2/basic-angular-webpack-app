var cowsay = require('cowsay-browser');

module.exports = function(moo = 'hi there') {
  return cowsay.say({
    text : 'I\'m a moooodule',
    T: 'U'
  });
};
