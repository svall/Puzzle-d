// Set up HTML to create the game:

// VARIABLES:

// Create an array that will still store objects that have an x and y coordinate;
var grid = [];
// A turn variable that enables the click and swap function;
var turn = 0;


// images mostly come from http://wallpapersafari.com/fantasy-wallpaper-hd/
// and icloudpicture.com
// and wallpapercave.com
// and wallpaperspider.com
// and hebus.org

var urls = [
  'url("http://i.imgur.com/B8xsff4.jpg?4")',
  'url("http://i.imgur.com/b5gcmnR.jpg?2")',
  'url(http://i.imgur.com/CWvP6zh.jpg?3)',
  'url("http://i.imgur.com/wxiGxy4.jpg?2")',
  'url("http://i.imgur.com/mGOb37s.jpg?2")',
  'url("http://i.imgur.com/v1PL2vP.jpg?2")',
  'url("http://i.imgur.com/7yaWUPc.jpg?2")',
  'url("http://i.imgur.com/NABahjE.jpg?2")',
  'url("http://i.imgur.com/m5JWcJs.jpg?2")',
  'url("http://i.imgur.com/HWs6Mym.jpg?2")',
  'url(http://i.imgur.com/WTfFodP.jpg?1)',
  'url(http://i.imgur.com/oebBjiq.jpg?1)',
  'url(http://i.imgur.com/HHNJgI4.jpg?1)',
  'url(http://i.imgur.com/78E3bq8.jpg?1)',
  'url(http://i.imgur.com/j9ZGSEo.jpg?1)',
  'url(http://i.imgur.com/4tHIBRd.jpg?1)',
  'url(http://i.imgur.com/8DdNP7D.jpg?1)',
  'url(http://i.imgur.com/N68ZBQq.jpg?1)',
  'url(http://i.imgur.com/tCsEvH1.jpg?1)',
  'url(http://i.imgur.com/t0UZaxh.jpg?1)',
  'url(http://i.imgur.com/ylZqPy0.jpg?1)',
  'url(http://i.imgur.com/XWEwK0t.jpg?1)',
  'url(http://i.imgur.com/YfvBWpt.jpg?1)',
  'url(http://i.imgur.com/2fAB4Dd.jpg?1)',
  'url(http://i.imgur.com/bPE5EGG.jpg?1)',
  'url(http://i.imgur.com/lkDTmWU.jpg?1)',
  'url(http://i.imgur.com/XvW5rbG.jpg?1)',
  'url(http://i.imgur.com/QpNUSmu.jpg?1)',
  'url(http://i.imgur.com/x5hvRpM.jpg?1)',
  'url(http://i.imgur.com/we5I01I.jpg?1)',
  'url(http://i.imgur.com/Oyulxw2.jpg?1)',
  'url(http://i.imgur.com/SvPUVD4.jpg?1)',
  'url(http://i.imgur.com/Cx4sIMa.jpg?1)',
  'url(http://i.imgur.com/gCyXIMp.jpg?1)',
  'url(http://i.imgur.com/3QO407x.jpg?1)',
  'url(http://i.imgur.com/iFPHLUy.jpg?1)',
  'url(http://i.imgur.com/lepW0fU.jpg?1)',
  'url(http://i.imgur.com/Wznote1.jpg?1)',
  'url(http://i.imgur.com/VReShs1.jpg?1)',
  'url(http://i.imgur.com/uWySC43.jpg?1)',
  'url(http://i.imgur.com/IgkwQ9j.jpg?1)'

];

var randomUrl = Math.floor(Math.round(Math.random() * (urls.length - 1)))

// FUNCTIONS:

// function that creates the objects with x and y coordinates that get placed inside the grid array.
// var createGridEasy = function() {
//   for (var i = 0; i < 2; i++) {
//     grid[i] =[];
//     for (var j = 0; j < 3; j++) {
//       grid[i][j] = { x: (i * -800), y: (j * -300)};
//     }
//   }
// }

// createGrid();

// after DOM loads
$(function(event) {
console.log("Puzzle-d!");

// VARIABLES

var currentBoard = $('#piece').toArray();

// Easy Dimensions
var easyHeight = 169;
var easyWidth = 451;
var mediumHeight = 84.5;
var mediumWidth = 225.5;
var hardHeight = 84.5;
var hardWidth = 112.75;
var expertHeight = 50.7;
var expertWidth = 56.375;


// Functions to load boards

// EASY PUZZLE
var createGridEasy = function() {
  for (var i = 0; i < 2; i++) {
    grid[i] =[];
    for (var j = 0; j < 3; j++) {
      grid[i][j] = { x: (i * -easyWidth), y: (j * -easyHeight)};
    }
  }
}

// MEDIUM PUZZLE
var createGridMedium = function() {
  for (var i = 0; i < 4; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      grid[i][j] = { x: (i * -mediumWidth), y: (j * -mediumHeight)};
    }
  }
}

//HARD PUZZLE
var createGridHard = function() {
  for (var i = 0; i < 8; i++) {
    grid[i] =[];
    for (var j = 0; j < 6; j++) {
      grid[i][j] = { x: (i * -hardWidth), y: (j * -hardHeight)};
    }
  }
}

//EXPERT PUZZLE
var createGridExpert = function() {
  for (var i = 0; i < 16; i++) {
    grid[i] =[];
    for (var j = 0; j < 10; j++) {
      grid[i][j] = { x: (i * -expertWidth), y: (j * -expertHeight)};
    }
  }
}

// Function to create the individual divs that will populate the game board.

//EASY
var $container = $('.container');
var createBoardEasy = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : easyHeight,
           'width' : easyWidth
          })
         $container.append(block);
         counter++;
      }
  }
  this.disabled = true;
}

