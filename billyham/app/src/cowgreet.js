const cowsay = require('cowsay-browser');

module.exports = function(textBlurb, altFile){
  return cowsay.say({text: textBlurb, e: ',,', T: '/ ', f: altFile});
};
