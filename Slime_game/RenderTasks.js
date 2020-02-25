import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {hover, aStar} from "./classes/Pathing.js";

function updateRender(board){
    if(unlocked) {
        //console.log(board.cursor.id);
        if(keyStatus["wKey"]){
            getLock();
            console.log("Moving Cursor Forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock();
            console.log("Moving Cursor Left!");
            board.cursor.moveCursor(board.cursor, "left");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock();
            console.log("Moving Cursor Backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock();
            console.log("Moving Cursor Right!");
            board.cursor.moveCursor(board.cursor, "right");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["enter"]){
            getLock();
            var goalX = board.cursor.position[0];
            var goalY = board.cursor.position[2];
            var currentX = board.player.position[0];
            var currentY = board.player.position[2];
            aStar(currentX, currentY, goalX, goalY, board, board.player);
            hover(board);
        }
        if(keyStatus["space"]){
            getLock();
            //moveEnemy();
        }
    }
}

export {updateRender};