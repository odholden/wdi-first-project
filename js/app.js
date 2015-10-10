$(function setup(){

  var currentColor = 'green';

  $('button').on("click", function(){
    var correctGrid = makeGrid();
    console.log(correctGrid);
    setTimeout(clearGrid, 3000);
  });

  $('.square').on("click", function() {
    $(this).toggleClass(currentColor);
  });
});

//  CLEARS THE BOARD

function clearGrid() {
  $('.square').css('background-color', '#78909C');
}

// POPULATES THE GRID

function makeGrid() {
  var blocks      = makeBlocks();
  var colors      = getColors();
  for (var i = 0; i <6; i++) fillGrid(blocks[i], colors[i]);
  var correctGrid = [blocks, colors];
  return correctGrid;
}

function makeBlocks() {
  var blockLimits = getBlockLimits();
  var block0      = getBlock(-1, blockLimits[0]);
  var block1      = getBlock(blockLimits[0], blockLimits[1]);
  var block2      = getBlock(blockLimits[1], blockLimits[2]);
  var block3      = getBlock(blockLimits[2], blockLimits[3]);
  var block4      = getBlock(blockLimits[3], blockLimits[4]);
  var block5      = getBlock(blockLimits[4], 24);
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
  for (var i = 1; i <= 23; i++) {startingBlocks.push(i)}
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






















