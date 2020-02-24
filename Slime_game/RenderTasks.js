import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {scene} from "./classes/Controller.js";
import {hover} from "./classes/Pathing.js";
import {camera} from "./classes/Controller.js";

function updateRender(board){
    if(unlocked) {
        if(keyStatus["wKey"]){
            getLock();
            console.log("Moving Cursor Forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            //camera.position.z += 1;
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock();
            console.log("Moving Cursor Left!");
            board.cursor.moveCursor(board.cursor, "left");
            //camera.position.x += 1;
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock();
            console.log("Moving Cursor Backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            //camera.position.z -= 1;
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock();
            console.log("Moving Cursor Right!");
            board.cursor.moveCursor(board.cursor, "right");
            //camera.position.x -= 1;
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["enter"]){
            getLock();
            board.player.followCursor(board);
            hover(board);
        }
        if(keyStatus["space"]){
            getLock();
            //moveEnemy();
        }
    }
}

export {updateRender};