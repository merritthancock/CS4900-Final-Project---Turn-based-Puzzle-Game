var startPos = [1, 0.5, 1];
var currentPos = [1, 0.5, 1];
var range = 1;

//movementUnlocked boolean allows restriction of only one movement at a time
var movementUnlocked = true;

//Set Position
function setPosition(x, y, z){
    currentPos = [x, y, z];
    player.position.set(x, y, z);
}

//Move Forward
function moveForward(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[2] += 1
        player.position.set([0], currentPos[1], currentPos[2]);
    }
}

//Move Backwards (deprecated)
function moveBackward(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[2] -= 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//Move Left (deprecated)
function moveLeft(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[0] += 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//Move Right (deprecated)
function moveRight(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[0] -= 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//ResetPosition (deprecated)
function resetPosition(){
    player.position.set(startPos[0], startPos[1], startPos[2]);
}

//Move Up (deprecated)
function moveUp(){
    currentPos[1] += 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move Down (deprecated)
function moveDown(){
    currentPos[1] -= 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move to cursor position
function followCursor(){
    if(checkGrid(cursor_currentPos, currentPos, range) == true){
        setPosition(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
        
    }
    if(idCheck(player.position.x, player.position.z) == -2){
        var fall = 10000;
        for(i = 100000; i> 0; i--){
            currentPos[1] -= 0.0001; 
            player.position.set(currentPos[0], currentPos[1], currentPos[2]);
        }
        
    }

}

function setRange(newRange){//updates the range of cursor movement
    range = newRange;

}