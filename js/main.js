
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
    $('.' + i).text(board[i]);
  }
}

//This function set the "X" player as the first player.
//He starts the game.
function renderText(){
  if(!checkDraw()){
  $('.playerText').text('Turn : ' + player);
} else{
  // $('.playerText').text('It\'s a draw');
  draw();
}
}


function setCell(cell){
  var autoPlay = $( "#autoPlay" ).is(":checked");
  if (gameOver) return;
  //Check if the div(cell) isn't filled.
  if (board[cell] !== " ") {
    return; //exit function
  }

  board[cell] = player;

  //The checkState() function will verify if any player has won.
  checkState();
  if (gameOver) return;
  changePlayer();
  if(player === "O" && autoPlay){
    oMove();
    changePlayer();
    renderBoard();
    renderText();
    checkState();
    return;
  }
  checkState();
  renderBoard();
  renderText();

}

//This function just change the player.
function changePlayer(){
  if (player == "O")
    return player = "X";
  else
    return player = "O";
}

function checkState(){
  $.each(winConditions, function(index,value){
   if (board[winConditions[index][0]] == board[winConditions[index][1]]
    && board[winConditions[index][0]] == board[winConditions[index][2]]
    && board[winConditions[index][0]] != " "){
      gameOver = true;
      $('.playerText').text('Player ' + player + ' wins');
      winner();
      renderBoard();
   }
  });
}

//Initialize function: renders the board with null values and defines
//who is the current player.
function init(){
  board = [" "," "," "," "," "," "," "," "," "];
  player = "X";
  gameOver = false;
  renderBoard();
  renderText();
}

var checkDraw = function () {
  for (var i = 0; i < board.length; i++) {
    if ( board[i] === " " ) {
      return false;
    }
  }
  return true;
};

//Set the 'O' player move.
var oMove = function(){
  var i = Math.floor((Math.random()*9)+1);
  // MAKE SURE NO ONE IS IN THIS POSITION AND IT IS NOT A DRAW
  if (board[i] !== " " && !checkDraw()) {
    return oMove(); //exit function
  }
  return board[i]=player;


};

//Alert window for the winner!
var winner = function() {

  swal({
    title: "GAME OVER!",
    text: "Player " + player.toUpperCase() + " won the game!",
    confirmButtonText: "Ok!",
    confirmButtonColor: '#5d9634'
  },function(){location.reload()});
};


//Alert window for the draw!
var draw = function() {
  swal({
    title: "Hmm, it's a draw!",
    text: "No wins!",
    confirmButtonText: "Ok!",
    confirmButtonColor: '#5d9634'
  }, function(){location.reload()});
};


//Call initialize function after the page had been rendered
$(document).ready(function(){
  init();
});
