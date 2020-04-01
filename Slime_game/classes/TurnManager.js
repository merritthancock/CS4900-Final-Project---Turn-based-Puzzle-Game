import { getMasterLock, releaseMasterLock} from "../Semaphore.js";
import { PriorityQueue } from "../libraries/yuka-master/src/yuka.js";

let turnCount = 0;
let isPlayerTurn = true;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

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
            currentEnemy.resetMovement();
            while(currentEnemy.remainingAP > 0) {
                currentEnemy.update();
                await sleep(100);
                currentEnemy.decrementAP();
            }
        }
        passTurn(currentLevel);
    }
    else {
        let player = currentLevel.player;
        isPlayerTurn = true;
        player.resetAP();
        player.resetMovement();
        currentLevel.cursor.model.visible = true;
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