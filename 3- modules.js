//modules

//commaJS, every file is module (by default)
//modules - encapsulated code(only share minimum)
const names = require('./4-names');
const sayHi= require('./5-utils');
const data = require('./6-alternative -flavour');
// console.log(data);
require('./7-mind-grenade');


sayHi('susan')
sayHi(names.john)
sayHi(names.peter) 