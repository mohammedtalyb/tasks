function main(values) {
  var numbers     = values.split(',');
  var combineArr  = addRange(numbers);
  var toInteger   = combineArr.map(function(item) {

    return parseInt(item);
});
	console.log(result(toInteger));
 }


function addRange(arr) {

	var combine 	 = arr;
    arr.forEach((num,index) => {
      if(num.indexOf('-') > -1) {
        splitted    = num.split('-');
        numToConcat = range(+splitted[0],+splitted[1]);
        combine.splice(index,1)
        combine     = combine.concat(numToConcat);
		} 
	});

	return combine;		
}

function range(start,stop) {
  var arr = [];
  while(start <= stop) {
    arr.push(start);
    start++;
  }
	
  return arr;
}

function result(arr) {
	var unique    = [];
  var duplicate = [];

  for(let i = 0; i<arr.length; i++) {
    if(unique.includes(arr[i]) && !duplicate.includes(arr[i])) {
      duplicate.push(arr[i]);
    } else {
      unique.push(arr[i]);
    }
  }

  return [unique,duplicate];

//   for(let i = 0; i<arr.length; i++) { 
//       unique.push(arr.filter((num) => num == arr[i]));
//   }
//   console.log(unique);
//   for(let i = 0; i<arr.length; i++) { 
//     duplicate = unique.filter((num) => num == arr[i])
// }
  
  
  // for(let i = 0; i<arr.length; i++) {
  //   for(let j=0; j < unique.length; j++) {   
  //     if(unique.indexOf(arr[i]) > -1){
  //       duplicate.push(arr[i]);
  //       break;
  //     } else {
  //       unique.push(arr[i]);
  //       break;
  //     }
  // }
  // }
}

function toInteger(arr) {
  arr.map(function(item) {
    
  return parseInt(item, 10);
  });
}

main('1,2,3,2,5,6,9,9,5-15,8,20-29,25'); 

