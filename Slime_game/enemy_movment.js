var enemyStartPos = [1, 0.5, 1];
var enemyCurrentPos = [1, 0.5, 1];


//Move Forward
function enemyForward(){
    enemyCurrentPos[2] += 1
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Backwards
function enemyBackward(){
    enemyCurrentPos[2] -= 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Left
function enemyLeft(){
    enemyCurrentPos[0] += 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Right
function enemyRight(){
    enemyCurrentPos[0] -= 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//ResetPosition
function resetEnemy(){
    enemy.position.set(enemyStartPos[0], enemyStartPos[1], enemyStartPos[2]);
}

//Move Up
function enemyUp(){
    enemyCurrentPos[1] += 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Down
function enemyDown(){
    enemyCurrentPos[1] -= 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}