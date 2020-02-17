
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

}

function hover(board){//initiates methods when cursor hovers over entities/tiles
    cPos = board.cursor.position;
    var type = board.tileMap[cPos[0]][cPos[2]];
    var height = board.heightMap[cPos[0]][cPos[2]];
    console.log("Type: ", typeList(type));
    console.log("Height: ", height);
    //board.cursor.position = (cPos[0], height + 0.5, cPos[2]);
    //return type;
}

function typeList(type){
    switch(type){
        
        case 0:
            return "Grass";
        case 1:
            return "Rocky";
        case 2:
            return "Water";
        case 3:
            return "Gap";
        case 4:
            return "Cave";
        case 8:
            return "Exit";
        case 9://may change as board gen changes
            return "Void";
    }
}