import { getMasterLock, releaseMasterLock} from "../Semaphore.js";
import { PriorityQueue } from "../libraries/yuka-master/src/yuka.js";
import { sleep } from "./Global.js";
import { loseLevel, winLevel, replayTracker, finalWin } from "./Controller.js";
import { playEnemy } from "./Sounds.js";

let turnCount = 0;
let isPlayerTurn = true;

async function passTurn(currentLevel) {
    turnCount++;
    let enemyPriorityQueue = buildPriorityQueue(currentLevel.enemies);

    //if player turn, pass turn to enemy and handle enemy actions
    if(isPlayerTurn) {
        getMasterLock();
        isPlayerTurn = false;
        currentLevel.cursor.model.visible = false;

        //TODO: Make this more robust for moving enemies, also move enemy movement logic and passTurn call to other file
        while(enemyPriorityQueue.peek() != null) {
            await sleep(250);
            //Get next enemy on the priority queue, give it its AP for the turn,
            //and update until it runs out of AP.
            let currentEnemy = enemyPriorityQueue.pop();
            currentEnemy.resetAP();
            while(currentEnemy.decrementAP() != null) {
                //gross spinlock to allow alert animations to finish
                currentEnemy.update();
                playEnemy();
                await sleep(100);
            }
        }

        //checks for end game
        if(currentLevel.player.mass <= 0){//lose game
            loseLevel();
        }
        if(currentLevel.getUIData().playerTile.type == 8){//win game
            winLevel();
        }
        if(replayTracker == 3){//checks for beating level 3
            let eneArray = currentLevel.enemies;
            let i;
            let checker = true;
            for(i = 0; i < eneArray.length; i++){
                if(eneArray[i].type == "PINBEAST"){
                    checker = false;
                } 
            }
            if(checker == true){
                finalWin();
            }
        }

        passTurn(currentLevel);
    }
    else {
        let player = currentLevel.player;
        isPlayerTurn = true;
        player.resetAP();
        currentLevel.cursor.model.visible = true;
        releaseMasterLock();

        //checks for end game
        if(currentLevel.player.mass <= 0){//lose game
            loseLevel();
        }
        if(currentLevel.getUIData().playerTile.type == 8){//win game
            winLevel();
        }
        if(replayTracker == 3){//checks for beating level 3
            let eneArray = currentLevel.enemies;
            let i;
            let checker = true;
            for(i = 0; i < eneArray.length; i++){
                if(eneArray[i].type == "PINBEAST"){
                    checker = false;
                } 
            }
            if(checker == true){
                finalWin();
            }
        }
    }
}

let enemyPriorityCompare = function(enemy1, enemy2) {
    if(enemy1.priority < enemy2.priority) {
        return -1;
    }
    else if (enemy1.priority > enemy2.priority) {
        return 1;
    }
    else {
        return 0;
    }
}

function buildPriorityQueue(enemies) {
    let enemyPriorityQueue = new PriorityQueue(enemyPriorityCompare);
    for(let i = 0; i < enemies.length; i++) {
        enemyPriorityQueue.push(enemies[i]);
    }
    return enemyPriorityQueue;
}

export {passTurn};