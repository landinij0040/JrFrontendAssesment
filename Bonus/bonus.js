function compare(arr1 , arr2){
    var matches = [];
    // Compare one by one the elements in the first array to the elements in the second array
    for(var i = 0; i < arr1.length; i++){
        for(var j = 0; j < arr2.length; j++){
            if (arr1[i] === arr2[j]){
                matches.push(arr1[i])
            }
        }
 
    }
    console.log(matches)
}

var array_one = ["apple", "dog", "cat", "food", "kite", "elephant", "lunch", "book", "laptop"];
var array_two = ["dog", "goose", "kite", "meal", "laptop"];
compare(array_one, array_two);
