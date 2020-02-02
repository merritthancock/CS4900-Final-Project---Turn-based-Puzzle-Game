
function updateRender(){
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
    
    
        if(movementUnlocked){
            if(keyStatus["wKey"]){
                cursorForward();
            }
            if(keyStatus["aKey"]){
                cursorLeft();
            }
            if(keyStatus["sKey"]){
                cursorBackward();
            }
            if(keyStatus["dKey"]){
                cursorRight();
            }
            if(keyStatus["enter"]){
                followCursor();
            }
        }
}
