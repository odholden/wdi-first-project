$(function(){

  var startingBlocks = $('li');
  var shuffledBlocks = shuffle(startingBlocks);
  console.log(startingBlocks);
  var randomBlocks = startingBlocks.splice(3, 5);
  console.log(randomBlocks);



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






















