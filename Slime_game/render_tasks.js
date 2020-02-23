import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./keyboard_input.js";
import {scene} from "./classes/Controller.js";

function updateRender(board){
    if(unlocked) {
        //console.log(board.cursor.id);
        if(keyStatus["wKey"]){
            getLock();
            console.log("Moving cursor forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock();
            console.log("Moving cursor left!");
            board.cursor.moveCursor(board.cursor, "left");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock();
            console.log("Moving cursor backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock();
            console.log("Moving cursor right!");
            board.cursor.moveCursor(board.cursor, "right");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["enter"]){
            getLock();
            board.player.followCursor(board.player, board.cursor);
        }
        if(keyStatus["space"]){
            getLock();
            //moveEnemy();
        }
    }
}

function hover(board){//initiates methods when cursor hovers over entities/tiles
    var cPos = board.cursor.position;
    var type = board.tileMap[cPos[0]][cPos[2]];
    var height = board.heightMap[cPos[0]][cPos[2]];
    var pPos = board.player.position;
    //board.cursor.cursorHeight(height + 0.5);
    console.log("Type: ", typeList(type));
    console.log("Height: ", height);
    console.log("Occupied by: ", occupied(board.player, pPos, cPos));
    //board.cursor.position = (cPos[0], height + 0.5, cPos[2]);
    //return type;
}

function typeList(type){//Returns the terrain name for logging to console
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

function occupied(player, pPos, cPos){
    //var occupied = false;
    if(pPos[0] == cPos[0] && pPos[2] == cPos[2]){
        //occupied == true;
        var overlayList = player.movementOverlayHelper(pPos[0], pPos[2], player.movementRange, 1);//will need to read player height in future
        for(var i = 0; i < overlayList.length; i++){
            scene.add(overlayList[i]);
        }
        return "Player";
    }
    else{
        return "None";
    }
}
export {updateRender};