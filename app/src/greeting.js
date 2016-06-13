const cowsay = require('cowsay-browser');

module.exports = function(place = 'World') {
  return cowsay.say({
    text: 'Hello ' + place,
    e : '. .',
    T : 'U '
  });
};