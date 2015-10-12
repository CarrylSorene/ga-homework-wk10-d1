angular.module('gameApp')
  .controller('GameController', GameController);

  function GameController(){
    //this.all = [];

    this.storeMoves = new Array(9);

    this.moveX = []

    this.move0 = []

    this.newX = "X";

    this.addX = function() {
      console.log('working');
      this.all.push(this.newX);

    }

  };

// function MoveController() {

// }

// decide which of X or O starts

// 9 cells is either x or o, or neither ""

// array of 9 all '', when you click that position in array with x or o
// tell td to always display the value of array, then tell to 