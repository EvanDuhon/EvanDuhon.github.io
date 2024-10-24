$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
   


    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

createPlatform(200,700,200,10);

createPlatform(100,600,200,10)

createPlatform(30,700,10,10)

createPlatform(800,700,200,10)

createPlatform(1100,600,200,10)

createPlatform(800,500,200,10)

createPlatform(1000,200,200,10)

createPlatform(700,400,2,2)

createPlatform(800,300,7,2)

createPlatform(900,85,10,2)

createPlatform(850,85,100,2)

createPlatform(800,85,100,2)

createPlatform(700,85,100,2)

createPlatform(600,700,100,2)

createPlatform(500,405,100,2)

createPlatform(400,400,1,1)

createPlatform(450,300,10,10)

createPlatform(200,400,10,10)

createPlatform(100,300,10,10)

createPlatform(50,200,1,1)










    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable("max", 1100, 170, 0.001, 0.3);

    createCollectable("star", 40, 100, 0.001, 0.3)

    createCollectable("emerald", 600, 300, 5, 0.01)

    createCollectable("smashball", 800, 100,0.001,)

    createCollectable("fallout", 900, 100,100, 0.001)

    createCollectable("coin",800,30)

    

    








    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)




    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////

    createCannon("top", 400, 900, 20, 20 ); 
    
    createCannon("left", 400, 3000, 20, 100 ); 

    createCannon("right",400,2000,100,10);

    createCannon("right", 800,0,3000)
  




  }

  registerSetup(setup);
});
