$(function(){

  var blockLimits = getBlockLimits();

  function getBlockLimits() {
    var startingBlocks = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    var shuffledBlocks = shuffle(startingBlocks);
    var randomBlocks = startingBlocks.splice(3, 5);
    var blockLimits = sortRandomBlocks(randomBlocks);
    return blockLimits;
  }
  
  var redLimit = blockLimits[0];
  var whiteLimit1 = blockLimits[1];
  var blueLimit = blockLimits[2];
  var whiteLimit2 = blockLimits[3];
  var yellowLimit = blockLimits[4];

  var redBlock = [];
  var whiteBlock1 = [];
  var blueBlock = [];
  var whiteBlock2 = [];
  var yellowBlock = [];
  var whiteBlock3 = [];

  for (var i = 0; i <= redLimit; i++) {
      redBlock.push(i);
  }
  for (var i = (redLimit + 1); i <= whiteLimit1; i++) {
      whiteBlock1.push(i);
  }
  for (var i = (whiteLimit1 + 1); i <= blueLimit; i++) {
      blueBlock.push(i);
  }
  for (var i = (blueLimit + 1); i <= whiteLimit2; i++) {
      whiteBlock2.push(i);
  }
  for (var i = (whiteLimit2 + 1); i <= yellowLimit; i++) {
      yellowBlock.push(i);
  }
  for (var i = (yellowLimit + 1); i <= 24; i++) {
      whiteBlock3.push(i);
  }

  console.log(redBlock);
  console.log(whiteBlock1);
  console.log(blueBlock);
  console.log(whiteBlock2);
  console.log(yellowBlock);
  console.log(whiteBlock3);

  function shuffle(startingBlocks) {
    var i = startingBlocks.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = startingBlocks[i];
        startingBlocks[i] = startingBlocks[j];
        startingBlocks[j] = temp; 
    }
    return startingBlocks;
  }

  function sortRandomBlocks(randomBlocks) {
    randomBlocks.sort(function(a,b) {
      return a-b;
    });
    return randomBlocks;
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






