//MEDIUM
var $container = $('.container');
var createBoardMedium = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : mediumHeight,
           'width' : mediumWidth
          })
         $container.append(block);
         counter++;
      }
  }
 this.disabled = true;
}

//HARD
var $container = $('.container');
var createBoardHard = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : hardHeight,
           'width' : hardWidth
          })
         $container.append(block);
         counter++;
      }
  }
  this.disabled = true;
}

//EXPERT
var $container = $('.container');
var createBoardExpert = function() {
  var counter = 0;
  for (var a = 0; a < grid.length; a++) {
       for(var b  = 0; b < grid[a].length; b++) {
         var block = $('<div>');
         block.addClass('piece');
         block.attr('id' , 'piece' + counter);
         block.css({
           'background-image' : urls[randomUrl],
           'background-position' : grid[a][b].x+'px '+grid[a][b].y+'px',
           'height' : expertHeight,
           'width' : expertWidth
          })
         $container.append(block);
         counter++;
      }
  }
this.disabled = true;
}


// createBoard();

// Function that generates the puzzle.
var startPuzzle = function() {
  boxes = $('.piece');
  for(var i = 0; i < boxes.length; i++) {
    boxes.addClass('clickPiece');
    var target = Math.floor(Math.random() * boxes.length - 1) + 1;
    var target2 = Math.floor(Math.random() * boxes.length -1) + 1;
    boxes.eq(target).before(boxes.eq(target2));
  }
  currentBoard = $('.piece').toArray();
  this.disabled = true;
}


// On first click collect piece ID, on second cick switch previous piece with current piece.

function swapTiles() {
  $('.clickPiece').on('click', function() {
  console.log('test!');
  if(turn === 0) {
    console.log('turn 0');
    divA = this;
    turn++;
  } else if(turn === 1) {
    divB = this;
    holder = this.style.backgroundPosition;
    holderId = this.id;
    console.log('turn 1');
    divB.style.backgroundPosition = divA.style.backgroundPosition;
    divA.style.backgroundPosition = holder;
    divB.id = divA.id;
    divA.id = holderId;
    // checks to see if you've put the puzzle back together
    checkWin();
    turn--;
   }
  })
}

// function to check if all of the puzzle pieces are in the correct order on the board.
function checkWin() {
  var win = true;
  for (var i = 0; i < currentBoard.length; i++) {
    if (currentBoard[i].id != ('piece' + i)) {
      win = false;
    }
  }
  console.log(win);
  if(win === true) {
    alert("you win!");
  }
}

// Function that solves puzzle. To remove after game finished.
var solvePuzzle = function() {
  boxes = $('.piece');
  for (var i = 0; i < boxes.length; i++) {
    $("#piece"+ i).insertAfter("#piece" + (i-1));
  }
  currentBoard = $('.piece').toArray();
}


// Timer function

var startTimer = function(){
  var sec = 0;

  var pad = function(val) {
    return val > 9 ? val : "0" + val;
  }

  var timer = setInterval(function () {
    $('#seconds').html(pad(++sec % 60));
    $('#minutes').html(pad(parseInt(sec / 60, 10)));
  }, 1000);

  setTimeout(function() {
    clearInterval(timer);
  }, 9900000);
}

// EVENT LISTENERS

// Loads puzzle

// EASY PUZZLE LOADING
$('.loadEasy').on('click', createGridEasy);
$('.loadEasy').on('click', createBoardEasy);

// MEDIUM PUZZLE LOADING
$('.loadMedium').on('click', createGridMedium);
$('.loadMedium').on('click', createBoardMedium);

// HARD PUZZLE LOADING
$('.loadHard').on('click', createGridHard);
$('.loadHard').on('click', createBoardHard);

// EXPERT PUZZLE LOADING
$('.loadExpert').on('click', createGridExpert);
$('.loadExpert').on('click', createBoardExpert);

// Generates puzzle
$('.generatePuzzle').on('click', startPuzzle);
$('.generatePuzzle').on('click', swapTiles);
$('.generatePuzzle').on('click', startTimer);


// Solves the puzzle (to remove after game is built)
$('.fixPuzzle').on('click', solvePuzzle);

// Checks to see if winning condition is met.
$('.winCheck').on('click', checkWin);


});



