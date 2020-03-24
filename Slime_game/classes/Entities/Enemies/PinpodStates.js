import { State } from "../../../libraries/yuka-master/src/yuka.js";

const EXTEND = 'EXTEND';
const RETRACT = 'RETRACT';

class ExtendState extends State {
    enter(enemy){
        //change model to spike version
        if(enemy.seesPlayer()){
            enemy.attack(enemy.attackPower);
        }
    }

    execute(enemy){
        //gives three turns in spike form
        enemy.turnCount++;
        console.log(enemy.turnCount);
        if (enemy.turnCount >= 6){
            enemy.turnCount = 0;
            console.log('SWITCHING TO NOSPIKE');
            enemy.stateMachine.changeTo(RETRACT);
        }
        else if(enemy.seesPlayer()){
            //attack animation
            enemy.attack(enemy.attackPower);
        }
    }

    exit(enemy){

    }
}

class RetractState extends State {
    enter(enemy){
       //change model to non-spike version 
    }

    execute(enemy){
        //Gives three turns of retracted spikes
        enemy.turnCount++;
        console.log(enemy.turnCount);
        if (enemy.turnCount >= 3){
            console.log('SWITCHING TO SPIKE');
            enemy.stateMachine.changeTo(EXTEND);
        }
    }

    exit(enemy){

    }
}
export {ExtendState, RetractState}