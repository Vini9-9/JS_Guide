/*map simples
======================================*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

var areas = images.map(function(image){

	return image.height*image.width;
  
});
