$(function(){

  var gridSize    = $('li').length;
  var blocks      = makeBlocks();
  var colorGrid   = fillGrid(blocks);

  var redBlock = fillGrid(blocks[0], "red");
  var whiteBlock = fillGrid(blocks[1], "white");
  var blueBlock = fillGrid(blocks[2], "blue");
  var greenBlock = fillGrid(blocks[3], "green");
  var yellowBlock = fillGrid(blocks[4], "yellow");
  var blackBlock = fillGrid(blocks[5], "black");




  function fillGrid(blocks, background) {
    for (var i = 0; i < blocks.length; i++) {
      $("li#"+blocks[i]).css("background-color", background);       
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




















