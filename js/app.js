$(function(){

  var gridSize = $('li').length;
  $('li').css("background-color", "white");
  $('button').on("click", makeGrid(gridSize));

  function makeGrid(gridSize) {
    var blocks = makeBlocks();
    var colors = getColors();
    var block0 = fillGrid(blocks[0], colors[0]);
    var block1 = fillGrid(blocks[1], colors[1]);
    var block2 = fillGrid(blocks[2], colors[2]);
    var block3 = fillGrid(blocks[3], colors[3]);
    var block4 = fillGrid(blocks[4], colors[4]);
    var block5 = fillGrid(blocks[5], colors[5]);
  }

  function makeBlocks() {
    var blockLimits = getBlockLimits();
    var block0      = getBlock(-1, blockLimits[0]);
    var block1      = getBlock(blockLimits[0], blockLimits[1]);
    var block2      = getBlock(blockLimits[1], blockLimits[2]);
    var block3      = getBlock(blockLimits[2], blockLimits[3]);
    var block4      = getBlock(blockLimits[3], blockLimits[4]);
    var block5      = getBlock(blockLimits[4], gridSize - 1);
    return blocks   = [block0, block1, block2, block3, block4, block5];
  }

  function getColors() {
    var colors         = ["#EF5350", "#FFA726", "#42A5F5", "#66BB6A", "#FFEE58", "white"];
    var shuffledColors = shuffle(colors);
    return shuffledColors;
  }

  function shuffle(array) {
    var i = array.length,
        j = 0,
        temp;
    while (i--) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp; 
    }
    return array;
  }

  function fillGrid(blocks, background) {
    for (var i = 0; i < blocks.length; i++) {
      $("li#"+blocks[i]).css("background-color", background);       
    }
  }

  function getBlockLimits() {
    var startingBlocks = [];
    for (var i = 1; i <= gridSize - 2; i++) {startingBlocks.push(i)}
    var shuffledBlocks = shuffle(startingBlocks);
    var randomBlocks   = startingBlocks.splice(3, 5);
    var blockLimits    = sortRandomBlocks(randomBlocks);
    return blockLimits;
  }

  function getBlock(lowerLimit, upperLimit) {
    var block = [];
    for (var i = lowerLimit + 1; i <= upperLimit; i++) {
        block.push(i);
    }
    return block;
  }

  function sortRandomBlocks(randomBlocks) {
    randomBlocks.sort(function(a,b) {
      return a-b;
    });
    return randomBlocks;
  }

});




















