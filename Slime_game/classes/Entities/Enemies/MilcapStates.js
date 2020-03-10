import { State } from "../../../libraries/yuka-master/src/yuka.js";

//these constants can be used for animations and others
const PATROL = 'PATROL';
const PURSUE = 'PURSUE';

class PatrolState extends State{

    enter(enemy) {
        console.log("Now patrolling!");
        //can be used to play an animation of some sort
    }

    execute(enemy){
        if(enemy.seesPlayer()) {
            enemy.stateMachine.changeTo(PURSUE);
        }
        enemy.moveEPath();
    }

    exit(enemy){
        //some sort of alert to the player
       
    }

}

class PursueState extends State{

    enter(enemy) {
        console.log("Now chasing player!");
    }

    execute(enemy){
        if(!enemy.seesPlayer()) {
            enemy.stateMachine.changeTo(PATROL);
        }
        enemy.moveToPlayer();
    }

    exit(enemy){

    }

}

export {PatrolState, PursueState};