angular.module('gameApp')
  .controller('GameController', GameController);

  function GameController(){
    //this.all = [];

    this.playerMove = 'X';

    this.storeMoves = new Array(9);

    this.moveX = []

    this.moveO = []

    this.newX = "X";

    this.addX = function() {
      console.log('working');
      this.moveX.push(this.newX);
    };

    this.assignMove = function(num) {
      console.log('working')
      
      if (this.playerMove === 'X') {
        this.moveX.push(num)
        console.log(num)
        this.playerMove = "X"
         //render X in td
      };

      if (this.playerMove === 'O'){
        this.moveO.push(num)
        console.log(num)
        this.playerMove = "O"
        //render O in td
      };
    };
  };

// 9 cells - either x or o, or neither ""
// array of 9 all '', when you click that position in array with x or o
// tell td to always display the value of array, then tell to 