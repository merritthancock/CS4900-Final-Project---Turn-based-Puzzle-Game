import { State } from "../../../libraries/yuka-master/src/yuka.js";
import {currentLevel} from "../../Global.js";

const SPAWN = 'SPAWN';
const ACTION = 'ACTION';
const AOE = 'AOE';
const CHARGE = 'CHARGE';

class SpawnState extends State { //PINBEAST IS ONLY VULNERABLE DURING THIS STATE
    enter(enemy){
       //alerted animation
    }

    execute(enemy){
        //for loop i =0; i<4{
            //spawn new pinpod (passing along childID) in random location within a range (to avoid wall spawning) USING FLOOD FILL
            //increment childID++
       // }
    }

    exit(enemy){
        
    }
}

class ActionState extends State {
    enter(enemy){
       //takes a movement of some kind
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
        if(enemy.babies == 0){
            enemy.stateMachine.changeTo(CHARGE);
        }
        else{
            console.log(enemy.attackCharge, " turns until attack!");
            enemy.attackCharge--;
            if(enemy.attackCharge == 0){
                enemy.stateMachine.changeTo(AOE);
            }
         }
        //SWITCH AOE State

        //OR

        //SWITCH Charge State

    }

    exit(enemy){
        
    }
}

class AOEState extends State {
    enter(enemy){
        //attack animation HERE
        //uses AOE attack
        for(let i = 0; i < currentLevel.enemies.length; i++){
            if(currentLevel.enemies[i].type != 'PINBEAST'){
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
       
    }

    execute(enemy){
        
    }

    exit(enemy){
        
    }
}


export {SpawnState, ActionState, AOEState, ChargeState};