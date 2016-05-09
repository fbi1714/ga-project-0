
var board;
var player;
var winConditions = [[0,1,2], [3,4,5], [6,7,8],
                       [0,3,6], [1,4,7], [2,5,8],
                       [0,4,8], [6,4,2]];
var gameOver;

//This function renders the divs, at the
//beginning of the game.

function renderBoard (){
  for (var i = 0;i<board.length;i++){
    $('.'+i).text(board[i]);
  }
}

//This function set the "X" player as the first player.
//He starts the game.
function renderText(){
  $('.playerText').text('Turn : ' + player)
}


function setCell(cell){
  if (gameOver) return;
  //Insert the current player "X" turn into the array.
  board[cell] = player;
  //The checkState() function will verify if any player has won.
  checkState();
  if (gameOver) return;
  changePlayer();
  renderBoard();
  renderText();
}

//This function just change the player.
function changePlayer(){
  if (player == "O")
    player = "X";
  else
    player = "O";
}

function checkState(){
  $.each(winConditions,function(index,value){
   if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      $('.playerText').text('Player ' + player + ' wins');
      renderBoard();
   }
  });
}

//Initialize function: renders the board with null values and defines
//who is the current player.
function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  player ="X";
  gameOver = false;
  renderBoard();
  renderText();
}
//Call initialize function after the page had been rendered
$(document).ready(function(){
  init();
});
