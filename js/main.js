  //Set main variables

  var player = "x";
  var move = 0;

  //Check the winner, changes the player, fill the values.

  var chkGame = function(id) {
      var tst = chkText(id);
      var autoPlay = document.getElementById('autoPlay').checked;
      if(tst === ""){
        var textnode = document.createTextNode(player);
        document.getElementById(id).appendChild(textnode);
        move++;
        if (winChk()) {
            return winner();
        };

        if(move >= 9){
          winChk(false);
          draw();
        }
        if(player === "x"){
          player = "o";
        }else {
          player = "x";
        }
      };
      if(player === "o" && autoPlay){

        setTimeout(function(){chkGame(oMove())},1000);
      };
  };

  //Gets the value from the div.
  var chkText = function(id){
      var text = document.getElementById(id).textContent;
      return text;
  };

  //Checks if the moves matches some of the winning conditions

  var winChk = function() {

    if (chkText("cell1") === chkText("cell2") &&
    chkText("cell1") === chkText("cell3") &&
    chkText("cell1") !== ""){

      return true;

    } else if (chkText("cell4") === chkText("cell5") &&
    chkText("cell4") === chkText("cell6") &&
    chkText("cell4") !== "") {

      return true;

    } else if (chkText("cell7") === chkText("cell8") &&
    chkText("cell7") === chkText("cell9") &&
    chkText("cell7") !== ""){

      return true;
    } else if (chkText("cell1") === chkText("cell4") &&
    chkText("cell1") === chkText("cell7") &&
    chkText("cell1") !== ""){

      return true;
    } else if (chkText("cell2") === chkText("cell5") &&
    chkText("cell2") === chkText("cell8") &&
    chkText("cell2") !== ""){

      return true;
    } else if (chkText("cell3") === chkText("cell6") &&
    chkText("cell3") === chkText("cell9") &&
    chkText("cell3") !== ""){

      return true;

    } else if (chkText("cell1") === chkText("cell5") &&
    chkText("cell1") === chkText("cell9") &&
    chkText("cell1") !== ""){

      return true;

    } else if (chkText("cell3") === chkText("cell5") &&
    chkText("cell3") === chkText("cell7") &&
    chkText("cell3") !== ""){

      return true;

    } else {

        return false;

    }
  };

  //Set the 'O' player move.
  oMove = function(){

    return "cell" + Math.floor((Math.random()*9)+1);
  };

  //Alert window for the winner!
  var winner = function() {

    swal({
      title: "GAME OVER!",
      text: "Player " + player.toUpperCase() + " won the game!",
      confirmButtonText: "Ok!",
      confirmButtonColor: '#5d9634'
    });
  //   setTimeout(function() {
  //     window.location.reload();
  //   }, 3000);
    window.location.reload();
  };


  //Alert window for the draw!
  var draw = function() {
    swal({
      title: "Hmm, it's a draw!",
      text: "No wins!",
      confirmButtonText: "Ok!",
      confirmButtonColor: '#5d9634'
    });
    window.location.reload();
  };
