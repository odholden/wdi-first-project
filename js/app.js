$(function(){

  var startingBlocks = $('li');
  var randomNumbers  = getRandomNumbers();
  var orderedNumbers = sortRandomNumbers(randomNumbers);

  console.log(orderedNumbers);

  // $.each(startingBlocks, function(i, value) {
  //   if ($.inArray(startingBlocks[i], orderedNumbers) > -1) {
  //     console.log(startingBlocks[i]);
  //   }
  // });  NOT WORKING

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
    //STILL A CHANCE OF A REPEAT NUMBER
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




 correctBlocks = $('li');

 arrayRed    = [0,1,2,3,4,5];
 arrayWhite1 = [6,7,8];
 arrayYellow = [9,10,11,12,13,14];
 arrayWhite2 = [15,16,17,18,19];
 arrayBlue   = [20,21,22];
 arrayWhite3 = [23,24];






















