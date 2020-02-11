var startPos = [2, 0.5, 2];
var currentPos = [2, 0.5, 2];
var range = 1;

//movementUnlocked boolean allows restriction of only one movement at a time
var movementUnlocked = true;

//Set Position
function setPosition(x, y, z){
    currentPos = [x, y, z];
    player.position.set(x, y, z);
}

//ResetPosition (deprecated)
function resetPosition(){
    player.position.set(startPos[0], startPos[1], startPos[2]);
}

//Moves in desired direction (forward, backward, left, or right according to the xyz axis)
function playerMove(direction){
    if(movementUnlocked){
        //If movement is unlocked, lock the movement so that the cursor is not useable while movement takes place
        movementUnlocked = false;
        
        switch(direction){
            case "forward":
                currentPos[2] += 1
                break;
            case "backward":
                currentPos[2] -= 1;
                break;
            case "left":
                currentPos[0] += 1;
                break;
            case "right":
                currentPos[0] -= 1;
                break;
        }
        currentPos[1] = startPos[1] + heightMap[currentPos[0]][currentPos[2]];
        player.position.set(currentPos[0], currentPos[1], currentPos[2]);
    }
}

//Move to cursor position
function followCursor(){
    if(checkGrid(cursor_currentPos, currentPos, range) == true){
        setPosition(cursor_currentPos[0], currentPos[1], cursor_currentPos[2]); 
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