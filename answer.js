var uniqueInOrder=function(iterable){
    var uniqueArr = []
    var arr = Array.isArray(iterable) === false  ? iterable.split("") : iterable
    //Array.isArray(iterable) || iterable instanceof Array
    arr.forEach((item,index,array)=>array[index] !== array[index-1]?uniqueArr.push(array[index]):uniqueArr)
    return uniqueArr
}

function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
