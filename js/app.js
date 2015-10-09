$(function(){

  var startingBlocks = makeStartingBlocks();
  var randomNumbers  = getRandomNumbers();
  var orderedNumbers = sortRandomNumbers(randomNumbers);

  console.log(startingBlocks);
  console.log(orderedNumbers);


  function makeStartingBlocks() {
    var startingBlocks = $('li').toArray();
    return startingBlocks;
  }

  function getRandomNumbers() {
    var randomNumbers  = [];

    function checkArray(randomValue, randomNumbers) {
      return randomNumbers.indexOf(randomValue) > -1;
      console.log(randomNumbers);
    }

    for (var i = 0; i < 5; i++) {
      var randomValue = Math.floor(Math.random()*24);
      var repeat = checkArray(randomValue, randomNumbers); 
      if (repeat == false) {
        randomNumbers.push(randomValue);
      } 
    }

    if (randomNumbers.length < 5) {
      var randomValue = Math.floor(Math.random()*24);
      randomNumbers.push(randomValue);
    }
    return randomNumbers;
  }


  function sortRandomNumbers(randomNumbers) {
    randomNumbers.sort(function(a,b) {
      return a-b;
    });
    randomNumbers.push(24);
    return randomNumbers;
  }

});


//For each element in the startingBlocks array that has an index equal to that of one of the numbers in the orderedNumbers array:

 //split the startingBlocks array after that element,
 // define the split element as its own array.

// $.each(startingBlocks, function() {
//   if startingBlocks = 
// })


