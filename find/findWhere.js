// Custom FindWhere Function

var ladders = [{ id: 1,height: 20 }, { id: 3,height: 25 }];

function findWhere(array, criteria) {
   var atributo = Object.keys(criteria)[0] //height
	 var valor = Object.values(criteria)[0]//25
   
   return array.find(function(item){
   return item[atributo] === valor;
   });
   
}

// findWhere(ladders,{height:25}) --> {"id":3,"height":25}