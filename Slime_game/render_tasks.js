
function updateRender(){
    if(keyStatus["qKey"]){
        rotateCameraLeft();
    }
    if(keyStatus["eKey"]){
        rotateCameraRight();      
    }
    if(keyStatus["oKey"]){
        zoomCameraIn();     
    }    
    if(keyStatus["pKey"]){
        zoomCameraOut();
    }
    if(movementUnlocked){
        if(keyStatus["wKey"]){
            console.log("Moving cursor forward!");
            //player.movePlayer("forward");
            //cursorMove("forward");
        }
        if(keyStatus["aKey"]){
            console.log("Moving cursor left!");
            //player.movePlayer("left");
            //cursorMove("left");
        }
        if(keyStatus["sKey"]){
            //player.movePlayer("backward");
            //cursorMove("backward");
        }
        if(keyStatus["dKey"]){
           //player.movePlayer("right");
            //cursorMove("right");
        }
        if(keyStatus["enter"]){
            //followCursor();
        }
        if(keyStatus["space"]){
            //moveEnemy();
        }
    }
}
