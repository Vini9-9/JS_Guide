/*Selecionando propriedades de um objeto
======================================*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var heights = images.map(function(image){

	return image.height;
  
});

heights