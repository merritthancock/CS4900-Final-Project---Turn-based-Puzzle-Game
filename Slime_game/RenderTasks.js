import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {hover, aStar} from "./classes/Pathing.js";
import { passTurn } from "./classes/TurnManager.js";

function updateRender(board){
    if(unlocked) {
        if(keyStatus["wKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Forward!");
            board.cursor.moveCursor(board.cursor, "forward");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height + .6);
            hover(board);
        }
        if(keyStatus["aKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Left!");
            board.cursor.moveCursor(board.cursor, "left");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height + .6);
            hover(board);
        }
        if(keyStatus["sKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Backward!");
            board.cursor.moveCursor(board.cursor, "backward");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height + .6);
            hover(board);
        }
        if(keyStatus["dKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Right!");
            board.cursor.moveCursor(board.cursor, "right");
            board.cursor.cursorHeight(board.cursor, board.tileArray[board.cursor.position[0]][board.cursor.position[2]].height + .6);
            hover(board);
        }
        if(keyStatus["enter"]){
            getLock("inputHandler");

            let goalX = board.cursor.position[0];
            let goalY = board.cursor.position[2];

            //Check if player is selected
            if(board.selected != null && board.player.id == board.selected.id){
                let currentX = board.player.position[0];
                let currentY = board.player.position[2];
                //if cursor is on player, deselect. Else, try to move player and then deselect.
                if(currentX == goalX && currentY == goalY){
                    board.select(board.player);
                }
                else{
                    let xDistance = Math.abs(goalX - currentX);
                    let yDistance = Math.abs(goalY - currentY);
                    //if cursor is within movementRange of player, move player and pass turn. Else, deselect.
                    if(xDistance + yDistance <= board.player.movementRange){
                        aStar(currentX, currentY, goalX, goalY, board, board.player);
                        board.select(board.player);
                        passTurn(board);
                    }
                    else{
                        board.select(board.player);
                    }
                }
            }
            //if something other than player is selected, deselect
            else if(board.selected != null){
                board.select(board.selected);
            }
            //if nothing is selected, select whatever's currently occupying
            else if(board.tileArray[goalX][goalY].occupant != null){
                board.select(board.tileArray[goalX][goalY].occupant);
            }

            hover(board);
        }
        if(keyStatus["space"]){
            getLock("inputHandler");
        }
        if(keyStatus["mKey"]){
            getLock("inputHandler");
            board.enemies.moveEPath();
        }
    }
}

export {updateRender};