var moment  = require('moment');

/*
var date = new Date();
console.log(date.getMonth());
*/

var date = moment();
date.add(1000, 'years').subtract(4, 'months');
console.log(date.format('MMM Do, YYYY'));
