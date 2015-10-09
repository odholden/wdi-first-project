$(function(){

  var blocks   = makeBlocks();
  var redBlock = blocks[0];
  var $lis   = $('li');
  console.log($lis);


  function makeBlocks() {
    var blockLimits = getBlockLimits();
    var block1 = getBlock(-1, blockLimits[0]);
    var block2 = getBlock(blockLimits[0], blockLimits[1]);
    var block3 = getBlock(blockLimits[1], blockLimits[2]);
    var block4 = getBlock(blockLimits[2], blockLimits[3]);
    var block5 = getBlock(blockLimits[3], blockLimits[4]);
    var block6 = getBlock(blockLimits[4], 24);

    return blocks = [block1, block2, block3, block4, block5, block6];

  }

  function getBlockLimits() {
    var startingBlocks = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
    var shuffledBlocks = shuffle(startingBlocks);
    var randomBlocks = startingBlocks.splice(3, 5);
    var blockLimits = sortRandomBlocks(randomBlocks);
    return blockLimits;
  }

  function getBlock(lowerLimit, upperLimit) {
    var block = [];
    for (var i = lowerLimit + 1; i <= upperLimit; i++) {
        block.push(i);
    }
    return block;
  }

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




















