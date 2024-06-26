var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE


     // E.D; creates saw blade
    function createSawBlade(x,y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
     
      var obstacleImage = draw.bitmap("img/sawblade.png");
  sawBladeHitZone.addChild(obstacleImage);
      
      obstacleImage.x = -25
      obstacleImage.y = -25
  
      sawBladeHitZone.x = x ;
      sawBladeHitZone.y = y ;
      game.addGameItem(sawBladeHitZone);
    }
    //E.D; changes the postion of the sawblades
    createSawBlade(600,560)

   createSawBlade(1600,660)

   createSawBlade(2000,560)


   function createEnemy(x,y) { 
    var enemy = game.createGameItem("enemy", 25);
   var blueSquare = draw.rect(50, 50, "blue");
   blueSquare.x = -25;
   blueSquare.y = -25;
   enemy.x = x;
    enemy.y = y;
enemy.addChild(blueSquare);
  
game.addGameItem(enemy);
   

   enemy.velocityX = -5

   enemy.onPlayerCollision = function () {
    game.changeIntegrity(-50)
   };
  
   enemy.onProjectileCollision = function(){
    game.increaseScore(200);
enemy.fadeOut();
   }

  }
  createEnemy(800, groundY - 60);
  
  createEnemy(1900, groundY - 60)
  

  function createReward(x, y) {
    var reward = game.createGameItem("reward", 32);
    var gem = draw.bitmap("https://pngimg.com/d/vinyl_PNG1.png");
    gem.x = -32;
    gem.y = -32;
    reward.scaleX = 0.1
    reward.scaleY = 0.1
    reward.addChild(gem);
    reward.x = x;
    reward.y = y;
    game.addGameItem(reward);
    reward.velocityX = -2;
    

    reward.onPlayerCollision = function () {
      game.changeIntegrity(25);
      game.increaseScore(300);
      reward.fadeOut();
    };
  }
        
    createReward(3000, groundY -100)

    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 32);
      var flag = draw.bitmap("https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/United-States-of-America-PNG/US_Waving_Flag_Transparent_PNG_Clip_Art_Image.png?m=1629819363");
      flag.x = -32;
      flag.y = -32;
      flag.scaleX = 0.04
      flag.scaleY = 0.04
      marker.addChild(flag);
      marker.x = x;
      marker.y = y;
      game.addGameItem(marker);
      marker.velocityX = -2;

      marker.onPlayerCollision = function () {
        marker.fadeOut();
        startLevel();
      };
      marker.onProjectileCollision = function () {
        marker.fadeOut();
        startLevel();
      };
    }
   
   
  
   createMarker(2500, groundY - 150)

    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[1].currentLevel[1]
      var levelObjects = levelData[1].gameItems

      for (var i = 0; i < levelData.length; i++) {
      var levelData = levelData[i]
      createEnemy(x,y);
      createSawBlade(x,y);
      createReward(x,y);
      createMarker(x,y);
      }
       
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
