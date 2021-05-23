/*Filtro por propriedades 
======================================*/

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var filteredImages = images.filter(function(image) {

  return image.height >= 20 && image.width <80; 

});

// filteredImages --> [{"height":54,"width":32}]