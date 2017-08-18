function merge(array1, array2){
  var array1Counter = 0;
  var array2Counter = 0;
  var mergedArray = [];

  while (array1Counter < array1.length || array2Counter < array2.length){
    if (array1[array1Counter] < array2[array2Counter]){
      mergedArray.push(array1[array1Counter]);
      array1Counter++;
    }
    else if (array1[array1Counter] > array2[array2Counter]){
      mergedArray.push(array2[array2Counter]);
      array2Counter++;
    }
    else{
      if (array1[array1Counter] !== null){
        mergedArray.push(array1[array1Counter]);
        array1Counter++;
      }
      if (array2[array2Counter] !== null){
        mergedArray.push(array2[array2Counter]);
        array2Counter++;
      }
    }
  }

  return mergedArray;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);