
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
            //cursorMove("forward");
        }
        if(keyStatus["aKey"]){
            console.log("Moving cursor left!");
            //cursorMove("left");
        }
        if(keyStatus["sKey"]){
       
            //cursorMove("backward");
        }
        if(keyStatus["dKey"]){
            
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
