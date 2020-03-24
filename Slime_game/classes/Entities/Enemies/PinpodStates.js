import { State } from "../../../libraries/yuka-master/src/yuka.js";

const EXTEND = 'EXTEND';
const RETRACT = 'RETRACT';
const DEFENSE = 'DEFENSE';

class ExtendState extends State {
    enter(enemy){
        //change model to spike version
    }

    execute(enemy){
        //gives three turns in spike form
        if (enemy.turnCount >= 6){
            enemy.turnCount = 0;
            enemy.stateMachine.changeTo(RETRACT);
        }
        if(1 == 2){
            enemy.stateMachine.changeTo(DEFENSE);
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
        if (enemy.turnCount >= 3){
            console.log('SWITCHING TO SPIKE');
            enemy.stateMachine.changeTo(EXTEND);
        }
    }

    exit(enemy){

    }
}

class DefenseState extends State {
    enter(enemy){
        
    }

    execute(enemy){
       
       
    }

    exit(enemy){

    }
}

export {ExtendState, RetractState, DefenseState}