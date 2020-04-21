import { State } from "../../../libraries/yuka-master/src/yuka.js";
import {currentLevel} from "../../Global.js";
import { Pinpod } from "./Pinpod.js";

const SPAWN = 'SPAWN';
const ACTION = 'ACTION';
const AOE = 'AOE';
const CHARGE = 'CHARGE';

class SpawnState extends State { //PINBEAST IS ONLY VULNERABLE DURING THIS STATE
    enter(enemy){
       //alerted animation
    }

    execute(enemy){
        for(let i = 0; i < 4; i++){
            let x = Math.floor(Math.random() * enemy.spawnRange + 1);
            let z = Math.floor(Math.random() * enemy.spawnRange + 1);
            let ePos = [enemy.position[0] + x, 1, enemy.position[2] + z];
            let pinpod = new Pinpod(ePos, enemy.childID.toString(), 1, 2);
            currentLevel.enemies.push(pinpod);
            currentLevel.board.tileArray[ePos[0]][ePos[2]].occupant = pinpod;
            enemy.childID++;
            console.log(pinpod.position);
        }
        enemy.stateMachine.changeTo(ACTION);
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
    }

    execute(enemy){
        //checks how many pinpods remain on level
        enemy.babies = 0;
        for(let i = 0; i < currentLevel.enemies.length; i++){
           if(currentLevel.enemies[i].type == 'PINPOD'){
               enemy.babies++;
           } 
        }
        console.log(enemy.babies);
        if(enemy.babies == 0){
            enemy.stateMachine.changeTo(SPAWN);
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
        //attack animation HERE
        //uses AOE attack
        for(let i = 0; i < currentLevel.enemies.length; i++){
            if(currentLevel.enemies[i].type != 'PINBEAST' || currentLevel.enemies[i].type != 'PINPOD'){
                let status = currentLevel.enemies[i].takeDamage(enemy.attackPower);
                if (status == 'DEAD'){
                    currentLevel.enemies[i].model.visible = false;
                    currentLevel.board.tileArray[currentLevel.enemies[i].position[0]][currentLevel.enemies[i].position[2]].occupant = null;
                    currentLevel.enemies.splice(i,1);
               }
            }
        }
        console.log("MASSIVE DAMAGE TAKEN");
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
       //Some tooltip to show the player to watch out
       enemy.path.add(currentLevel.player.position);
    }

    execute(enemy){
        
    }

    exit(enemy){
        
    }
}


export {SpawnState, ActionState, AOEState, ChargeState};