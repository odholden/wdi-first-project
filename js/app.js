$(function(){

  makeStartingBlocks();

  function makeStartingBlocks() {
    var startingBlocks = $('li').toArray();
    var randomNumbers  = getRandomNumbers();
    var orderedNumbers = sortRandomNumbers(randomNumbers);
  }

  function getRandomNumbers() {
    var randomNumbers  = [];
    for (var i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random()*24));
    }
    return randomNumbers;
  }

  function sortRandomNumbers(randomNumbers) {
    randomNumbers.sort(function(a,b) {
      return a-b;
    });
    randomNumbers.push(24);
    console.log(randomNumbers);

  }

});