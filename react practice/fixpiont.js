arr = [-10, -5, 0, 3, 7];

const fixedPoint = function(arr){
    if(!arr) return 0;
    for(let i = 0; i < arr.length; i++){
        if(i === arr[i]){
            return i;
        }
    }
}

console.log(fixedPoint(arr));