var startPos = [1, 0.5, 1];
var currentPos = [1, 0.5, 1];

//Set Position
function setPosition(x, y, z){
    currentPos = [x, y, z];
    player.position.set(x, y, z);
}

//Move Forward
function moveForward(){
    currentPos[2] += 1
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move Backwards
function moveBackwards(){
    currentPos[2] -= 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move Left
function moveLeft(){
    currentPos[0] += 1;
    player.position.set(currentPos[0], currentPos[1], currentPos[2]);
}

//Move Right
function moveRight(){
    currentPos[0] -= 1;
    player.position.set(currentPos[0], startPos[1], startPos[2]);
}

//ResetPosition
function resetPosition(){
    player.position.set(startPos[0], startPos[1], startPos[2]);
}

//Move Up
function moveUp(){
    currentPos[1] += 1;
    player.position.set(startPos[0], startPos[1], startPos[2]);
}

//Move Down
function moveDown(){
    currentPos[1] -= 1;
    player.position.set(startPos[0], startPos[1], startPos[2]);
}