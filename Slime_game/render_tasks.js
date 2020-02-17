
function updateRender(board){
    //console.log(board.cursor.id);
    if(movementUnlocked){
        if(keyStatus["wKey"]){
            movementUnlocked = false;
            console.log("Moving cursor forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            hover(board);
        }
        if(keyStatus["aKey"]){
            movementUnlocked = false;
            console.log("Moving cursor left!");
            board.cursor.moveCursor(board.cursor, "left");
            hover(board);
        }
        if(keyStatus["sKey"]){
            movementUnlocked = false;
            console.log("Moving cursor backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            hover(board);
        }
        if(keyStatus["dKey"]){
            movementUnlocked = false;
            console.log("Moving cursor right!");
            board.cursor.moveCursor(board.cursor, "right");
            hover(board);
        }
        if(keyStatus["enter"]){
            //followCursor();
        }
        if(keyStatus["space"]){
            //moveEnemy();
        }
    }
    //hover(board);
}

function hover(board){
    cPos = board.cursor.position;
    var type = board.tileMap[cPos[0]][cPos[2]];
    var height = board.heightMap[cPos[0]][cPos[2]];
    console.log(type);
    console.log(height);
    //board.cursor.position = (cPos[0], height + 0.5, cPos[2]);
    //return type;
}
