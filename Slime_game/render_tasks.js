
function updateRender(){
    /*
    if(keyStatus["leftArrow"]){
        moveCameraLeft();
    }
    if(keyStatus["rightArrow"]){
        moveCameraRight();
    }
    if(keyStatus["upArrow"]){
        moveCameraForward();
    }
    if(keyStatus["downArrow"]){
        moveCameraBackward();
    }
    
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
    */
    if(movementUnlocked){
        if(keyStatus["wKey"]){
           
            //cursorMove("forward");
        }
        if(keyStatus["aKey"]){
           
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

    //readGrid(cursor_currentPos, currentPos, range);
}
