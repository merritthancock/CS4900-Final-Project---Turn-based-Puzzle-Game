var cursor_startPos = [1, 0.5, 1];
var cursor_currentPos = [1, 0.5, 1];

//movementUnlocked boolean allows restriction of only one movement at a time
var movementUnlocked = true;

//Set Position
function cursorSet(x, y, z){
    cursor_currentPos = [x, y, z];
    cursor.position.set(x, y, z);
}

//Move Forward
function cursorForward(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[2] += 1
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Backwards
function cursorBackward(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[2] -= 1;
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Left
function cursorLeft(){
    if(movementUnlocked){
        movementUnlocked = false;
        cursor_currentPos[0] += 1;
        cursor.position.set(cursor_currentPos[0], cursor_currentPos[1], cursor_currentPos[2]);
    }
}

//Move Right
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