const cowsay = require('cowsay-browser');

module.exports = function(place = 'World') {
  return cowsay.think({
    text: 'Hello ' + place,
    e : '. .',
    T : 'U ',
    f: 'stegosaurus'
  });
};