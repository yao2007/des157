var input = [1,2,2,4,4];

var getDuplica = function(array){ 
    //array.sort();
    //var pre = array[0];
    var map = new Map();
    for(let i = 0; i < array.length; i++){
        if(map.has(array[i])){
            return array[i];
        }else{
            map.set(array[i]);
        }
    }

    //const space
    
}