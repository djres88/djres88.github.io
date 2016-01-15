// Takes an array and returns a new array containing only those elements that meet a condition.
// function map(array, condition) {
//   var newArray = [];
//   for (var i = 0; i < array.length; i++) {
//     if(condition) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
//
// var getWordType = function(array, wordType) {
//   for (var i = 0; i < string.length; i++) {
//     if (string[i].indexOf() !== -1) {
//       console.log(string[i]);
//     }
//   }
// }
//
//     if(condition) {
//       newArray.push(array[i]);
//     }
//   }
//   return newArray;
// }
//
// === "adjective"

function getRandom(array) {
  var index = 0;
  if (Array.isArray(array)) {
    index = Math.floor(Math.random()*array.length);
    return array[index];
  } else {
    index = Math.floor(Math.random()*Object.keys(array).length);
    return Object.keys(array)[index];
  }
}


function replaceWords(array) {
  return function(wordType) {
    for(var i=0; i<array.length; i++) {
      if(wordType === array[i]) {
        getRandom(wordType);
      }
    }
  }
}


function replace(string) {
  return function(array) {
    var splitArray = array.split;
    var count = 0;
    for (var i = 0; i < splitArray.length; i++) {
      if(splitArray[i] === string) {
        count+=1;
      }
    }
    console.log("The word " + string + " appears " + count + " times");
  }
}

function replaceAll(string, find, replace) {
  var findValue = new RegExp(find, "gi");
  return string.replace(findValue, replace);
}


getRandom(string);
