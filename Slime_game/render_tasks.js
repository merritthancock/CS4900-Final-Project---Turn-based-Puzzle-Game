
function updateRender(){
    if(keyStatus["leftArrow"]){
        camera.translateX(-0.3)	;
    }
    if(keyStatus["rightArrow"]){
        camera.translateX(0.3);
    }
    if(keyStatus["upArrow"]){
        camera.translateY(0.3);
        camera.translateZ(-0.3);  
    }
    if(keyStatus["downArrow"]){
        camera.translateY(-0.3);
        camera.translateZ(0.3);
    }
    if(keyStatus["qKey"]){
        camera.position.x = x * Math.cos(rotSpeed) - z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) + x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);
    }
    if(keyStatus["eKey"]){
        camera.position.x = x * Math.cos(rotSpeed) + z * Math.sin(rotSpeed);
        camera.position.z = z * Math.cos(rotSpeed) - x * Math.sin(rotSpeed);
        camera.lookAt(scene.position);      
    }
    if(keyStatus["oKey"]){
        camera.translateZ(-0.3);     
    }
    
    if(keyStatus["pKey"]){
        camera.translateZ(0.3);
    }
    
    if(movementUnlocked){
        if(keyStatus["wKey"]){
            //cursorForward();
            cursorMove("forward");
        }
        if(keyStatus["aKey"]){
            //cursorLeft();
            cursorMove("left");
        }
        if(keyStatus["sKey"]){
            //cursorBackward();
            cursorMove("backward");
        }
        if(keyStatus["dKey"]){
            //cursorRight();
            cursorMove("right");
        }
        if(keyStatus["enter"]){
            followCursor();
        }
        if(keyStatus["space"]){
            moveEnemy();
        }
    }
}