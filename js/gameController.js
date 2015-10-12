angular.module('gameApp')
  .controller('GameController', GameController);

  function GameController(){
    this.all = [];

    this.newX = "X";

    this.add = addX;

    function addX() {
      this.all.push(this.newX);
      console.log(this.newX);
    };

  };