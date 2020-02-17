
function updateRender(board){
    //console.log(board.cursor.id);
    if(movementUnlocked){
        if(keyStatus["wKey"]){
            movementUnlocked = false;
            console.log("Moving cursor forward!");
            board.cursor.moveCursor(board.cursor, "forward");
        }
        if(keyStatus["aKey"]){
            movementUnlocked = false;
            console.log("Moving cursor left!");
            board.cursor.moveCursor(board.cursor, "left");
        }
        if(keyStatus["sKey"]){
            movementUnlocked = false;
            console.log("Moving cursor backward!");
            board.cursor.moveCursor(board.cursor, "backward");
        }
        if(keyStatus["dKey"]){
            movementUnlocked = false;
            console.log("Moving cursor right!");
            board.cursor.moveCursor(board.cursor, "right");
        }
        if(keyStatus["enter"]){
            //followCursor();
        }
        if(keyStatus["space"]){
            //moveEnemy();
        }
    }
}
