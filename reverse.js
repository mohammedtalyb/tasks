var patt = /([a-z]|[0-9])/g;

function main(str) {
    var stringArr = str.split('');
    var reversedString = reverse(stringArr);
    console.log(reversedString);
}
function reverse(arr) {
    var lhs = 0;
    var rhs = arr.length-1;
    while(lhs < rhs){
        if (!(arr[lhs]).match(patt)){
            lhs++;
        }else if(!(arr[rhs]).match(patt)){
            rhs--;
        }else{
            let temporary = arr[lhs];
            arr[lhs]      = arr[rhs];
            arr[rhs]      = temporary;
            lhs++;
            rhs--;
        }
    }

 return arr.join('');
}

main('tal#i$b*');