const cowsay = require('cowsay-browser');

module.exports = moo => cowsay.say({
  text:`\n${moo}\n`,
  T:'\\/',
  e:'..'
});
