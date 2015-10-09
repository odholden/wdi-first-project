$(function(){

  makeStartingBlocks();

  function makeStartingBlocks() {
    var startingBlocks = $('li').toArray();
    getRandomNumbers();
    sortRandomNumbers(randomNumbers);
  }

  function getRandomNumbers() {
    var randomNumbers  = [];
    for (var i = 0; i < 6; i++) {
      randomNumbers.push(Math.floor(Math.random()*24));
    }
    return randomNumbers;
  }

  function sortRandomNumbers(randomNumbers) {

  }

})