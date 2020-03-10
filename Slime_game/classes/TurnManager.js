import { getMasterLock, releaseMasterLock} from "../Semaphore.js";
import { currentLevel } from "./LevelManager.js";
import { PriorityQueue } from "../libraries/yuka-master/src/yuka.js";

let turnCount = 0;
let isPlayerTurn = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function passTurn(enemies) {
    turnCount++;
    let enemyPriorityQueue = buildPriorityQueue(enemies);

    //if player turn, pass turn to enemy and handle enemy movement
    if(isPlayerTurn) {
        getMasterLock();
        isPlayerTurn = false;
        //TODO: Make this more robust for moving enemies, also move enemy movement logic and passTurn call to other file
        while(enemyPriorityQueue.peek() != null) {
            await sleep(250);
            enemyPriorityQueue.pop().update();
        }
        passTurn(enemies);
    }
    else{
        isPlayerTurn = true;
        releaseMasterLock();
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