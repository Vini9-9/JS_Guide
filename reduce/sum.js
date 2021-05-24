 /* Soma com Reduce */

var numbers = [10,20,30,40,50];

var sumNumbers = numbers.reduce(function(sum,number) {
  	return sum + number;
}, 0);