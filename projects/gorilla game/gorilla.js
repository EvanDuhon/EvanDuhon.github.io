let state = {};

const canvas = document.getElementById("game");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d")


function draw(){
    ctx.save(); 
    // Flip coordinate system upside down 
    ctx.translate(0, window.innerHeight); 
    ctx.scale(1, -1); 
    
    // Draw scene 
    drawBackground(); 
    drawBuildings();
    drawGorilla(1);
    drawGorilla(2);
    drawBomb(); 
    
    // Restore transformation 
    ctx.restore(); 
}

function drawBackground(){
    ctx.fillStyle = "#58A8D8";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

function drawBuildings() {
  
  }
  
  function drawGorilla(player) {
   
  }
  
  function drawBomb() {
  
  }
newGame();

function newGame(){
state = {
phase: "aiming",
currentPlayer: 1,
bomb: {
    x: undefined,
    y: undefined,
    velocity: {x: 0, y: 0},
},
buildings: generateBuildings(),
};

initializeBombPosition();

draw();
}

function draw(){

}

function throwBomb(){

}

function animate(timestamp){
    
}

function generateBuildings(){

}

function initializeBombPosition(){

}