var turn           = 0;
var turnNumber     = 3;
var playerOneScore = 0;
var playerTwoScore = 0;
var playerOneWins  = 0;
var playerTwoWins  = 0;
var correctGrid, 
    selectedGrid,
    player,
    turnCounter,
    winner;

$(function overlay(){

  $(window).resize(function() {
    if (document.documentElement.clientWidth >= 960) {    
      $('#overlay1').html("<h2>welcome to blick.</h2><p>blick is a two player game. this is how it works.</p><p>a board of colors will appear for five seconds.</p><p>you must recreate it by adding color to the correct squares in a blank grid.</p><p>you have five seconds to add each color to the board.</p><p>each color will be shown in the red box.</p><p>happy blicking you blicking blickers.</p><div id='letsblick'>let's blick.</div>");
    } else if (document.documentElement.clientWidth < 960 && document.documentElement.clientWidth > 640){
      $('#overlay1').html("<h2>welcome to blick.</h2><p>happy blicking you blicking blickers.</p><div id='letsblick'>let's blick.</div>");
    } else if (document.documentElement.clientWidth <= 640){
      $('#overlay0').remove();
      $('#overlay1').remove();
      $('#overlay2').remove();
    }  }).resize();

  $('#letsblick').on("click", setup);  
});

function setup() {
  $('#overlay0').remove();
  $('#overlay1').remove();
  $('#overlay2').remove();
  $('#infoText').text("player one goes first, click 'new game' to begin.");
  $('#start').on("click", startGame);
}

function startGame() {
  clearBoard();
  $('#color').removeClass();
  turn+= 0.5;
  if (turn % 1 != 0) {
    player        = 'playerOneScore';
    turnCounter   = 'playerOneTurn';
  } else {
    player        = 'playerTwoScore';
    turnCounter   = 'playerTwoTurn';
  };
  if (turn <= turnNumber) {
    playRound();
  };
}

function clearBoard() {
  $('li').removeClass();
}

//1. PLAY THE GAME.

function playRound() {
  $('#infoText').text("remember the colours.")
  correctGrid  = makeGrid();
  selectedGrid = [];
  setTimeout(selectColors, 5000); 
  setTimeout(updateScore, 37000);
  setTimeout(scoreMessage, 39000);
}

//1.1 MAKE THE GRID.

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

function getBlockLimits() {
  var startingBlocks = [];
  for (var i = 1; i <= 23; i++) {startingBlocks.push(i)}
  var shuffledBlocks = shuffle(startingBlocks);
  var randomBlocks   = startingBlocks.splice(3, 5);
  var blockLimits    = sortRandomBlocks(randomBlocks);
  return blockLimits;
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

function sortRandomBlocks(randomBlocks) {
  randomBlocks.sort(function(a,b) {
    return a-b;
  });
  return randomBlocks;
}

function getBlock(lowerLimit, upperLimit) {
  var block = [];
  for (var i = lowerLimit + 1; i <= upperLimit; i++) {
      block.push(i);
  }
  return block;
}

function getColors() {
  var colors = ['red', 'green', 'orange', 'blue', 'yellow', 'purple'];
  var shuffledColors = shuffle(colors);
  return shuffledColors;
}

function fillGrid(blocks, background) {
  for (var i = 0; i < blocks.length; i++) {
    $("li#"+blocks[i]).addClass(background);       
  }
}

//1.2 PLAYER SELECTS THE COLORS.

function selectColors() {
  removeColors();
  colorTimer();
  $('li').on("click", function() {
    $(this).removeClass();
    $(this).toggleClass($('#color').attr('class'));
  });
}

function removeColors() {
  var shadows = ['shadow1', 'shadow2', 'shadow3', 'shadow4', 'shadow5', 'shadow6']
  shuffle(shadows);
  $('li.red').removeClass().addClass(shadows[0]);
  $('li.green').removeClass().addClass(shadows[1]);
  $('li.orange').removeClass().addClass(shadows[2]);
  $('li.blue').removeClass().addClass(shadows[3]);
  $('li.yellow').removeClass().addClass(shadows[4]);
  $('li.purple').removeClass().addClass(shadows[5]);
}

function colorTimer() {
  var colors = ['red', 'green', 'orange', 'blue', 'yellow', 'purple'];
  $('#color').fadeIn('fast').addClass(colors[0]);
  $('#infoText').text("select your squares.");

  var currentColor = colors[0];  
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
    $('#infoText').text("times up.");

  }, 30000);
  setTimeout(storeSelections, 30000);
}

function storeSelections() {
  selectedGrid = [];
  for (var i = 0; i < 25;i++) {
    selectedGrid.push($('li#' + [i]).css("background-color"));
  }
  return selectedGrid;
}

//1.3 UPDATE THE SCORE.


function updateScore() {
  compareGrids(correctGrid, selectedGrid);
}

function compareGrids(correctGrid, selectedGrid) {
  var score = 0;
  for(var i = 0; i <correctGrid.length; i++){
    if (correctGrid[i] === selectedGrid[i]) score++
  }
  console.log(score);
  if (turn % 1 != 0) {
    playerOneScore = playerOneScore + score;
    $('#' + player).text("score: " + playerOneScore);
  } else {
    playerTwoScore = playerTwoScore + score;
    $('#' + player).text("score: " + playerTwoScore);
  }
  $('#' + turnCounter).text("turns taken: " + Math.ceil(turn));
  $('#infoText').text("you scored " + score + ".");
}

//2. DECLARE WINNER 

function scoreMessage() {
  $('li').removeClass();
  if (turn === turnNumber) {
    winnerMessage();
  } else if (turn % 1 != 0) {
    $('#infoText').text("time for player two, click 'new game' to begin");
  } else {
    $('#infoText').text("time for player one, click 'new game' to begin");
  }
}

function winnerMessage() {
  if (playerOneScore > playerTwoScore) {
    winner = 'player one';
    playerOneWins++;
    $('#infoText').text(winner + ' wins, click play to start again.');
    $('#playerOneWins').text('player one:' + playerOneWins);

  } else if (playerTwoScore > playerOneScore) {
    winner = 'player two';
    playerTwoWins++;
    $('#infoText').text(winner + ' wins, click play to start again.');
    $('#playerOneWins').text('player one:' + playerTwoWins);
  } else if (playerOneScore === playerTwoScore) {
    winner = 'tie';
    $('#infoText').text("its a draw, click play to start again.");
  }
  resetGame();
}

function resetGame() {
  playerOneScore = 0;
  playerTwoScore = 0;
  $('#color').fadeIn('fast').addClass('clear');
  $('#playerOneScore').text('score: 0');
  $('#playerTwoScore').text('score: 0');

  turn = 0;
  correctGrid, selectedGrid, player, turnCounter, winner;
  clearBoard();



}


//TO DO

//MAKE INTO OBJECTS

//MAKE MOBILE

//MULTIPLE BOARD SIZES 
//CHANGE NUMBER OF COLORS

// ip address: 62.254.81.74


















