var startPos = [1, 0.5, 1];
var currentPos = [1, 0.5, 1];

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

//Move Backwards
function moveBackward(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[2] -= 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//Move Left
function moveLeft(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[0] += 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//Move Right
function moveRight(){
    if(movementUnlocked){
        movementUnlocked = false;
        currentPos[0] -= 1;
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//ResetPosition
function resetPosition(){
    player.position.set(startPos[0], startPos[1], startPos[2]);
}

//Move Up
function moveUp(){
    currentPos[1] += 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move Down
function moveDown(){
    currentPos[1] -= 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move to cursor position
function followCursor(){
    if(checkGrid(cursor_currentPos[0], cursor_currentPos[2]) == true){
        setPosition(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}