import { getLock, releaseLock } from "../Semaphore.js";

let turnCount = 0;
let isPlayerTurn = true;

function passTurn(board){
    turnCount++;
    
    //if player turn, pass turn to enemy and handle enemy movement
    if(isPlayerTurn) {
        getLock("turnManager");
        isPlayerTurn = false;

        //TODO: Make this more robust for moving enemies, also move enemy movement logic and passTurn call to other file
        board.enemies.moveEPath();
        passTurn();
    }
    else{
        isPlayerTurn = true;
        releaseLock("turnManager");
    }
}

export {passTurn};