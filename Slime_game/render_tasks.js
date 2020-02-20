import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./keyboard_input.js";
import {scene} from "./classes/Controller.js";
import {hover} from "./classes/Pathing.js";

function updateRender(board){
    if(unlocked) {
        //console.log(board.cursor.id);
        if(keyStatus["wKey"]){
            getLock();
            console.log("Moving Cursor Forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock();
            console.log("Moving Cursor Left!");
            board.cursor.moveCursor(board.cursor, "left");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock();
            console.log("Moving Cursor Backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            board.cursor.cursorHeight(board.cursor, board.board[board.cursor.position[0]][board.cursor.position[2]].height);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock();
            console.log("Moving Cursor Right!");
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

export {updateRender};