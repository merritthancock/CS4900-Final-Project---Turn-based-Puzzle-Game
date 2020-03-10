import {State} from "../../../libraries/yuka-master/src/yuka.js";
import {Board} from "../../Board.js";

//these constants can be used for animations and others
const PATROL = 'PATROL';
const PURSUE = 'PURSUE';

class PatrolState extends State{

    enter(enemy) {
        //can be used to play an animation of some sort
    }

    execute(enemy){
        enemy.moveEPath();
    }

    exit(enemy){
        //some sort of alert to the player
       
    }

}

class PursueState extends State{

    enter(enemy) {

    }

    execute(enemy){
        enemy.moveToPlayer();
    }

    exit(enemy){

    }

}

export {PatrolState, PursueState};