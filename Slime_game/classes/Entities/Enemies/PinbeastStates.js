import { State } from "../../../libraries/yuka-master/src/yuka.js";
import {currentLevel} from "../../Global.js";
import { Pinpod } from "./Pinpod.js";

const SPAWN = 'SPAWN';
const ACTION = 'ACTION';
const AOE = 'AOE';
const CHARGE = 'CHARGE';

class SpawnState extends State { //PINBEAST IS ONLY VULNERABLE DURING THIS STATE
    enter(enemy){
        let selectAnimation = THREE.AnimationClip.findByName( enemy.animations, 'alert' );
        let selectAction = enemy.mixer.clipAction( selectAnimation );
        selectAction.setLoop(THREE.LoopOnce);
        enemy.mixer.stopAllAction();
        selectAction.play();
        enemy.mixer.addEventListener( 'finished', function callBack( e ) { 
            let idle = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
            let idleAction = enemy.mixer.clipAction( idle );
            enemy.mixer.stopAllAction();
            idleAction.play();
            enemy.mixer.removeEventListener(callBack)
        } );
    }

    execute(enemy){
        let ePos;
        let current = 0;
        if(enemy.babies <= 4){
            let x = 0;
            let z = 0;
            //reroll spawn point until it lands on a valid point
            while(true) {
                x = Math.floor(Math.random() * enemy.spawnRange + 1);
                z = Math.floor(Math.random() * enemy.spawnRange + 1);
                if(currentLevel.board.tileCheck(x, z)) {
                    if(currentLevel.board.tileArray[x][z].occupant == null
                        && currentLevel.board.heightMap[x][z] < 2) {
                            break;
                        } 
                }
            }
            //play spawn animation
            let selectAnimation = THREE.AnimationClip.findByName( enemy.animations, 'spawn' );
            let selectAction = enemy.mixer.clipAction( selectAnimation );
            selectAction.setLoop(THREE.LoopOnce);
            enemy.mixer.stopAllAction();
            selectAction.play();
            enemy.mixer.addEventListener( 'finished', function callBack( e ) { 
                let idle = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
                let idleAction = enemy.mixer.clipAction( idle );
                enemy.mixer.stopAllAction();
                idleAction.play();
                enemy.mixer.removeEventListener(callBack)
            } );
            //spawns a pinpod every turn in a quadrant surrounding the pinbeast
            switch(enemy.babies){
                case 0:
                    ePos = [enemy.position[0] + x, 1, enemy.position[2] + z];
                    enemy.babies++;
                    break;
                case 1:
                    ePos = [enemy.position[0] - x, 1, enemy.position[2] - z];
                    enemy.babies++;
                    break;
                case 2:
                    ePos = [enemy.position[0] + x, 1, enemy.position[2] - z];
                    enemy.babies++;
                    break;

                case 3:
                    ePos = [enemy.position[0] - x, 1, enemy.position[2] + z];
                    enemy.babies++;
                    break;

            }
        }
        let i = enemy.babies - 1;
        currentLevel.enemies[i].position = ePos;
        currentLevel.enemies[i].model.visible = true;
        currentLevel.enemies[i].model.position.x = currentLevel.enemies[i].position[0];
        currentLevel.enemies[i].model.position.y = currentLevel.enemies[i].position[1];
        currentLevel.enemies[i].model.position.z = currentLevel.enemies[i].position[2];
        console.log(currentLevel.enemies[i].position);
        currentLevel.board.tileArray[currentLevel.enemies[i].position[0]][currentLevel.enemies[i].position[2]].occupant = currentLevel.enemies[i];
        currentLevel.enemies[i].stateMachine.changeTo('RETRACT');
        currentLevel.enemies[i].living = 'ALIVE';

        if(enemy.babies == 4){
            enemy.stateMachine.changeTo(ACTION);
        }
       
    }

    exit(enemy){
        
    }
}

class ActionState extends State {
    enter(enemy){
        //takes a movement of some kind
        let x = Math.floor(Math.random() * enemy.spawnRange + 1);
        let z = Math.floor(Math.random() * enemy.spawnRange + 1);
        enemy.path.add([x, 1, z]);
        
        enemy.attackCharge = 3;
        
        enemy.babies = 4;
        
    }

    execute(enemy){
        //checks how many pinpods remain on level
        //enemy.babies = 0;
        //console.log(currentLevel.respawnable);
        let actual = 0;
        for(let i = 0; i < currentLevel.enemies.length; i++){
           if(currentLevel.enemies[i].type == 'PINPODSP' && currentLevel.enemies[i].living == 'ALIVE'){
               actual++;
           } 
        }
        //console.log(actual);
        if(actual == 0){
            enemy.babies = 0;
            enemy.stateMachine.changeTo(CHARGE);
        }
        else if (actual != enemy.babies){//resetting attack charge with each absorb
            //alert animation
            enemy.attackCharge += 3;
            enemy.babies = actual;
        }

        else{
            console.log(enemy.attackCharge, " turns until attack!");
            enemy.attackCharge--;
            if(enemy.attackCharge == -1){
                enemy.stateMachine.changeTo(AOE);
            }
         }
        

    }

    exit(enemy){
        
    }
}

class AOEState extends State {
    enter(enemy){
        console.log("MASSIVE DAMAGE TAKEN");

        let selectAnimation = THREE.AnimationClip.findByName( enemy.animations, 'roar' );
        let selectAction = enemy.mixer.clipAction( selectAnimation );
        selectAction.setLoop(THREE.LoopOnce);
        enemy.mixer.stopAllAction();
        selectAction.play();
        enemy.mixer.addEventListener( 'finished', function callBack( e ) { 
            let idle = THREE.AnimationClip.findByName( enemy.animations, 'idle' );
            let idleAction = enemy.mixer.clipAction( idle );
            enemy.mixer.stopAllAction();
            idleAction.play();
            enemy.mixer.removeEventListener(callBack)
        } );

        enemy.attack(enemy.attackPower);
        enemy.stateMachine.changeTo(ACTION);
    }

    execute(enemy){
        
    }

    exit(enemy){
        
    }

}

class ChargeState extends State {//charges in direction of player
    enter(enemy){
    }

    execute(enemy){
        enemy.moveToPlayer(10);
        currentLevel.player.takeDamage(1);
        enemy.stateMachine.changeTo(SPAWN);
    }

    exit(enemy){
        //enemy.path.clear();
    }
}


export {SpawnState, ActionState, AOEState, ChargeState};