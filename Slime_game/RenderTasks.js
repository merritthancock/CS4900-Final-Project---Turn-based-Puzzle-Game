import {unlocked, getLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {hover, aStar} from "./classes/Pathing.js";
import { passTurn } from "./classes/TurnManager.js";
import {currentLevel} from "./classes/LevelManager.js";

function updateRender(currentLevel){
    if(unlocked) {
        if(keyStatus["wKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Forward!");
            currentLevel.cursor.moveCursor(currentLevel.cursor, "forward");
            currentLevel.cursor.cursorHeight(currentLevel.cursor, currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["aKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Left!");
            currentLevel.cursor.moveCursor(currentLevel.cursor, "left");
            currentLevel.cursor.cursorHeight(currentLevel.cursor, currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["sKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Backward!");
            currentLevel.cursor.moveCursor(currentLevel.cursor, "backward");
            currentLevel.cursor.cursorHeight(currentLevel.cursor, currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["dKey"]){
            getLock("inputHandler");
            console.log("Moving Cursor Right!");
            currentLevel.cursor.moveCursor(currentLevel.cursor, "right");
            currentLevel.cursor.cursorHeight(currentLevel.cursor, currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["enter"]){
            getLock("inputHandler");

            let goalX = currentLevel.cursor.position[0];
            let goalY = currentLevel.cursor.position[2];

            //Check if player is selected
            if(currentLevel.board.selected != null && currentLevel.player.id == currentLevel.board.selected.id){
                let currentX = currentLevel.player.position[0];
                let currentY = currentLevel.player.position[2];
                //if cursor is on player, deselect. Else, try to move player and then deselect.
                if(currentX == goalX && currentY == goalY){
                    currentLevel.board.select(currentLevel.player);
                }
                else{
                    let xDistance = Math.abs(goalX - currentX);
                    let yDistance = Math.abs(goalY - currentY);
                    //if cursor is within movementRange of player, move player and pass turn. Else, deselect.
                    if(xDistance + yDistance <= currentLevel.player.movementRange){
                        aStar(currentX, currentY, goalX, goalY, currentLevel.board, currentLevel.player);
                        currentLevel.board.select(currentLevel.player);
                        passTurn();
                    }
                    else{
                        currentLevel.board.select(currentLevel.player);
                    }
                }
            }
            //if something other than player is selected, deselect
            else if(currentLevel.board.selected != null){
                currentLevel.board.select(currentLevel.board.selected);
            }
            //if nothing is selected, select whatever's currently occupying
            else if(currentLevel.board.tileArray[goalX][goalY].occupant != null){
                currentLevel.board.select(currentLevel.board.tileArray[goalX][goalY].occupant);
            }

            hover(currentLevel.board);
        }
        if(keyStatus["space"]){
            getLock("inputHandler");
        }
        if(keyStatus["mKey"]){
            getLock("inputHandler");
            board.enemies.update();
        }
    }
}

export {updateRender};