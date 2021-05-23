/*Retorna um array baseado em uma propriedade 
======================================*/

function pluck(array, property) {
    
    var result = array.map(function(obj){
    return obj[property];
    });
  
  return result;
}

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var heights = pluck(images, 'height');

