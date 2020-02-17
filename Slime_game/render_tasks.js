
function updateRender(player){
    if(movementUnlocked){
        if(keyStatus["wKey"]){
            console.log("Moving cursor forward!");
            //player.movePlayer("forward");
            //cursorMove("forward");
        }
        if(keyStatus["aKey"]){
            console.log("Moving cursor left!");
            //player.movePlayer("left");
            //cursorMove("left");
        }
        if(keyStatus["sKey"]){
            console.log("Moving cursor backward!");
            //player.movePlayer("backward");
            //cursorMove("backward");
        }
        if(keyStatus["dKey"]){
            console.log("Moving cursor right!");
           //player.movePlayer("right");
            //cursorMove("right");
        }
        if(keyStatus["enter"]){
            //followCursor();
        }
        if(keyStatus["space"]){
            //moveEnemy();
        }
    }
}
