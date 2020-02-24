import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {scene} from "./classes/Controller.js";
import {hover} from "./classes/Pathing.js";
import {camera} from "./classes/Controller.js";
import {moveCamera} from "./classes/Camera.js";

function updateRender(board){
    if(unlocked) {
        if(keyStatus["wKey"]){
            getLock();
            console.log("Moving Cursor Forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            moveCamera(camera, "forward");
            //board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock();
            console.log("Moving Cursor Left!");
            board.cursor.moveCursor(board.cursor, "left");
            moveCamera(camera, "backward");
            //board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock();
            console.log("Moving Cursor Backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            //moveCamera(camera, "left");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock();
            console.log("Moving Cursor Right!");
            board.cursor.moveCursor(board.cursor, "right");
            //moveCamera(camera, "right");
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
        }
    }
}

export {updateRender};