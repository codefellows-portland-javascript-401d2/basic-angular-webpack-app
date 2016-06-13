const cowsay = require('cowsay-browser');

module.exports = function(moo) {

  return cowsay.say({
    text:moo,
    T:'\\/',
    e:'..',
    f: 'head-in'
  });




};
