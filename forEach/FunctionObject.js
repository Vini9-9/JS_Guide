/*Função com objeto
======================================*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var area=0;

var areas = [];

images.forEach(function(image){

	// nomeDoObjeto.nomeDaPropriedade
	areas.push(image.height*image.width);

});
