$(function(){

  var gridSize    = $('li').length;
  var blocks      = makeBlocks();
  var colorGrid   = fillGrid(blocks);

  function fillGrid(blocks) {
    var redBlock = blocks[0];
    for (var i = 0; i < redBlock.length; i++) {
      $("li#"+redBlock[i]).css("background-color","red");       
    }
    var greenBlock = blocks[3];
    for (var i = 0; i < greenBlock.length; i++) {
      $("li#"+greenBlock[i]).css("background-color","green");       
    }
    var blueBlock = blocks[2];
    for (var i = 0; i < blueBlock.length; i++) {
      $("li#"+blueBlock[i]).css("background-color","blue");       
    }
    var whiteBlock = blocks[1];
    for (var i = 0; i < whiteBlock.length; i++) {
      $("li#"+whiteBlock[i]).css("background-color","white");       
    }
    var yellowBlock = blocks[4];
    for (var i = 0; i < yellowBlock.length; i++) {
      $("li#"+yellowBlock[i]).css("background-color","yellow");       
    }
    var blackBlock = blocks[5];
    for (var i = 0; i < blackBlock.length; i++) {
      $("li#"+blackBlock[i]).css("background-color","black");       
    }
  }

  function makeBlocks() {
    var blockLimits = getBlockLimits();
    var block1 = getBlock(-1, blockLimits[0]);
    var block2 = getBlock(blockLimits[0], blockLimits[1]);
    var block3 = getBlock(blockLimits[1], blockLimits[2]);
    var block4 = getBlock(blockLimits[2], blockLimits[3]);
    var block5 = getBlock(blockLimits[3], blockLimits[4]);
    var block6 = getBlock(blockLimits[4], gridSize - 1);

    return blocks = [block1, block2, block3, block4, block5, block6];

  }

  function getBlockLimits() {
    var startingBlocks = [];
    for (var i = 1; i <= gridSize - 2; i++) {startingBlocks.push(i)}
    console.log(startingBlocks);
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




















