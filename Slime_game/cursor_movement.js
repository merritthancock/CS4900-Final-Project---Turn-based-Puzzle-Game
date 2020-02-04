var cursor_startPos = [2, 1.1, 2];
var cursor_currentPos = [2, 1.1, 2];

//movementUnlocked boolean allows restriction of only one movement at a time
var movementUnlocked = true;

//Set Position
function cursorSet(x, y, z){
    cursor_currentPos = [x, y, z];
    cursor.position.set(x, y, z);
}

//Moves in desired direction (forward, backward, left, or right according to the xyz axis)
function cursorMove(direction){
    //Check if movement of the cursor is locked
    if(movementUnlocked){
        //If movement is unlocked, lock the movement so that the cursor is not useable while movement takes place
        movementUnlocked = false;
        
        switch(direction){
            case "forward":
                cursor_currentPos[2] += 1
                break;
            case "backward":
                cursor_currentPos[2] -= 1;
                break;
            case "left":
                cursor_currentPos[0] += 1;
                break;
            case "right":
                cursor_currentPos[0] -= 1;
                break;
        }
        cursor_currentPos[1] = cursor_startPos[1] + heightMap[cursor_currentPos[0]][cursor_currentPos[2]];
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}
//Move Forward (deprecated)
function cursorForward(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[2] += 1
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Backwards (deprecated)
function cursorBackward(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[2] -= 1;
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Left (deprecated)
function cursorLeft(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[0] += 1;
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Right (deprecated)
function cursorRight(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[0] -= 1;
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//ResetPosition
function cursorReset(){
    cursor.position.set(cursor_startPos[0], cursor_startPos[1], cursor_startPos[2]);
}

//Move Up
function cursorUp(){
    cursor_currentPos[1] += 1;
    cursor.position.set(cursor_startPos[0], cursor_startPos[1], cursor_startPos[2]);
}

//Move Down
function cursorDown(){
    cursor_currentPos[1] -= 1;
    cursor.position.set(cursor_startPos[0], cursor_startPos[1], cursor_startPos[2]);
}