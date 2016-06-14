const cowsay = require('cowsay-browser');

const greeting = module.exports;

greeting.cowsay = (name = 'Code Fellows', format = 'default') => {
  return cowsay.say({
    text: `Hello ${name}`,
    f: format
  });
};

greeting.cowsayFormats = [
  'beavis.zen',
  'bong',
  'bud-frogs',
  'bunny',
  'cheese',
  'cower',
  'daemon',
  'default',
  'doge',
  'dragon-and-cow',
  'dragon',
  'elephant-in-snake',
  'elephant',
  'eyes',
  'flaming-sheep',
  'ghostbusters',
  'head-in',
  'hellokitty',
  'kiss',
  'kitty',
  'koala',
  'kosh',
  'luke-koala',
  'mech-and-cow',
  'meow',
  'milk',
  'moofasa',
  'moose',
  'mutilated',
  'ren',
  'satanic',
  'sheep',
  'skeleton',
  'small',
  'sodomized',
  'squirrel',
  'stegosaurus',
  'stimpy',
  'supermilker',
  'surgery',
  'telebears',
  'turkey',
  'turtle',
  'tux',
  'vader-koala',
  'vader',
  'www'
];
