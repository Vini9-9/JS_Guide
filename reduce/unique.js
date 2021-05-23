/* Custom 'Unique' Helper */

var numbers = [1,2,3,4,4,4,3,2];

function unique(array) {
  return array.reduce(function(acc,number){
    acc.find(previousValue => number === previousValue) ? acc : acc.push(number);
    return acc;
  },[])
}

// unique(numbers) --> [1,2,3,4]