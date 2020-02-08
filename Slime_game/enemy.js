var enemyStartPos = [8, 0.5, 8];
var enemyCurrentPos = [8, 0.5, 8];

//Moves in desired direction (forward, backward, left, or right according to the xyz axis)
function moveEnemy(direction){
    switch(direction){
        case "forward":
            enemyCurrentPos[2] += 1;
        case "backward":
            enemyCurrentPos[2] -= 1;
        case "left":
            enemyCurrentPos[0] += 1;
        case "right":
            enemyCurrentPos[0] -= 1;
    }
    enemy.position.set(enemyCurrentPos[0], enemyCurrentPos[1], enemyCurrentPos[2]);
}

function resetEnemy(){
    enemy.position.set(enemyStartPos[0], enemyStartPos[1], enemyStartPos[2]);
}