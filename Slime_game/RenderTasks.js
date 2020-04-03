import {unlocked, getLock, masterLock} from "./Semaphore.js";
import {keyStatus} from "./KeyboardInput.js";
import {hover} from "./classes/Pathing.js";
import {currentLevel} from "./classes/Controller.js";

function updateRender(){
    if(unlocked && !masterLock) {
        if(keyStatus["wKey"]){
            getLock("inputHandler");
            currentLevel.cursor.moveCursor("forward");
            currentLevel.cursor.cursorHeight(currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["aKey"]){
            getLock("inputHandler");
            currentLevel.cursor.moveCursor("left");
            currentLevel.cursor.cursorHeight(currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["sKey"]){
            getLock("inputHandler");
            currentLevel.cursor.moveCursor("backward");
            currentLevel.cursor.cursorHeight(currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["dKey"]){
            getLock("inputHandler");
            currentLevel.cursor.moveCursor("right");
            currentLevel.cursor.cursorHeight(currentLevel.board.tileArray[currentLevel.cursor.position[0]][currentLevel.cursor.position[2]].height + .6);
            hover(currentLevel.board);
        }
        if(keyStatus["enter"]){
            getLock("inputHandler");

            currentLevel.cursor.click();

            hover(currentLevel.board);
        }
        if(keyStatus["space"]){
            getLock("inputHandler");
            currentLevel.player.update();
        }
        if(keyStatus["mKey"]){
            getLock("inputHandler");
            currentLevel.enemies[0].update();
        }
    }
}

export {updateRender};