$(function setup(){
  $('button').on("click", startGame);
});

var turn = 0
var correctGrid, 
    selectedGrid,
    player,
    playerOneScore,
    playerTwoScore;

function startGame() {
  $('li').removeClass();
  $('#color').removeClass();
  turn++;
  if (turn % 2 !== 0) {
    player = 'playerOneScore';
  } else {player = 'playerTwoScore'};
  playRound();
}

//FUNCTIONS FOR PLAYING THE GAME

function playRound() {
  correctGrid  = makeGrid();
  selectedGrid = [];
  console.log(correctGrid);
  setTimeout(selectColors, 5000); 
  setTimeout(updateScore, 36000);
}

function updateScore() {
  compareGrids(correctGrid, selectedGrid);
}
function compareGrids(correctGrid, selectedGrid) {
  var score = 0;
  for(var i = 0; i <correctGrid.length; i++){
    if (correctGrid[i] === selectedGrid[i]) score++
  }
  console.log(score);
  $('#' + player).text("score. " + score);
}

function selectColors() {
  removeColors();
  colorTimer();
  $('li').on("click", function() {
    $(this).removeClass();
    $(this).toggleClass($('#color').attr('class'));
  });
}

function storeSelections() {
  selectedGrid = [];
  for (var i = 0; i < 25;i++) {
    selectedGrid.push($('li#' + [i]).css("background-color"));
  }
  console.log(selectedGrid);
  return selectedGrid;
}

function removeColors() {
  $('li.red').removeClass().addClass('shadow1');
  $('li.green').removeClass().addClass('shadow2');
  $('li.orange').removeClass().addClass('shadow3');
  $('li.blue').removeClass().addClass('shadow4');
  $('li.yellow').removeClass().addClass('shadow5');
  $('li.purple').removeClass().addClass('shadow6');
}

function colorTimer() {
  var colors = ['red', 'green', 'orange', 'blue', 'yellow', 'purple'];
  $('#color').fadeIn('fast').addClass(colors[0]);
  var currentColor = colors[0];  
  // for (var i = 0; i<colors.length; i++) {
  //   setTimeout(function() {
  //     $('#color').removeClass(colors[i]);
  //     $('#color').fadeIn('fast').addClass(colors[i+1]);
  //   }, (i*5000));
  // } 
  setTimeout(function() {
    $('#color').removeClass(colors[0]);
    $('#color').fadeIn('fast').addClass(colors[1]);
  }, 5000); 
  setTimeout(function() {
    $('#color').removeClass(colors[1]);
    $('#color').fadeIn('fast').addClass(colors[2]);
  }, 10000);
  setTimeout(function() {
    $('#color').removeClass(colors[2]);
    $('#color').fadeIn('fast').addClass(colors[3]);
  }, 15000);
  setTimeout(function() {
    $('#color').removeClass(colors[3]);
    $('#color').fadeIn('fast').addClass(colors[4]);
  }, 20000);
  setTimeout(function() {
    $('#color').removeClass(colors[4]);
    $('#color').fadeIn('fast').addClass(colors[5]);
  }, 25000);

  setTimeout(function() {
    $('#color').removeClass(colors[5]);
    $('#color').fadeIn('fast').addClass('clear');
  }, 30000);

  setTimeout(storeSelections, 30000);
}

//FUNCTIONS FOR GENERATING THE GRID

function makeGrid() {
  var blocks      = makeBlocks();
  var colors      = getColors();
  for (var i = 0; i < 6; i++) fillGrid(blocks[i], colors[i]);
  var correctGrid = [];
  for (var i = 0; i < 25;i++) {
    correctGrid.push($('li#' + [i]).css("background-color"));
  }
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
  var colors = ['red', 'green', 'orange', 'blue', 'yellow', 'purple'];
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
    $("li#"+blocks[i]).addClass(background);       
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











