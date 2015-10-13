document.addEventListener("DOMContentLoaded", function(){ 
  new Blick() 
});

function Blick() {  
  this.turn           = 0;
  this.turnNumber     = 3;
  this.playerOneScore = 0;
  this.playerTwoScore = 0;
  this.playerOneWins  = 0;
  this.playerTwoWins  = 0;
  this.gridSize       = 25;
  this.correctGrid, 
  this.selectedGrid,
  this.player,
  this.turnCounter,
  this.winner;
}


Blick.prototype.responsiveOverlay = function(){
  if (document.documentElement.clientWidth >= 960) {    
    $('#overlay1').fadeIn("slow").html("<h2>welcome to blick.</h2><p>blick is a two player game. this is how it works.</p><p>a board of colors will appear for five seconds.</p><p>you must recreate it by adding color to the correct squares in a blank grid.</p><p>you have five seconds to add each color to the board.</p><p>each color will be shown in the red box.</p><p>each player has three turns.</p><p>choose the biggest grid you dare.</p><p>happy blicking.</p><div id='letsblick'>let's blick.</div>");
      $('#overlay1').css("padding", "0 15px");
      $('p').css("font-size", "14px");
  } else if (document.documentElement.clientWidth < 960 && document.documentElement.clientWidth > 840){
    $('#overlay1').html("<h2>welcome to blick.</h2><div id='letsblick'>let's blick.</div>");
    $('#playerOneTurn').remove();
    $('#playerTwoTurn').remove();
  } else if (document.documentElement.clientWidth <= 840){
    $('#overlay1').html("<h2>BLICK.</h2><div id='letsblick'>let's blick.</div>");
    $('#overlay1').css("width", "51.5vw").css("height", "51.5vw").css("left", "24.5%").css("top","15px");
    $('#overlay0').remove();
    $('#overlay2').remove();
    $('#letsblick').css("font-size","12px").css("letter-spacing","0").css("width", "60px").css("border", "2px solid #78909C").css("height", "60px");
    $('#playerOneTurn').remove();
    $('#playerTwoTurn').remove();
    $('#totalScores').remove();
    };
  $('#letsblick').on("click", this.setup.bind(this));  
};

Blick.prototype.setup = function() {
  $('#overlay0').fadeOut("slow");
  $('#overlay1').fadeOut("slow");
  $('#overlay2').fadeOut("slow");
  $('#infoText').text("player one goes first, press start to begin.");
  $('#small').on("click", this.makeGridSmall.bind(this));
  $('#medium').on("click", this.makeGridMedium.bind(this));
  $('#large').on("click", this.makeGridLarge.bind(this));
  $('#start').on("click", this.startGame.bind(this));
}

Blick.prototype.makeGridSmall = function() {
  gridSize = 16;
  $('ul').html('<li id="0"></li><li id="15"></li><li id="14"></li><li id="13"></li><li id="1"></li><li id="2"></li><li id="11"></li><li id="12"></li><li id="4"></li><li id="3"></li><li id="10"></li><li id="9"></li><li id="5"></li><li id="6"></li><li id="7"></li><li id="8"></li>');
  $('li').css("width", "25%").css("height", "25%");
}

Blick.prototype.makeGridMedium = function() {
  gridSize = 25;
  $('ul').html('<li id="0"></li><li id="1"></li><li id="18"></li><li id="17"></li><li id="16"></li><li id="3"></li><li id="2"></li><li id="19"></li><li id="20"></li><li id="15"></li><li id="4"></li><li id="23"></li><li id="22"></li><li id="21"></li><li id="14"></li><li id="5"></li><li id="24"></li><li id="9"></li><li id="10"></li><li id="13"></li><li id="6"></li><li id="7"></li><li id="8"></li><li id="11"></li><li id="12"></li>');
  $('li').css("width", "20%").css("height", "20%");
}

Blick.prototype.makeGridLarge = function() {
  gridSize = 36;
  $('ul').html('<li id="16"></li><li id="15"></li><li id="14"></li><li id="13"></li><li id="10"></li><li id="9"></li><li id="17"></li><li id="18"></li><li id="19"></li><li id="12"></li><li id="11"></li><li id="8"></li><li id="22"></li><li id="21"></li><li id="20"></li><li id="35"></li><li id="34"></li><li id="7"></li><li id="23"></li><li id="30"></li><li id="31"></li><li id="32"></li><li id="33"></li><li id="6"></li><li id="24"></li><li id="29"></li><li id="28"></li><li id="3"></li><li id="4"></li><li id="5"></li><li id="25"></li><li id="26"></li><li id="27"></li><li id="2"></li><li id="1"></li><li id="0"></li>');
  $('li').css("width", "16.666666667%").css("height", "16.666666667%");
}

Blick.prototype.startGame = function() {
  this.clearBoard();
  $('li').css("background-color","none");
  $('#color').removeClass();
  turn+= 0.5;
  if (turn % 1 != 0) {
    player        = 'playerOneScore';
    turnCounter   = 'playerOneTurn';
  } else {
    this.player        = 'playerTwoScore';
    this.turnCounter   = 'playerTwoTurn';
  };
  if (turn <= this.turnNumber) {
    this.playRound();
  };
}

Blick.prototype.clearBoard = function() {
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
  for (var i = 0; i < colors.length; i++) fillGrid(blocks[i], colors[i]);
  correctGrid = [];
  setTimeout(storeCorrect, 700); 
  console.log(correctGrid);
  return correctGrid;
}

function storeCorrect() {
  for (var i = 0; i < gridSize;i++) {
    correctGrid.push($('li#' + [i]).css("background-color"));
  }
}

function makeBlocks() {
  var blockLimits = getBlockLimits();
  var block0      = getBlock(-1, blockLimits[0]);
  var block1      = getBlock(blockLimits[0], blockLimits[1]);
  var block2      = getBlock(blockLimits[1], blockLimits[2]);
  var block3      = getBlock(blockLimits[2], blockLimits[3]);
  var block4      = getBlock(blockLimits[3], blockLimits[4]);
  var block5      = getBlock(blockLimits[4], gridSize-1);
  return blocks   = [block0, block1, block2, block3, block4, block5];
}

function getBlockLimits() {
  var startingBlocks = [];
  for (var i = 1; i <= gridSize-2; i++) {startingBlocks.push(i)}
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
  for (var i = 0; i < gridSize;i++) {
    selectedGrid.push($('li#' + [i]).css("background-color"));
  }
  console.log(selectedGrid);
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
    $('#infoText').text("time for player two, press start to begin");
  } else {
    $('#infoText').text("time for player one, press start to begin");
  }
}

function winnerMessage() {
  if (playerOneScore > playerTwoScore) {
    winner = 'player one';
    playerOneWins++;
    $('#infoText').text(winner + ' wins, press start to replay.');
    $('#playerOneWins').text('player one:' + playerOneWins);

  } else if (playerTwoScore > playerOneScore) {
    winner = 'player two';
    playerTwoWins++;
    $('#infoText').text(winner + ' wins, press start to replay.');
    $('#playerOneWins').text('player one:' + playerTwoWins);
  } else if (playerOneScore === playerTwoScore) {
    winner = 'tie';
    $('#infoText').text("its a draw, press start to replay.");
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