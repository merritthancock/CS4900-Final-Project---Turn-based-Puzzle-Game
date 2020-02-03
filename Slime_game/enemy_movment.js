var enemyStartPos = [8, 0.5, 8];
var enemyCurrentPos = [8, 0.5, 8];

//Moves in desired direction (forward, backward, left, or right according to the xyz axis)
function enemyMove(direction){
    switch(direction){
        case "forward":
            enemyCurrentPos[2] += 1
            break;
        case "backward":
            enemyCurrentPos[2] -= 1;
            break;
        case "left":
            enemyCurrentPos[0] += 1;
            break;
        case "right":
            enemyCurrentPos[0] -= 1;
            break;
    }
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Forward (deprecated)
function enemyForward(){
    enemyCurrentPos[2] += 1
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Backwards (deprecated)
function enemyBackward(){
    enemyCurrentPos[2] -= 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Left (deprecated)
function enemyLeft(){
    enemyCurrentPos[0] += 1;
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

//Move Right (deprecated)
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

//Move Enemy
function moveEnemy(){
    var eNum = Math.floor((Math.random() * 4) + 1);
    switch(eNum){
        case 1:
            enemyMove("forward");
            break;
        case 2:
            enemyMove("left");
            break;
        case 3:
            enemyMove("right");
            break;
        case 4:
            enemyMove("backward");
            break;
    }
}