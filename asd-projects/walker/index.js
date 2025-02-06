/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40
  }

  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0, 
    speedX: 0,
    speedY: 0 

  }

  var width = $('#board').css('width')
  var height = $('#board').css('height')
  console.log(width)
  console.log(height)
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup',handleKeyUp)
  
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()

    redrawGameItem()
    
    wallCollision(390,390)
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.ENTER) {
    console.log("enter pressed")
  }
    if(event.which === KEY.LEFT) {
    console.log("left pressed")
    walker.speedX = -5
  }

    if(event.which === KEY.RIGHT){
    console.log("right pressed")
    walker.speedX = 5
  }

    if(event.which === KEY.UP){
    console.log("up pressed")
    walker.speedY = -5
  }

    if(event.which === KEY.DOWN){
      console.log("down pressed")
      walker.speedY = 5
  }
   }

  function handleKeyUp(event){
    if(event.which === KEY.LEFT) {
      console.log("left released")
      walker.speedX = 0
     }
    if(event.which === KEY.RIGHT){
      console.log("right released")
      walker.speedX = 0
     }
     if(event.which === KEY.UP){
      console.log("up released")
      walker.speedY = 0
    }
    if(event.which === KEY.DOWN){
      console.log("down released")
      walker.speedY = 0
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function repositionGameItem() {
  walker.positionX += walker.speedX;
  walker.positionY += walker.speedY;
  }

  function redrawGameItem (){
    $("#walker").css("left", walker.positionX);
    $("#walker").css("top", walker.positionY);
  }
   

  function wallCollision(height, width){
     if(walker.positionX < 0){
      walker.positionX = 0
     }
     if(walker.positionX > width){
      walker.positionX = width
     }
     if(walker.positionY > height){
      walker.positionY = height
  }
  
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
}
