angular.module('gameApp')
  .controller('GameController', GameController);

  function GameController(){
    this.all = [];

    this.storeMoves = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    //new Array(9);

    this.newX = "X";

    this.addX = function() {
      console.log('working');
      this.all.push(this.newX);

    }

  };

// function MoveController() {

// }

// decide which of X or O starts
// angular looks at a collection, when it changes, something can happen on page - so html needs to look at an array or object - 9 cells is either x or o, or neither ""

// array of 9 all '', when you click that position in array with x or o
// tell td to always display the value of array, then tell to 

