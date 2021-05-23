 /* Reducing Properties */

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous,desk) {
    previous[Object.values(desk)]++
  	return previous
}, { sitting: 0, standing: 0 ,});

// deskTypes --> {"sitting":3,"standing":2};