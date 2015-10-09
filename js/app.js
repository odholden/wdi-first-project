$(function(){

  makeStartingBlocks();

  function makeStartingBlocks() {
    var startingBlocks = $('li').toArray();
    var randomNumbers  = getRandomNumbers();
    var orderedNumbers = sortRandomNumbers(randomNumbers);
    console.log(orderedNumbers);
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


